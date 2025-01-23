"use client";

import { useEffect, useRef } from "react";

const FluidAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const pointers = [];
    let splatStack = [];
    const config = {
      TEXTURE_DOWNSAMPLE: 1,
      DENSITY_DISSIPATION: 0.98,
      VELOCITY_DISSIPATION: 0.99,
      PRESSURE_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 30,
      SPLAT_RADIUS: 0.005,
      SPLAT_FORCE: 6000,
      TRANSPARENT: false,
      SHADING: true,
      BLOOM: true,
    };

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const gl = canvas.getContext("webgl2", { alpha: false });
    if (!gl) {
      console.error("WebGL 2 is not supported on this browser.");
      return;
    }

    const ext = gl.getExtension("EXT_color_buffer_float");
    if (!ext) {
      console.error("EXT_color_buffer_float is not supported on this browser.");
      return;
    }

    // Compile shaders
    const baseVertexShader = compileShader(
      gl,
      gl.VERTEX_SHADER,
      `
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      void main () {
        vUv = aPosition * 0.5 + 0.5;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `
    );

    const clearShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
      precision mediump float;
      uniform float value;
      void main () {
        gl_FragColor = vec4(value, value, value, 1.0);
      }
    `
    );

    const splatShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;
      void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
      }
    `
    );

    const displayShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
      precision mediump float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      void main () {
        vec3 color = texture2D(uTexture, vUv).rgb;
        gl_FragColor = vec4(color, 1.0);
      }
    `
    );

    // Helper functions
    function compileShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function createProgram(gl, vertexShader, fragmentShader) {
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
        return null;
      }
      return program;
    }

    const programs = {
      clear: createProgram(gl, baseVertexShader, clearShader),
      splat: createProgram(gl, baseVertexShader, splatShader),
      display: createProgram(gl, baseVertexShader, displayShader),
    };

    // Event listeners
    const handleMouseMove = (e) => {
      const pointer = pointers[0] || {};
      pointer.x = e.offsetX / canvas.clientWidth;
      pointer.y = 1.0 - e.offsetY / canvas.clientHeight;
      pointer.down = true;
      pointers[0] = pointer;
      splatStack.push(pointer);
    };

    const handleMouseUp = () => {
      if (pointers[0]) pointers[0].down = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    function splat(x, y, dx, dy, color) {
      gl.useProgram(programs.splat);
      gl.uniform1f(
        gl.getUniformLocation(programs.splat, "aspectRatio"),
        canvas.width / canvas.height
      );
      gl.uniform3f(
        gl.getUniformLocation(programs.splat, "color"),
        color.r,
        color.g,
        color.b
      );
      gl.uniform2f(gl.getUniformLocation(programs.splat, "point"), x, y);
      gl.uniform1f(
        gl.getUniformLocation(programs.splat, "radius"),
        config.SPLAT_RADIUS
      );
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    function render() {
      if (pointers[0]?.down) {
        splat(pointers[0].x, pointers[0].y, 0, 0, { r: 1.0, g: 0.3, b: 0.7 });
      }
      requestAnimationFrame(render);
    }

    render();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100vw", height: "100vh", display: "block" }}
    />
  );
};

export default FluidAnimation;

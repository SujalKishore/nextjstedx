precision mediump float;
uniform vec2 uCursor;
uniform float uRadius;

void main() {
    vec2 st = gl_FragCoord.xy / uResolution;
    float dist = distance(st, uCursor);
    float intensity = exp(-dist * uRadius);
    gl_FragColor = vec4(intensity, intensity, intensity, 1.0);
}

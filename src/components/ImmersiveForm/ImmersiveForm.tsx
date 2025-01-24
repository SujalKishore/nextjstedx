"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export function ImmersiveForm() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1A0000] to-[#FF3A3A] opacity-50 z-0" />
      <div className="relative container mx-auto px-4 text-center z-10">
        <h2 className="text-4xl font-bold mb-6 text-white">
          FORGE YOUR LEGACY
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Join us in shaping the future of adventure and conservation.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/90 text-white text-lg px-8 py-3 z-20 relative">
              Start Your Journey
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-black/90 border border-[#FF3A3A]/20 text-white z-50">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#FF3A3A]">
                Join Our Mission
              </DialogTitle>
            </DialogHeader>
            <form className="space-y-4 mt-4">
              <Input
                placeholder="Your Name"
                className="bg-transparent border-[#FF3A3A]/20 focus:border-[#FF3A3A] text-white"
              />
              <Input
                placeholder="Company Name"
                className="bg-transparent border-[#FF3A3A]/20 focus:border-[#FF3A3A] text-white"
              />
              <Input
                placeholder="Email"
                type="email"
                className="bg-transparent border-[#FF3A3A]/20 focus:border-[#FF3A3A] text-white"
              />
              {/* <Select>
                <SelectTrigger className="bg-transparent border-[#FF3A3A]/20 focus:border-[#FF3A3A] text-white">
                  <SelectValue placeholder="Select Sponsorship Tier" />
                </SelectTrigger>
                <SelectContent className="bg-black text-white">
                  <SelectItem value="trailblazer">Trailblazer</SelectItem>
                  <SelectItem value="peak-performer">Peak Performer</SelectItem>
                  <SelectItem value="summit-seeker">Summit Seeker</SelectItem>
                  <SelectItem value="legacy-leader">Legacy Leader</SelectItem>
                </SelectContent>
              </Select> */}
              <Button
                type="submit"
                className="w-full bg-[#FF3A3A] hover:bg-[#FF3A3A]/90 text-white"
              >
                Submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />
    </section>
  );
}
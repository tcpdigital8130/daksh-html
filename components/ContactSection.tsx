"use client";

import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "#",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cream py-12 sm:px-8 sm:py-20 lg:px-12 xl:px-16"
    >
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 lg:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-yellow-600 sm:mb-4">
            Get In Touch
          </span>

          <h2 className="mb-2 text-2xl font-bold text-black md:text-4xl lg:mb-4 lg:text-5xl">
            Contact <span className="text-warning">Us</span>
          </h2>

          <p className="text-gray-500 sm:text-lg">
            For assessments, partnerships, or demos, reach out to us
          </p>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-6 md:gap-8 lg:grid-cols-2 lg:gap-9 xl:gap-10">
          <div className="flex h-full w-full">
            <div className="w-full rounded-2xl bg-white p-6 shadow-xl shadow-black/5 sm:p-8 lg:p-9">
              <h3 className="mb-6 text-xl font-bold text-black sm:text-2xl">
                Send us a message
              </h3>

              <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <Input
                  type="text"
                  label="Name"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="Your name"
                  classNames={{
                    label: "font-medium !text-black",
                    inputWrapper: "border-gray-200",
                  }}
                  isRequired
                />

                <Input
                  type="tel"
                  label="Phone"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="+91 98765 43210"
                  onKeyDown={(e: any) => {
                    if (
                      !/^[0-9]$/.test(e.key) &&
                      ![
                        "Backspace",
                        "Delete",
                        "ArrowLeft",
                        "ArrowRight",
                        "Tab",
                        "Home",
                        "End",
                      ].includes(e.key)
                    ) {
                      e.preventDefault();
                    }
                  }}
                  classNames={{
                    label: "font-medium !text-black",
                    inputWrapper: "border-gray-200",
                  }}
                  isRequired
                />

                <Input
                  type="email"
                  label="Email"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="your@email.com"
                  className="sm:col-span-2"
                  classNames={{
                    label: "font-medium !text-black",
                    inputWrapper: "border-gray-200",
                  }}
                  isRequired
                />

                <Input
                  type="text"
                  label="Subject"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="How can we help?"
                  className="sm:col-span-2"
                  classNames={{
                    label: "font-medium !text-black",
                    inputWrapper: "border-gray-200",
                  }}
                  isRequired
                />

                <Textarea
                  label="Message"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="Your message..."
                  minRows={4}
                  className="sm:col-span-2"
                  classNames={{
                    label: "font-medium !text-black",
                    inputWrapper: "border-gray-200",
                  }}
                  isRequired
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2C7F6F] to-[#3A9C8B] py-6 font-semibold text-white transition-all duration-300 hover:shadow-elevated sm:col-span-2"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="flex h-full w-full flex-col gap-6">
            <div className="w-full rounded-2xl bg-gradient-to-r from-[#2C7F6F] to-[#3A9C8B] p-6 text-white sm:p-8">
              <h3 className="mb-6 text-xl font-bold sm:text-2xl">
                Contact Information
              </h3>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 sm:h-12 sm:w-12">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="mb-1 font-semibold">Email</h4>

                    <p className="break-all text-sm text-white/80 sm:text-base">
                      info@daksh.co.in
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 sm:h-12 sm:w-12">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <div>
                    <h4 className="mb-1 font-semibold">Phone</h4>

                    <p className="text-sm text-white/80 sm:text-base">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 sm:h-12 sm:w-12">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <div>
                    <h4 className="mb-1 font-semibold">Address</h4>

                    <p className="text-sm text-white/80 sm:text-base">
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full rounded-2xl bg-white p-6 shadow-xl shadow-black/5 sm:p-8">
              <h3 className="mb-5 text-xl font-bold text-black">Follow Us</h3>

              <div className="flex items-center gap-3 sm:gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-200 text-gray-700 transition-all duration-300 hover:bg-teal-700 hover:text-white sm:h-12 sm:w-12"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="w-full rounded-2xl bg-gradient-to-r from-[#F6C04A] to-[#F2B233] p-6 sm:p-8">
              <h3 className="mb-2 text-xl font-bold text-black">
                Download the DAKSH App
              </h3>

              <p className="mb-5 text-sm text-black sm:text-base">
                Start your journey to self-discovery today
              </p>

              <Button
                size="lg"
                as={Link}
                href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Play Store
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
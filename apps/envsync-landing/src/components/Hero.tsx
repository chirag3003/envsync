import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, KeyRound, ShieldCheck, Terminal, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { getLatestBlog } from "@/helpers/get-latest-blog";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  Published: string;
  Slug: string;
  Date: number;
  Authors: string[];
  Page: string;
  preview: string[][][];
}

const Hero = () => {

  return (
    <section className="container mx-auto min-h-[100dvh] md:h-screen border-x border-border p-0">
      <div className="container mx-auto grid min-h-[calc(100dvh-5rem)] h-full grid-cols-1 gap-0 p-0 lg:grid-cols-2">
        <div className="relative flex flex-col justify-center overflow-hidden border border-border bg-[hsl(var(--surface-1))] px-10 py-32 pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-45"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--border) / 0.7) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.7) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="relative z-10">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="mb-5 text-4xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Shipping secure apps
            <br className="hidden sm:block" />
            <span className="text-primary">starts with controlled secrets.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.3 }}
            className="mb-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            EnvSync gives your team one source of truth for environment variables across development,
            staging, and production with audit-ready access control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.4 }}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <Link to="/onboarding" className="w-full sm:w-auto">
              <Button size="lg" className="w-full px-8 text-base">
                Get Started for Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="https://github.com/envsync-cloud" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full px-8 text-base">
                <Github className="h-4 w-4" />
                View on GitHub
              </Button>
            </Link>
          </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.5 }}
          className="grid auto-rows-[9.5rem] grid-cols-2 gap-0"
        >
          <div className="col-span-2 border border-border bg-[hsl(var(--surface-1))] p-5">
            <p className="mb-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">Deployment State</p>
            <p className="text-2xl font-semibold text-foreground">All environments in sync</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
              <div className="border border-border bg-[hsl(var(--surface-2))] p-2 text-center text-muted-foreground">dev</div>
              <div className="border border-primary/40 bg-[hsl(var(--surface-2))] p-2 text-center text-primary">staging</div>
              <div className="border border-border bg-[hsl(var(--surface-2))] p-2 text-center text-muted-foreground">prod</div>
            </div>
          </div>

          <div className="border border-border bg-[hsl(var(--surface-1))] p-4">
            <ShieldCheck className="mb-3 h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">Security</p>
            <p className="mt-1 text-lg font-semibold">End-to-end encrypted</p>
          </div>

          <div className="border border-border bg-[hsl(var(--surface-1))] p-4">
            <Workflow className="mb-3 h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">Workflow</p>
            <p className="mt-1 text-lg font-semibold">Versioned rollbacks</p>
          </div>

          <div className="border border-border bg-[hsl(var(--surface-1))] p-4">
            <KeyRound className="mb-3 h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">Secrets</p>
            <p className="mt-1 text-lg font-semibold">Centralized by app</p>
          </div>

          <div className="border border-border bg-[hsl(var(--surface-1))] p-4">
            <Terminal className="mb-3 h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">CLI</p>
            <p className="mt-1 font-mono text-sm text-foreground">envsync pull --env prod</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

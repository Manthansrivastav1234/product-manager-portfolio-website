import { ReactNode } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`section-container ${className}`}>
      {children}
    </section>
  );
}

type GlassCardProps = {
  className?: string;
  children: ReactNode;
};

export function GlassCard({ className = "", children }: GlassCardProps) {
  return <div className={`glass rounded-3xl ${className}`}>{children}</div>;
}

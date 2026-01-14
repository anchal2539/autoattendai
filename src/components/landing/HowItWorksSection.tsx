import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Calendar",
    description: "Link your Google Calendar to automatically sync all your scheduled meetings.",
    color: "from-primary to-primary/50",
  },
  {
    number: "02",
    title: "Set Preferences",
    description: "Configure which meetings to auto-attend, recording quality, and notification settings.",
    color: "from-accent to-accent/50",
  },
  {
    number: "03",
    title: "Bot Joins Meeting",
    description: "Our AI bot automatically joins meetings at the scheduled time and marks attendance.",
    color: "from-success to-success/50",
  },
  {
    number: "04",
    title: "Get Recording & Summary",
    description: "Access full recordings and AI-generated summaries from your dashboard anytime.",
    color: "from-warning to-warning/50",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How{" "}
            <span className="text-transparent bg-clip-text gradient-primary">
              AutoAttend
            </span>{" "}
            Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Get started in minutes. Our intelligent system handles the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              )}
              
              <div className="relative z-10 text-center lg:text-left">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg mb-4`}>
                  <span className="font-display font-bold text-xl text-primary-foreground">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-display font-semibold text-xl mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

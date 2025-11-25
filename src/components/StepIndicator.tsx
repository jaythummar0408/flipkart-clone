import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator = ({ currentStep }: StepIndicatorProps) => {
  const steps = [
    { number: 1, label: "Address" },
    { number: 2, label: "Order Summary" },
    { number: 3, label: "Payment" },
  ];

  return (
    <div className="bg-white border-b border-border py-4 px-4">
      <div className="flex items-center justify-center max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5 min-w-[80px]">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm border-2 ${
                  currentStep > step.number
                    ? "bg-primary text-primary-foreground border-primary"
                    : currentStep === step.number
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-white text-muted-foreground border-border"
                }`}
              >
                {currentStep > step.number ? <Check className="h-4 w-4" /> : step.number}
              </div>
              <span className={`text-xs font-medium text-center whitespace-nowrap ${currentStep >= step.number ? "text-foreground" : "text-muted-foreground"}`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-[2px] mx-3 ${currentStep > step.number ? "bg-primary" : "bg-border"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;

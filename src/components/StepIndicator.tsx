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
    <div className="bg-white border-b border-border py-4 px-2 sm:px-4 overflow-x-hidden">
      <div className="flex items-center justify-center max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            <div className="flex flex-col items-center gap-1.5 flex-1">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm border-2 ${
                  currentStep > step.number
                    ? "bg-primary text-primary-foreground border-primary"
                    : currentStep === step.number
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-white text-muted-foreground border-border"
                }`}
              >
                {currentStep > step.number ? <Check className="h-3 w-3 sm:h-4 sm:w-4" /> : step.number}
              </div>
              <span className={`text-[10px] sm:text-xs font-medium text-center ${currentStep >= step.number ? "text-foreground" : "text-muted-foreground"} max-w-[60px] sm:max-w-none leading-tight`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-8 sm:w-16 h-[2px] mx-1 sm:mx-3 flex-shrink-0 ${currentStep > step.number ? "bg-primary" : "bg-border"}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;

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
    <div className="bg-white border-b border-gray-200 py-5 px-4">
      <div className="max-w-xl mx-auto" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
        {/* Steps Container */}
        <div className="relative flex items-start justify-between">
          {/* Background Line - Between first and last step only */}
          <div
            className="absolute top-5 h-0.5 bg-gray-200"
            style={{
              left: 'calc(16.666%)',
              right: 'calc(16.666%)',
              zIndex: 0
            }}
          />

          {/* Progress Line - Grows with steps */}
          <div
            className="absolute top-5 h-0.5 bg-[#2874F0] transition-all duration-300"
            style={{
              left: 'calc(16.666%)',
              width: currentStep === 1 ? '0%' : currentStep === 2 ? 'calc(33.333%)' : 'calc(66.666%)',
              zIndex: 1
            }}
          />

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center relative" style={{ zIndex: 2, flex: 1 }}>
              {/* Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  currentStep > step.number
                    ? "bg-[#2874F0] text-white border-2 border-[#2874F0]"
                    : currentStep === step.number
                    ? "bg-[#2874F0] text-white border-2 border-[#2874F0]"
                    : "bg-white text-gray-400 border-2 border-gray-300"
                }`}
              >
                {currentStep > step.number ? (
                  <Check className="h-5 w-5 stroke-[3]" />
                ) : (
                  step.number
                )}
              </div>

              {/* Label */}
              <span
                className={`mt-2 text-xs font-medium text-center transition-colors duration-300 ${
                  currentStep >= step.number ? "text-gray-900" : "text-gray-400"
                }`}
                style={{ maxWidth: '80px' }}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;

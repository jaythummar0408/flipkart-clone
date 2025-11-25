import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StepIndicator from "@/components/StepIndicator";
import { toast } from "sonner";

const Address = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    pincode: "",
    city: "",
    state: "Andhra Pradesh",
    houseNo: "",
    roadName: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile || !formData.pincode || !formData.city || !formData.houseNo || !formData.roadName) {
      toast.error("Please fill all required fields");
      return;
    }
    toast.success("Address saved successfully");
    navigate("/order-summary");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-card border-b border-border sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center gap-3">
          <Link to="/">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-base font-semibold">Add delivery address</h1>
        </div>
      </div>

      <StepIndicator currentStep={1} />

      <div className="px-4 py-6 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Full Name (Required)*"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="h-12 text-sm border-gray-300 rounded-md"
          />

          <Input
            type="tel"
            placeholder="Mobile number (Required)*"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="h-12 text-sm border-gray-300 rounded-md"
          />

          <Input
            placeholder="Pincode (Required)*"
            value={formData.pincode}
            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
            className="h-12 text-sm border-gray-300 rounded-md"
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              placeholder="City (Required)*"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="h-12 text-sm border-gray-300 rounded-md"
            />

            <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
              <SelectTrigger className="h-12 text-sm border-gray-300 rounded-md">
                <SelectValue placeholder="State (Required)*" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                <SelectItem value="Karnataka">Karnataka</SelectItem>
                <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Input
            placeholder="House No., Building Name (Required)*"
            value={formData.houseNo}
            onChange={(e) => setFormData({ ...formData, houseNo: e.target.value })}
            className="h-12 text-sm border-gray-300 rounded-md"
          />

          <Input
            placeholder="Road name, Area, Colony (Required)*"
            value={formData.roadName}
            onChange={(e) => setFormData({ ...formData, roadName: e.target.value })}
            className="h-12 text-sm border-gray-300 rounded-md"
          />
        </form>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3 shadow-lg">
        <div className="max-w-2xl mx-auto">
          <Button 
            onClick={handleSubmit}
            className="w-full bg-[#ff6f29] hover:bg-[#ff6f29]/90 text-white font-semibold h-12 text-base"
          >
            Save Address
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Address;

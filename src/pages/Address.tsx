import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StepIndicator from "@/components/StepIndicator";

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
    navigate("/order-summary");
  };

  return (
    <div className="min-h-screen bg-background pb-20 overflow-x-hidden">
      <div className="bg-card border-b border-border sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center gap-3">
          <Link to="/">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-base font-semibold">Add delivery address</h1>
        </div>
      </div>

      <StepIndicator currentStep={1} />

      <div className="px-3 sm:px-4 py-6 max-w-2xl mx-auto w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="h-12 text-sm border-gray-300 rounded-md"
          />

          <Input
            type="tel"
            placeholder="Mobile number"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="h-12 text-sm border-gray-300 rounded-md"
          />

          <Input
            placeholder="Pincode"
            value={formData.pincode}
            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
            className="h-12 text-sm border-gray-300 rounded-md"
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              placeholder="City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="h-12 text-sm border-gray-300 rounded-md"
            />

            <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
              <SelectTrigger className="h-12 text-sm border-gray-300 rounded-md">
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                <SelectItem value="Arunachal Pradesh">Arunachal Pradesh</SelectItem>
                <SelectItem value="Assam">Assam</SelectItem>
                <SelectItem value="Bihar">Bihar</SelectItem>
                <SelectItem value="Chhattisgarh">Chhattisgarh</SelectItem>
                <SelectItem value="Goa">Goa</SelectItem>
                <SelectItem value="Gujarat">Gujarat</SelectItem>
                <SelectItem value="Haryana">Haryana</SelectItem>
                <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                <SelectItem value="Karnataka">Karnataka</SelectItem>
                <SelectItem value="Kerala">Kerala</SelectItem>
                <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                <SelectItem value="Manipur">Manipur</SelectItem>
                <SelectItem value="Meghalaya">Meghalaya</SelectItem>
                <SelectItem value="Mizoram">Mizoram</SelectItem>
                <SelectItem value="Nagaland">Nagaland</SelectItem>
                <SelectItem value="Odisha">Odisha</SelectItem>
                <SelectItem value="Punjab">Punjab</SelectItem>
                <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                <SelectItem value="Sikkim">Sikkim</SelectItem>
                <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                <SelectItem value="Telangana">Telangana</SelectItem>
                <SelectItem value="Tripura">Tripura</SelectItem>
                <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                <SelectItem value="West Bengal">West Bengal</SelectItem>
                <SelectItem value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</SelectItem>
                <SelectItem value="Chandigarh">Chandigarh</SelectItem>
                <SelectItem value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Jammu and Kashmir">Jammu and Kashmir</SelectItem>
                <SelectItem value="Ladakh">Ladakh</SelectItem>
                <SelectItem value="Lakshadweep">Lakshadweep</SelectItem>
                <SelectItem value="Puducherry">Puducherry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Input
            placeholder="House No., Building Name"
            value={formData.houseNo}
            onChange={(e) => setFormData({ ...formData, houseNo: e.target.value })}
            className="h-12 text-sm border-gray-300 rounded-md"
          />

          <Input
            placeholder="Road name, Area, Colony"
            value={formData.roadName}
            onChange={(e) => setFormData({ ...formData, roadName: e.target.value })}
            className="h-12 text-sm border-gray-300 rounded-md"
          />
        </form>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3 shadow-lg w-full">
        <div className="max-w-2xl mx-auto px-1">
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

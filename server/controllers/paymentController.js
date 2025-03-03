import Razorpay from "razorpay";

// Initialize Razorpay with keys from .env
const razorpay = new Razorpay({
    key_id: "rzp_test_OJFLZD53AQRZ7o",
    key_secret: "9T2SNXcU3xdUdmJFV5HDlQzD",
});

// Create Razorpay Order
export const createRazorpayOrder = async (req, res) => {
    try {
        const { amount, currency } = req.body;

        if (!amount || !currency) {
            return res.status(400).json({ success: false, message: "Amount and currency are required" });
        }

        const options = {
            amount: amount * 100, // Convert to paise
            currency,
            receipt: `order_rcptid_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        return res.status(201).json({ success: true, order });

    } catch (error) {
        console.error("Error creating Razorpay order:", error.message);
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

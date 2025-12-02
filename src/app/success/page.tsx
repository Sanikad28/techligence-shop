export default function SuccessPage() {
  return (
    <div className="pt-32 text-center">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful 🎉</h1>
      <p className="mt-2 text-gray-700">Your order has been placed.</p>

      <a
        href="/store"
        className="mt-6 inline-block bg-black text-white py-2 px-6 rounded-md hover:bg-gray-900"
      >
        Continue Shopping
      </a>
    </div>
  );
}

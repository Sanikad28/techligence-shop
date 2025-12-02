export default function CancelPage() {
  return (
    <div className="pt-32 text-center">
      <h1 className="text-3xl font-bold text-red-600">Payment Cancelled ❌</h1>
      <p className="mt-2 text-gray-700">Your payment was not completed.</p>

      <a
        href="/"
        className="mt-6 inline-block bg-black text-white py-2 px-6 rounded-md hover:bg-gray-900"
      >
        Try Again
      </a>
    </div>
  );
}

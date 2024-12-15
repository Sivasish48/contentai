import { NeonGradientCard } from "../_components/neon-gradient-card";

function page(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      {/* SaaS-style Pricing Heading */}
      <h1 className="text-3xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10">
        Pricing
      </h1>

      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-6 lg:space-y-0">
        {/* First Neon Gradient Card */}
        <NeonGradientCard className="max-w-sm w-full lg:w-80 p-1 rounded-xl bg-gradient-to-br from-purple-400 via-purple-600 to-pink-600">
          <div className="bg-black rounded-lg p-6">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-3xl sm:text-4xl text-white font-extrabold">Free</h2>
            </div>
            <div className="space-y-1 mb-8">
              <p className="text-3xl sm:text-4xl text-white font-bold mb-4">$0/yr</p>
              <p className="text-white text-lg">Lifetime access</p>
            </div>
            <div className="text-left space-y-3 mb-6 border-b-2 border-gray-600 pb-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-3 text-green-400 text-lg">✔</span>
                  <span className="text-white font-semibold">Access to all AI models</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-red-400 text-lg">✖</span>
                  <span className="text-white font-semibold line-through">Unlimited Credits</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-red-400 text-lg">✖</span>
                  <span className="text-white font-semibold line-through">Editable prompts</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-red-400 text-lg">✖</span>
                  <span className="text-white font-semibold line-through">High quality outputs</span>
                </li>
              </ul>
            </div>
          </div>
        </NeonGradientCard>

        {/* Second Neon Gradient Card */}
        <NeonGradientCard className="max-w-sm w-full lg:w-80 p-1 rounded-xl bg-gradient-to-br from-purple-400 via-purple-600 to-pink-600">
          <div className="bg-black rounded-lg p-6">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-3xl sm:text-4xl text-white font-extrabold">Premium</h2>
            </div>
            <div className="space-y-1 mb-8">
              <p className="text-3xl sm:text-4xl text-white font-bold mb-4">$19.99/yr</p>
              <p className="text-white text-lg">Lifetime access</p>
            </div>
            <div className="text-left space-y-3 mb-6 border-b-2 border-gray-600 pb-4">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-3 text-green-400 text-lg">✔</span>
                  <span className="text-white font-semibold">Access to all AI models</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-green-400 text-lg">✔</span>
                  <span className="text-white font-semibold">Unlimited Credits</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-green-400 text-lg">✔</span>
                  <span className="text-white font-semibold">Editable prompts</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-green-400 text-lg">✔</span>
                  <span className="text-white font-semibold">High quality outputs</span>
                </li>
              </ul>
            </div>
          </div>
        </NeonGradientCard>
      </div>
    </div>
  );
}

export default page;

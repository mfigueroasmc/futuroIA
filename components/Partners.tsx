
import React from 'react';

const PartnerLogo: React.FC<{ name: string, src: string }> = ({ name, src }) => (
    <img
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
        src={src}
        alt={name}
        width="158"
        height="48"
    />
);

const Partners: React.FC = () => {
  return (
    <div className="bg-[#0D0D0D] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-white">
          Tecnologías y plataformas con las que trabajamos
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <PartnerLogo name="Google Cloud" src="https://tailwindui.com/img/logos/158x48/google-white.svg" />
          <PartnerLogo name="OpenAI" src="https://tailwindui.com/img/logos/158x48/openai-white.svg" />
          <PartnerLogo name="Microsoft Azure" src="https://tailwindui.com/img/logos/158x48/microsoft-white.svg" />
          <PartnerLogo name="NVIDIA" src="https://tailwindui.com/img/logos/158x48/nvidia-white.svg" />
          <PartnerLogo name="AWS" src="https://tailwindui.com/img/logos/158x48/aws-white.svg" />
        </div>
      </div>
    </div>
  );
};

export default Partners;

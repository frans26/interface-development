import { Fragment, memo, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { IMAGES } from "../../constants/image-list";
import { ImageName } from "../../models/image.model";

interface ImageProps {
  name: ImageName;
  className?: string;
  clickable?: boolean;
}

const Image = ({ name, className, clickable = false }: ImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    if (!clickable) return;
    setIsOpen(true);
  };

  return (
    <>
      <img
        src={IMAGES[name]}
        alt={name}
        className={className + ` ${clickable && "cursor-pointer"}`}
        onClick={openModal}
      />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="bg-white">
                    <img src={IMAGES[name]} alt={name} className="w-full" />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const MemoImage = memo(Image);
export default MemoImage;

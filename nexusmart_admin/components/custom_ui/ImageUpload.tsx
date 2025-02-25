

import { CldUploadWidget } from "next-cloudinary";
import { Plus, Trash  } from "lucide-react";

import { Button } from "../ui/button";
import Image from "next/image";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  value,
  onChange,
  onRemove,
}) => {
  const handleSuccess = (result: any) => {
    console.log("Upload successful:", result);
    onChange(result.info.secure_url);
  };

  const handleFailure = (error: any) => {
    console.log("Upload failed:", error);
  };

  return (
    <div>
        <div className="mb-4 flex flex-wrap items-center gap-4">
            {value.map((url, i)=> (
                <div key={i} className="relative w-[200px] h-[200px]">
                    <div className="absolute top-0 right-0 z-10">
                        <Button onClick={() => onRemove(url)} size={"sm"} className="bg-red-500 text-white">
                            <Trash  className="h-4 w-4"/>
                        </Button>
                    </div>
                    <Image  src={url} alt="collection" className="object-cover rounded-lg" fill />
                </div>
            ))}
        </div>
      <CldUploadWidget
        uploadPreset="vixr3ilg"
        options={{folder: "nexusmart"}}
        onSuccess={handleSuccess}
        onError={handleFailure}
      >
        {({ open }) => {
          return (
            <Button
              className="bg-slate-500 text-white ml-6"
              onClick={() => open()}
            >
              <Plus className="h-4 w-4 mr-2" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;

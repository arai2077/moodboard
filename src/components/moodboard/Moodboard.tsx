import { useState } from "react";
import { ImgUrlDialog } from "./ImgUrlDialog";

import emptyImg from "@/assets/empty_image.svg";

import { EMPTY_MOODBOARD } from "@/common/constants";

type MoodboardState = {
  [key: number]: string | undefined;
};

const Moodboard = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState<number>(0);
  const [imageUrls, setImageUrls] = useState<MoodboardState>(EMPTY_MOODBOARD);

  const getImgUrl = (index: number): string => {
    return imageUrls[index] ?? emptyImg;
  };

  const handleOpenDialog = (index: number) => {
    console.log("Opening dialog for index:", index);
    setSelectedImgIndex(index);
    setDialogOpen(true);
  };

  const handleSaveImgUrl = (url: string) => {
    setImageUrls((urls) => ({
      ...urls,
      [selectedImgIndex]: url,
    }));
    setDialogOpen(false);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {Object.values(imageUrls).map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-center cursor-pointer max-w-xl"
          onClick={() => handleOpenDialog(index)}
        >
          <img
            src={getImgUrl(index)}
            alt={`Moodboard ${index + 1}`}
            className="w-full h-full object-cover max-w-xl"
          />
        </div>
      ))}

      <ImgUrlDialog
        open={dialogOpen}
        saveImgUrl={handleSaveImgUrl}
        cancel={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default Moodboard;

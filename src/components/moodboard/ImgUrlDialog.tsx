import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type ImgUrlDialogProps = {
  open: boolean;
  saveImgUrl: (url: string) => void;
  cancel: () => void;
};

export const ImgUrlDialog = ({
  open,
  saveImgUrl,
  cancel,
}: ImgUrlDialogProps) => {
  const [imgUrl, setImgUrl] = useState("");

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Image URL</DialogTitle>
          <DialogDescription>
            Paste the image URL into the input field below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Input
              name="name"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="cursor-pointer" variant="outline" onClick={cancel}>
            Cancel
          </Button>
          <Button className="cursor-pointer" onClick={() => saveImgUrl(imgUrl)}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

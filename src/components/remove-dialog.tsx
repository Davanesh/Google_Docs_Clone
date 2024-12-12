"use client"

import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Id } from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";
import { toast } from "sonner";


interface RemoveDialogProps {
  documentId: Id<"documents">;
  children: React.ReactNode;
}

export const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
  const remove = useMutation(api.documents.removeById);
  const [isRemoving, setIsRemoving] = useState(false);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent onClick={(e) => e.stopPropagation()}>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone, This will permanently delete your document.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isRemoving}
            onClick={(e) => {
              e.stopPropagation();
              setIsRemoving(true)
              remove({ id: documentId })
              .catch(() => toast.error("Something went wrong"))
              .then(() => toast.success("Document removed"))
              .finally(() => setIsRemoving(false))
            }}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
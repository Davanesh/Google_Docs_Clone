import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, MoreVertical, TrashIcon } from "lucide-react"
import { Id } from "../../../convex/_generated/dataModel"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { RemoveDialog } from "@/components/remove-dialog";

interface DocumentMenuProps {
  documentId: Id<"documents">;
  title: string;
  onNewTab: (id: Id<"documents">) => void
}

export const DocumentMenu = ({ documentId, title, onNewTab }: DocumentMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreVertical className="size-4"/>
        </Button> 
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <RemoveDialog documentId={documentId}>
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            onClick={(e) => e.stopPropagation()}
          >
            <TrashIcon className="size-4 mr-2"/>
            Remove
          </DropdownMenuItem>
        </RemoveDialog>
        <DropdownMenuItem
          onClick={() => onNewTab(documentId)}
        >
          <ExternalLinkIcon className="size-4 mr-2"/>
          Open in a tab
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

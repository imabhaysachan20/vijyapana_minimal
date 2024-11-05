import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {CiPhone} from "react-icons/ci"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 
function TalkToUsBTN({className}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className={`font-thin tracking-wider shadow-black shadow-sm ${className}`}><CiPhone/>Talk To US</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect With Us</DialogTitle>
          <DialogDescription>
            Collabrate with our team to start a dream project of yours just fill out form we will reach out to you!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Mobile
            </Label>
            <Input id="mobile" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input type="email" id="mobile" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Connect</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TalkToUsBTN

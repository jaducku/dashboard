"use client"
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function save () {
  try{

  }catch(error){

  }finally{
    toast("Event has been created.");
  }
}

export default function DashboardPage() {
    return (
      <div>
        <Button onClick={()=> save()}>save</Button>
      </div>
    )
  }
  
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppShortcut() {
  return <Button asChild aria-label="Chat with Noveltiq on WhatsApp" className="fixed bottom-5 right-5 z-40 h-12 rounded-full px-4 shadow-lg">
    <a href="https://wa.me/2349066420706" target="_blank" rel="noreferrer">
      <MessageCircle className="size-4" /><span className="hidden sm:inline">Chat on WhatsApp</span><span className="sm:hidden">WhatsApp</span>
    </a>
  </Button>;
}
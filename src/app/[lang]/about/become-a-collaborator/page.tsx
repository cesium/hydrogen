"use client"

import CallSubscribe from "@/components/call-subscribe";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function BecomeACollaborator() {
  const dict = useDictionary();
  
  return <main>Become a Collaborator
    <div>
            <CallSubscribe
              title={dict.callsub.title} 
              description={dict.callsub.desc} 
              buttonText={dict.callsub.button} 
              buttonColor={"blue"} 
              footerText={dict.callsub.footer}
              />
    </div>
  </main>;
}

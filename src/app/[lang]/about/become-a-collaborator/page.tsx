"use client";

import CallSubscribe from "@/components/call-subscribe";
import { useDictionary } from "@/contexts/dictionary-provider";

export default function BecomeACollaborator() {
  const dict = useDictionary();

  return (
    <main>
      <div className="selection:bg-blue selection:text-white">
        Become a Collaborator
        <div>
          <CallSubscribe
            title={dict.callsub.collaborators.title}
            description={dict.callsub.collaborators.desc}
            buttonText={dict.callsub.button}
            buttonURL="https://cesium.link/f/recrutamento"
            buttonColor={"blue"}
            footerText={dict.callsub.footer}
          />
        </div>
      </div>
      
    </main>
  );
}

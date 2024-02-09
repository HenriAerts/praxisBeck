import LeistungEins from "@/components/services/LeistungEins";
import LeistungZwei from "@/components/services/LeistungZwei";
import LeistungDrei from "@/components/services/LeistungDrei";
import CallToAction from "@/components/services/CallToAction";

export default function services() {
    return (
      <>
        <LeistungEins/>
        <LeistungZwei/>
        <LeistungDrei/>
        <CallToAction/>
      </>
    );
  }
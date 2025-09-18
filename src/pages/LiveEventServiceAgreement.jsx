import { Box, Typography, Grid, Checkbox, Tabs, Tab, Stack, TextField } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DownloadButton from '../components/DownloadButton';
import QRSection from '../components/QrSection';

const text1 = `1. This Service Agreement and Statement of Work (the "SOW") attached hereto as Exhibit A (collectively, the "Agreement") set forth the terms and conditions concerning the event production services that ShowPhaze LLC (the "Company") are to provide to CLIENT NAME (the "Client"), collectively the "Parties" and individually a "Party". This Agreement comes into effect at the time of both Parties' mutual execution and will continue until services are complete, or until otherwise terminated by either party in writing with thirty (30) days advanced notice. If Company has commenced work on any event set forth SOW at the time Client elects to early terminate this Agreement, the Cancellation or Postponement policy set forth below shall apply. SERVICES. Company provides event production services, including, without limitation, audio engineer, lighting technician, camera and video operation, and event management services. The specific services (the "Services"), the specific event that Client is engaging Company for (the "Event"), the Event location, and the specific date(s) on which Services are to be rendered (the "Service Date(s)"), are stated in the SOW.`;
const text2 = `Company understands that, at times, changes may need to be made to the scope of Services initially agreed on. If Client decides that they would like to change or extend the Services stated in the SOW, Client must provide Company with written notice outlining the proposed changes. Sometimes Company may have to decline proposed changes, and Company reserves the right to do so. Any acceptance of proposed changes may be subject to fee increases and additional upfront payment of fees.`;
const text3 = `Company charges a regular hourly rate (the "Regular Hourly Rate") for Services rendered by each Company personnel assigned to the Event, as stated in the SOW. The SOW estimates how many hours of Services will be needed on the Service Date(s), but Client will be billed for all hours actually incurred. All Regular Hourly Rates are subject to overtime/weekend/holiday rates and other rate penalties as stated below (collectively, the "Service Fees"). The Service Fees are due in accordance with the payment schedule stated in the SOW (the "Payment Schedule"). In the absence of a Payment Schedule, Service Fees must be paid within thirty (30) calendar days from the sent date on the invoice sent by Company. Some Services may be subject to sales tax, and sales tax will be billed in addition to the Service Fee in accordance with the law. Service Fees, once paid, are non-refundable.`;
const text5 = `In addition to the Service Fees, Client is responsible for all pre-approved expenses incurred by Company in connection with the Services, including any rental fees for equipment that is needed to carry out the Services and travel costs such as accommodation, airfares, mileage, car rental, and meals (the “Expenses”).`;
const text6 = `All payments may be made via credit card or direct bank transfer (ACH or wire) through Company’s preferred online payment processing system, by check, or as otherwise mutually agreed. Company reserves the right to pass on any transaction, currency exchange rate, fraud protection, bounced payment, and any other fees associated with the remittance of payments to Company as an Expense to Client; such fees are hereby deemed pre approved by Client.`;
const text7 = `Company may suspend all performance of Services and refuse to perform Services on the Service Date(s), without liability, if payments are overdue. Additionally, if a payment is overdue, Company reserves the right to charge a prorated late fee equal to eight percent (8%) per month the amount is overdue or the maximum amount allowed under state or federal law if such late fee is deemed to exceed such maximum amount. If a payment is overdue by more than thirty (30) calendar days, Company reserves the right to terminate all Services immediately as a breach of this Agreement by Client per the Termination section of this Agreement and/or refer any further collection of the outstanding unpaid amount, plus any late fees, and termination fees to an attorney or collections agency. Client will be liable for all reasonable attorney fees, court costs, or collection agency fees incurred due to overdue payments.`;
const text8 = `If Client has concerns about an invoice or intends to dispute a fee contained in an invoice, Client must do so before payment is made and within thirty (15) calendar days of receipt of the invoice sent by Company. Any charges not disputed within thirty (15) calendar days or paid by Client will be deemed accepted by Client. Both Parties agree to work in good faith to timely resolve any disputed fees.`;
const text9 = `Each Company personnel assigned to the Event must be provided a 15-minute break between every two and a half (2.5) hours and three (3) hours of work. Each Company personnel must receive a one (1) hour meal period per day after they have worked no less than three (3) or more than five (5) consecutive hours. Any additional meal breaks provided past the (1) one hour required break period will be on the clock. No off the clock meal break is permitted between 6:00 pm and 8:00 am. If a break is not possible, a hot meal should be provided to each Company personnel with 30 minutes of break time on the clock. Personnel must have access to a restroom and water during their breaks.`;
const text10 = `If a Company personnel is requested to continue Services without an eight (8) hour break in between shifts, Client will be charged for “Quick Turnaround”. The rate charged will be determined by what billing rate the personnel was at when their original shift ended. For example, if the personnel is at the ten (10) hour mark and ready to go into overtime, then when the personnel returns to the following shift, they will start at the overtime rate of one and a half (1.5x). If a personnel is at the twelve (12) hour mark and ready to go into double-time, then when the personnel returns to the following shift, they will start at the overtime rate of two times (2x), and so on.`;
const text11 = `At least five (5) calendar days before the first Service Date, Client must provide an event production schedule setting forth at a minimum the load-in time, load-out time, Event start time, Event end time, key milestones that are to occur during the Event (e.g., meals, speeches, band, etc.), and creative elements that relate to the Services (the “Event Production Schedule”). Client must communicate any changes that affect the Event Production Schedule as soon as they become aware of them. Company will not be responsible for any delay or missed Services if such changes are not communicated effectively and with reasonable notice.`;
const text12 = `While rendering the Services, Company may sometimes request approvals, revisions, assets, or information to be provided to Company. Unless otherwise mutually agreed, Client must provide Company with all approvals, revisions, assets, and information in writing within fourteen (14) calendar days, and no later than seven (7) calendar days before the first Service Date. At times Company may need a quicker turnaround, and Client must comply with such requests as communicated.`;
const text13 = `Client understands that the Event Location may have restrictions that must be adhered to, and it is Client’s responsibility to ensure that any permits are secured to allow Company to carry out Services under this Agreement at the Event Location. Company will not under any circumstances be liable if Client does not adhere to such requirements or permits or if Company inadvertently does not adhere to such requirements due to them not being effectively communicated or communicated with reasonable notice. If the Event Location enforces noise restrictions, Company will comply with such restrictions regardless of Client’s request to do otherwise. Company strongly encourages Client to get event insurance for the Event. Company is responsible for all insurance for Company personnel.`;
const text14 = `Access to the Event Location must be clearly communicated to Company at least seven (7) calendar days before the Event. There must be safe, clear, and sufficient space and parking available for Company to easily load in and load out of the Event Location. Company reserves the right to hold personnel from the performance of Services until safe access is identified.`;
const text15 = `If personnel for the Event exceeds fifteen (15), a steward is required to be on-site and will be added to the Service Fee. If personnel for the Event exceeds forty (40), a steward and an additional steward or crew lead is required to be on-site and will be added to the Service Fee. We reserve the right to adjust the number of stewards based upon the general scope of work. Some steward work may also be done off-site to prepare for upcoming days.`;
const text16 = `If the Event is outside, Client must have an indoor plan for adverse weather, which is defined as rain, extreme wind, heat over 95°F, or any other conditions that make rendering Services dangerous, likely to damage equipment, or overtly difficult (an "Adverse Weather Event") that does not amount to a Force Majeure Event (as defined below). Client understands that in the event of an Adverse Weather Event, Company will not be able to perform Services outside, and if Client does not have an adverse weather plan enabling Services to be rendered indoors, Company will not be able to render Services, and Client will not be entitled to a refund.`;
const text17 = `Company's Services are creative in nature and creative-based work is inherently subjective. Client acknowledges that although Company aims to meet Client's vision, goal, and purpose in the Services provided, Company requires and retains some degree of discretion regarding how Services are provided. Client agrees that they are familiar with Company's portfolio and are requesting Services with knowledge of the nature of Company's work, but with the understanding that Company's work is continually evolving and that they focus on meeting Client's particular event needs based on their experience and preferences communicated to them. Mere dissatisfaction in the creative elements of the Services that otherwise materially conform with the Event Production Schedule will not be deemed a breach of this Agreement by Company.`;
const text18 = `Company reserves the right to terminate all Services without return of payment if, at Company's discretion, they determine that they have suffered harassment, abuse, bullying, inappropriate behavior, or discrimination from Client or any other individual under Client's control or are faced with an Event Location that is unsafe or unsanitary. In minor instances, Company will first notify Client and allow Client to rectify the conduct or fix the Event Location before termination of Services.`;
const text19 = `Company may require meetings regarding the Services and need Client to be available for such meetings. Company will give Client advanced notice of when meetings are anticipated to occur and strive to come to a date, time, and type (in-person, video conference, or phone) agreeable between both Parties. Client permits Company to record and transcript any meetings conducted. Client must give at least twenty-four (24) hours' notice if they need to reschedule a meeting. Company may need to visit the Event Location before rendering Services and Client agrees to coordinate with Company to mutually schedule such visits.`;
const text20 = `Company's business hours are Monday through Friday, 9 am - 5 pm Central Time. All Service-related messages must be sent via email, and all meetings must be scheduled in advance to ensure availability. Client must allow at least forty-eight (48) business hours for Company's response. There may be periods when Company may be delayed in responding, and Company will notify Client of any such scheduled delays if they are to affect the Services. If Client needs to contact Company and the Event is less than forty-eight (48) hours away, Client should contact Company via phone.`;
const text21 = `To ensure that Services can be carried out in a timely and satisfactory manner, Company requires cooperation from Client and Client representatives present on the Service Date(s). If any other third parties are to render the same or similar services to Company on the Service Date(s), Client must disclose these individuals/entities to Company at least seven (7) calendar days before the first Service Date and provide Company with their names and contact information so that Company can ensure that Services do not overlap. If Client has an event coordinator for the Event, Client must also disclose their name and contact information to Company at least seven (7) calendar days before the first Service Date. Company will only be required to answer to the signatory of this Agreement or a third party expressly delegated by the signatory of this Agreement, such as the point of contact stated in the SOW.`;
const text24 = `Company has full discretion over which personnel to assign to the Event unless otherwise mutually agreed between the Parties. If any specific personnel assigned to the Event becomes unable or unwilling to perform obligations under this Agreement on the Service Date(s) due to no fault of Client, Company will replace the personnel with another Company personnel at their discretion.`;
const text25 = `Each Party agrees to indemnify and hold the other and any of their directors, owners, affiliates, assignees, parent companies, subsidiaries, officers, employees, and agents harmless from any claims, losses, liability, damages, expenses, and costs (including reasonable attorney fees and court costs) arising out of or resulting from (i) performance or non-performance of obligations under this Agreement, (ii) negligent or willful acts or omissions (or such acts or omissions of such party's directors, owners, officers, employees, and agents), or (iii) non-compliance with the law.`;
const text26 = `TO THE FULLEST EXTENT PERMITTED BY THE LAW OF THE JURISDICTION, COMPANY WILL NOT BE LIABLE FOR ANY CLAIMS FOR EMOTIONAL DISTRESS, MENTAL ANGUISH, PUNITIVE DAMAGES, CONSEQUENTIAL DAMAGES, LOSS OF PROFITS, DATA, OR PERSONAL INFORMATION, LOSS OF ENJOYMENT, OR LOSS OF OPPORTUNITY. TO THE FULLEST EXTENT PERMITTED BY LAW, COMPANY’S TOTAL LIABILITY FOR ANY CLAIMS, BREACHES, OR DAMAGES UNDER THIS AGREEMENT, OTHER THAN THOSE CAUSED BY COMPANY’S GROSS NEGLIGENCE OR INTENTIONAL MISCONDUCT, WILL BE LIMITED TO THE AMOUNT OF THE FEES PAID OR PAYABLE BY CLIENT, UNLESS OTHERWISE STATED IN THIS AGREEMENT. CLIENT AGREES THESE LIMITATIONS REFLECT A FAIR ALLOCATION OF RISK AND THAT COMPANY WOULD NOT ENTER INTO THIS AGREEMENT WITHOUT THESE LIMITATIONS OF COMPANY’S LIABILITY.`;
const text28 = `Client must not separately solicit or hire Company’s agents, employees, or contractors to render similar Services during the term of this Agreement and for a period of eighteen months (18) months after the expiration or termination of this Agreement without Company’s express written permission. Client must not take any action, both during or after the term of this Agreement, which is intended or would reasonably be expected to harm Company’s reputation, or which would reasonably be expected to lead to unwanted or unfavorable publicity to Company. If Client has any concerns or complaints regarding Company’s Services, Company encourages Client to contact Company directly to discuss such matters.`;
const text29 = `If a dispute arising out of or relating to this Agreement cannot be amicably resolved, the Parties agree to attempt to settle the dispute with the help of a mutually agreed-upon Travis County, Texas, mediator. Each Party will equally share in all mediation costs except for attorney fees which will be borne individually by the Party hiring the attorney. The Parties must mediate in good faith until a settlement is reached or the mediator declares an impasse has been reached. If a settlement is not achieved through mediation, the dispute must be settled by binding single arbitration administered by the American Arbitration Association (AAA) per its Commercial Arbitration Rules (“AAA Rules”). Arbitration will be held in Austin, Texas.  The parties further agree that any arbitration shall be conducted in their individual capacities only and not as a class action or other representative action, and the parties expressly waive their right to file a class action or seek relief on a class basis. The AAA Rules for selecting an arbitrator must be followed, except that the arbitrator must be licensed to practice law in Texas or a retired Texas judge. The parties agree that the arbitrator shall apply federal and Texas law.  Any judgment upon an award rendered by an arbitrator may be entered in any state or federal court having jurisdiction on the subject matter. The Parties agree that, if available, AAA will administer the arbitration via virtual videoconferencing. THE PARTIES UNDERSTAND AND AGREE THAT ANY SUCH ARBITRATION WILL BE FINAL AND BINDING AND THAT THEY ARE WAIVING THEIR RIGHTS TO OTHER RESOLUTION PROCESSES, INCLUDING, WITHOUT LIMITATION, A TRIAL BY JURY. The prevailing Party in a dispute will have the right to collect from the other Party its reasonable costs, necessary disbursements, and reasonable attorneys’ fees incurred in enforcing this Agreement.`;
const text30 = `Our policy mandates a 50% deposit upon receipt of the final estimate to secure resources and confirm commitment for our services. This deposit is applied towards the total cost of the project.`;

const Container = ({
  showHeading = false,
  heading,
  textContent
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#000000',
        color: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(to top right, #c47ab2, #00BFFF)',
          borderRadius: '1.25rem',
          padding: '0.125rem', // Creates the 2px border effect
        }}
      >
        <Box
          sx={{
            borderRadius: '1.25rem',
            overflow: 'hidden',
            backgroundColor: '#000000',
            padding: "1rem"
          }}
        >
          {showHeading ? <Box
            sx={{
              background: 'linear-gradient(90deg, #8A2BE2 0%, #00BFFF 100%)',
              padding: '0.5rem 0 0.5rem 1rem',
              textAlign: 'center',
              width: "100%",
              marginBottom: "1rem"
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#FFFFFF',
                textAlign: "left"
              }}
            >
              {heading}
            </Typography>
          </Box> : null}
          <Typography sx={{
            lineHeight: "1.75rem",
            fontSize: "1.15rem"
          }}>
            {textContent}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};


const ContainerOvertime = () => {
  const heading = "4. OVERTIME & INCREASED RATES";
  const textContent = (
    <>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Services provided by each Company personnel outside of California will be billed to Client according to the following:
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Overtime
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Regular Hourly Rate applies for hours worked between 6:00 am and 12:00 am. A rate of one and half (1.5x) of the Regular Hourly Rate will be charged for all additional hours worked between 10 and 12 hours and for all hours worked between 12:00 am and 6:00 am. A rate of double-time (2x) of the Regular Hourly Rate will apply for all hours worked past twelve (12) hours. If a personnel is already in overtime because they have worked more than ten (10) hours and they are also working between 12:00 am and 6:00 am then the rate will be increased to the double time rate (2x). If overtime is being charged for a federal holiday (see below), and the personnel works past ten (10) hours, then the overtime rate will be increased to double time (2x). If more than two overtime or meal penalties (as defined below) have been incurred, then any additional penalties will be increased in .5 increments (by way of example, double time (2x) goes to 2.5x, then to triple time (3x), and so on).
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Holidays
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        On Federal holidays a rate of one and a half (1.5x) of the Regular Hourly Rate will be charged for the first ten (10) hours, and after ten (10) hours, a rate of double-time (2x) of the Regular Hourly Rate will apply. Federal holidays include New Year's Day, Martin Luther King's Birthday, President's Day, Memorial Day, July Fourth, Labor Day, Veteran's Day, Thanksgiving Day, Christmas Day, and New Year's Eve (after 6:00 pm).
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Minimum Hours for Certain Positions
      </Typography>
      <Typography variant="body2">
        All five (5) hour calls for lead and show positions will be billed for a full ten (10) hour call. For set and strike positions, all five (5) hour calls will be at the Regular Hourly Rate (as defined below) with a fee of Five U.S. dollars ($5) per position.
      </Typography>
    </>
  );

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#000000',
        color: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(to top right, #c47ab2, #00BFFF)',
          borderRadius: '1.25rem',
          padding: '0.125rem',
        }}
      >
        <Box
          sx={{
            borderRadius: '1.25rem',
            overflow: 'hidden',
            backgroundColor: '#000000',
            padding: "1rem"
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(90deg, #8A2BE2 0%, #00BFFF 100%)',
              padding: '0.5rem 0 0.5rem 1rem',
              textAlign: 'center',
              width: "100%",
              marginBottom: "1rem"
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#FFFFFF',
                textAlign: "left"
              }}
            >
              {heading}
            </Typography>
          </Box>
          <Typography component="div">
            {textContent}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const ContainerCancellation = () => {
  const heading = "23. CANCELLATION OR POSTPONEMENT";
  const textContent = (
    <>
      <Typography variant="body1" sx={{ mb: 2 }}>
        The fees stated in this section represent a reasonable estimate of the loss suffered by Company in the event of cancellation or postponement of the Event due to the decreasing likelihood of rebooking alternative services on that date upon late notice and are not intended to be a penalty. A "Force Majeure Event" is an event or series of related events that are outside the reasonable control of the Party affected, including but not limited to power failures, government shutdowns, disasters, fires, floods, riots, trade strikes, epidemics, pandemics, terrorist attacks, and wars that render the Services unable to be performed, but specifically exclude Adverse Weather Events.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        (a) Cancellation or Breach by Client. If Client breaches this Agreement the Services must be canceled due to a Force Majeure Event, or Client decides, due to no fault of Company, to cancel the Services for any reason, the following will apply:
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Client will be required to provide written notice to Company as soon as Client becomes aware of the cancellation or Client anticipates a cancellation;
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Client will be required to pay for any overdue Service Fees or Expenses up to the date of termination;
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Company will be entitled to retain any Service Fees paid, which as stated, are non refundable upon payment, regardless of when Company received notification of cancellation; and
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        If Company receives a notice of cancellation less than fourteen (14) calendar days before the first Service Date, Client will be required to pay the following non refundable cancellation fees:
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        For Lead positions if notice is given less than fourteen (14) days before the first Service Date, Client will pay Company fifty percent (50%) of the total remaining estimated Service Fee;
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        For Lead positions if notice is given between less than seventy-two (72) hours before the first Service Date, Client will pay Company one hundred percent (100%) of the total remaining estimated Service Fee;
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        and For Assist positions if notice is given less than forty-eight (48) hours before the first Service Date, Client will pay Company fifty percent (50%) of the total remaining estimated Service Fee;
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        and For Assist positions if notice is given less than twenty-four (24) hours before the first Service Date, Client will pay Company one hundred percent (100%) of the total remaining estimated Service Fee;
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        and if Client is in breach of this Agreement Company will be entitled to any additional remedies available under the law.
      </Typography>
    </>
  );

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#000000',
        color: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(to top right, #c47ab2, #00BFFF)',
          borderRadius: '1.25rem',
          padding: '0.125rem',
        }}
      >
        <Box
          sx={{
            borderRadius: '1.25rem',
            overflow: 'hidden',
            backgroundColor: '#000000',
            padding: "1rem"
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(90deg, #8A2BE2 0%, #00BFFF 100%)',
              padding: '0.5rem 0 0.5rem 1rem',
              textAlign: 'center',
              width: "100%",
              marginBottom: "1rem"
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#FFFFFF',
                textAlign: "left"
              }}
            >
              {heading}
            </Typography>
          </Box>
          <Typography component="div">
            {textContent}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const ContainerConfidentiality = () => {
  const heading = "27. CONFIDENTIALITY";
  const textContent = (
    <>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Both Parties understand that confidential and proprietary information individually owned by each Party is likely to be shared. Confidential or proprietary information includes but is not limited to business plans and strategies, customer information, future and proposed products, data, intellectual property, trade secrets, information that has not been released to the public, marketing plans, processes, methods, vendor information, price of services and products, operations, legal documents including this Agreement, and other        business, finance, and technical information in any format whatsoever (the "Confidential Information"). If one Party (the "Discloser") discloses to the other Party (the "Recipient") Confidential Information, the Recipient agrees to:
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        i.  not disclose to any third person or entity any Confidential Information without the Discloser's consent;
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        ii.  not use such Confidential Information for their own purposes or the purposes of another third-party individual or business without the Discloser's consent;
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        iii.  keep all Confidential Information secure and treat it with a high level of care to prevent disclosure, misuse, loss, espionage, and theft;
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        i.  not disclose to any third person or entity any Confidential Information without the Discloser's consent;
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        iv.  return any Confidential Information immediately upon the Discloser's request; v. return any Confidential Information within their possession immediately upon the termination of this Agreement; and
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        v.  keep the Confidential Information confidential for as long as the Confidential Information is deemed confidential, including beyond the Term of this Agreement.
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Both Parties agree that in the event of a breach of this Section, the Discloser will be entitled to seek an injunction without posting a bond, in addition to any other remedies available. In the event of a demand under the law for disclosure of Confidential Information, the Recipient agrees to give prompt notice to the Disclosure and cooperate with the Discloser, at the Discloser's expense, in seeking a protective order or any other remedy to prevent disclosure. If such efforts are unsuccessful, the Recipient agrees to limit Confidential Information disclosed under such an order to only what is necessarily required by the law. However, nothing in this Agreement will prohibit the Discloser's disclosure of information required to be disclosed in compliance with applicable laws or regulations, by order of a court or other regulatory body of competent jurisdiction, or from the reporting of an illegal act. Notwithstanding the foregoing, if the Parties have executed a non-disclosure agreement (“NDA”) separate from this Agreement and such NDA contains provisions that conflict with this Section, the NDA will prevail.
      </Typography>
    </>
  );

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#000000',
        color: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(to top right, #c47ab2, #00BFFF)',
          borderRadius: '1.25rem',
          padding: '0.125rem',
        }}
      >
        <Box
          sx={{
            borderRadius: '1.25rem',
            overflow: 'hidden',
            backgroundColor: '#000000',
            padding: "1rem"
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(90deg, #8A2BE2 0%, #00BFFF 100%)',
              padding: '0.5rem 0 0.5rem 1rem',
              textAlign: 'center',
              width: "100%",
              marginBottom: "1rem"
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#FFFFFF',
                textAlign: "left"
              }}
            >
              {heading}
            </Typography>
          </Box>
          <Typography component="div">
            {textContent}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};


const ContainerMiscellaneous = () => {
  const heading = "31. MISCELLANEOUS";
  const textContent = (
    <>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Relationship of Parties.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        The relationship between the Parties is that of independent contractors. Nothing in this Agreement is to be construed to create any agency, employment, partnership, or joint-venture relationship between the Parties.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Notices.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        All notices and other written communications required under this Agreement must be addressed either via certified mail or email. Mail notice will be deemed effective upon the receipt by the Party to which notice is given or on the third day following mailing, whichever occurs first. Email notice will be deemed effective upon receipt of a written acknowledgment by the Party to which notice is given. Notice must be sent to addresses indicated in this Agreement or as specified by subsequent written notice delivered by the Party whose address has changed.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Survival of Provisions.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Termination or expiration of this Agreement will not affect accrued rights, indemnities, Confidential Information, intellectual property ownership, warranties, fees payable, or any other contractual provision intended to survive termination or expiration of this Agreement.
      </Typography>


      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Assignment.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Neither Party may assign this Agreement to a third party without the other Party’s written consent. Company may delegate duties under this Agreement to employees, contractors, and/or agents.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Severability.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        If any provision in this Agreement is declared invalid, illegal, or unenforceable for any reason, the remainder of the provisions will remain in effect and enforceable to the fullest extent possible.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Authority.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Both Parties warrant that they have the full power, capacity, and authority to execute this Agreement and perform its obligations.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Waiver.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        The waiver by a Party of any breach of this Agreement in any one or more instances will in no way be construed as a waiver of any subsequent breach of this Agreement or any other agreement (whether or not of a similar nature).
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Governing Law.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        This Agreement is to be governed by, and interpreted, constructed, and enforced per the laws of the State of Texas without regard to conflict of laws.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Entire Agreement.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        This Agreement represents the entire and exclusive agreement between the Parties, and all previous written, and oral agreements and communications related to the subject matter of this Agreement are superseded. Any subsequent amendments will only be effective if made in writing and signed by both Parties.
      </Typography>
    </>
  );

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#000000',
        color: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(to top right, #c47ab2, #00BFFF)',
          borderRadius: '1.25rem',
          padding: '0.125rem',
        }}
      >
        <Box
          sx={{
            borderRadius: '1.25rem',
            overflow: 'hidden',
            backgroundColor: '#000000',
            padding: "1rem"
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(90deg, #8A2BE2 0%, #00BFFF 100%)',
              padding: '0.5rem 0 0.5rem 1rem',
              textAlign: 'center',
              width: "100%",
              marginBottom: "1rem"
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#FFFFFF',
                textAlign: "left"
              }}
            >
              {heading}
            </Typography>
          </Box>
          <Typography component="div">
            {textContent}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};


const LastContainer = () => {
  const textContent = (
    <>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        CHANGE IN SERVICES.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Company understands that, at times, changes may need to be made to the scope of Services initially agreed on. If Client decides that they would like to change or extend the Services stated in the SOW, Client must provide Company with written notice outlining the proposed changes. Sometimes Company may have to decline proposed changes, and Company reserves the right to do so. Any acceptance of proposed changes may be subject to fee increases and additional upfront payment of fees.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        COMMENCEMENT OF SERVICES.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        An executed version of this Agreement must be returned to Company to begin production of Services set forth herein. If the event is postponed or this Agreement is cancelled, in part or in full, by Client after Company has commenced work for the production of Services, Client agrees and understands that the Cancellation or Postponement policy in the Agreement will apply.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        SERVICE FEES AND PAYMENT SCHEDULE.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        All service fees shall be charged and paid as set forth in the Agreement, and calculated at the applicable Regular Hourly Rates.
      </Typography>
    </>
  );

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#000000',
        color: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(to top right, #c47ab2, #00BFFF)',
          borderRadius: '1.25rem',
          padding: '0.125rem',
        }}
      >
        <Box
          sx={{
            borderRadius: '1.25rem',
            overflow: 'hidden',
            backgroundColor: '#000000',
            padding: "1rem"
          }}
        >
          <Typography component="div">
            {textContent}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const AgreedAndAccepted = () => {
  return (
    <Box
      sx={{
        width: '100%',
        color: '#FFFFFF',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          borderRadius: '1.25rem',
        }}
      >
        <Box
          sx={{
            borderRadius: '1.25rem',
            overflow: 'hidden',
          }}
        >
          <Typography
            sx={{
              marginBottom: "1rem !important",
              fontSize: "1.5rem !important",
              fontWeight: 'bold',
            }}
          >
            AGREED AND ACCEPTED BY:
          </Typography>
          <Box container spacing={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {/* Client Section */}
            <Box>
              <Typography sx={{ 
                fontSize: "1.15rem !important",
                fontWeight: 'bold' 
              }}>
                CLIENT NAME: Executed with fully authority
              </Typography>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                mt: 2
              }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Name:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Title:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Signature:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Date:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: '0.25rem', // 2px width
                height: '10rem',
                background: 'linear-gradient(to bottom, #c47ab2, #00BFFF)',
              }}
            />

            {/* ShowPhaze LLC Section */}
            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>
                ShowPhaze LLC, executed with fully authority
              </Typography>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                mt: 2
              }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Name:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Title:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Signature:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Date:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const ClientStatementOfWork = () => {
  return (
    <Box
      sx={{
        width: '100%',
        color: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          borderRadius: '1.25rem',
          padding: '0.125rem', // Creates the 2px border effect
        }}
      >
        <Box
          sx={{
            borderRadius: '1.25rem',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center the content
            textAlign: 'center', // Center the text
          }}
        >
          {/* Header */}
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#FFFFFF',
              mb: 1,
              borderBottom: `1px solid white`
            }}
          >
            EXHIBIT B
          </Typography>
          <Typography
            sx={{
              fontSize: '1.75rem !important',
              fontWeight: 'bold',
              color: '#FFFFFF',
              my: 2
            }}
          >
            CLIENT STATEMENT OF WORK
          </Typography>

          {/* Text Content */}
          <Typography sx={{ fontSize: '1rem', color: '#FFFFFF' }}>
            This Statement of Work (the "SOW") is part of and incorporated into the Service Agreement (the "Agreement") setting forth the terms and conditions concerning the event production services that ShowPhaze LLC (the "Company") are to provide to CLIENT NAME (the "Client"), collectively the "Parties" and individually a "Party".
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};


const ServiceDetails = () => {
  return (
    <Box
      sx={{
        width: '100%',
        color: '#FFFFFF',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          borderRadius: '1.25rem',
        }}
      >
        <Box
          sx={{
            borderRadius: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {/* Services Section */}
          <Box>
            <Typography
              sx={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#FFFFFF',
                mb: 2,
              }}
            >
              The Services are to be performed at the following event:
            </Typography>
            <Box container spacing={2}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                borderRadius: "0.25rem",
                border: `1px solid rgba(255, 255, 255, 0.3)`,
                padding: "1rem",
                boxSizing: "border-box"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "50%"
                }}
              >
                <Box item xs={12} sm={6}>
                  <Typography>Client :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>Event Venue :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>Estimated hours of event production services :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>Estimated number of ShowPhaze personnel :</Typography>
                </Box>
                <Box item xs={12} sm={6}>
                  <Typography>Equipment to be provided by ShowPhaze :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>Anticipated additional expenses :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>ShowPhaze on-site contact :</Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "50%"
                }}
              >
                <Box item xs={12} sm={6}>
                  <Typography>Event Name :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>Location/Address :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>Load in time :</Typography>
                </Box>



                <Box item xs={12} sm={6}>
                  <Typography>Client on-site contact :</Typography>
                </Box>
              </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const ScopeOfWork = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem"
        }}
      >
        <Typography variant="h4" textAlign={"left"}
          sx={{
            fontSize: "1.25rem",
            fontWeight: "800"
          }}
        >
          SCOPE OF WORK
        </Typography>

        <Typography variant="body1" textAlign={"left"}
          sx={{
            fontSize: "1rem",
          }}
        >
          The Company agrees to provide the following event production services (“Services”) (check all that apply):
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem"
        }}
      >
        <Box
          sx={{
            padding: "1rem 0.5rem 1rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            borderRadius: "0.35rem",
            border: `1px solid rgba(255, 255, 255, 0.6)`
          }}
        >
          <Typography
            sx={{
              fontWeight: "700"
            }}
          >
            AUDIO ENGINEERING
          </Typography>

          <Checkbox 
            sx={{
              color: "white"
            }}
          />
        </Box>

        <Box
          sx={{
            padding: "1rem 0.5rem 1rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            borderRadius: "0.35rem",
            border: `1px solid rgba(255, 255, 255, 0.6)`
          }}
        >
          <Typography
            sx={{
              fontWeight: "700"
            }}
          >
            LIGHTING TECHNICIAN
          </Typography>

          <Checkbox 
            sx={{
              color: "white"
            }}
          />
        </Box>

        <Box
          sx={{
            padding: "1rem 0.5rem 1rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            borderRadius: "0.35rem",
            border: `1px solid rgba(255, 255, 255, 0.6)`
          }}
        >
          <Typography
            sx={{
              fontWeight: "700"
            }}
          >
            CAMERA AND VIDEO OPERATION
          </Typography>

          <Checkbox 
            sx={{
              color: "white"
            }}
          />
        </Box>

        <Box
          sx={{
            padding: "1rem 0.5rem 1rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            borderRadius: "0.35rem",
            border: `1px solid rgba(255, 255, 255, 0.6)`
          }}
        >
          <Typography
            sx={{
              fontWeight: "700"
            }}
          >
            EVENT MANAGEMENT SERVICES
          </Typography>

          <Checkbox 
            sx={{
              color: "white"
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

const LiveEventServiceAgreement = () => {

  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: '0',
          marginBottom: "1.5rem",
          textAlign: 'left',
        }}
      >
        <Typography
          sx={{
            color: '#FFFFFF',
            fontSize: '1.15rem',
            fontWeight: "700",
          }}
        >
          SERVICE AGREEMENT AND STATEMENT OF WORK (Outside of California)
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          "& .MuiTypography-root": {
            lineHeight: "1.75rem",
            fontSize: "1.15rem"
          },
        }}
      >
        <Container
          textContent={text1}
        />

        <Container
          heading={"2. Change in services".toUpperCase()}
          showHeading={true}
          textContent={text2}
        />

        <Container
          heading={"3. Service fees".toUpperCase()}
          showHeading={true}
          textContent={text3}
        />

        <ContainerOvertime />
        
        <Container
          heading={"5. Equipment & Expenses".toUpperCase()}
          showHeading={true}
          textContent={text5}
        />

        <Container
          heading={"6. FORM OF PAYMENT."}
          showHeading={true}
          textContent={text6}
        />

        <Container
          heading={"7. OVERDUE PAYMENTS."}
          showHeading={true}
          textContent={text7}
        />

        <Container
          heading={"8. FEE DISPUTES."}
          showHeading={true}
          textContent={text8}
        />

        <Container
          heading={"9. BREAKS & MEAL PERIODS."}
          showHeading={true}
          textContent={text9}
        />

        <Container
          heading={"10. QUICK TURNAROUND."}
          showHeading={true}
          textContent={text10}
        />

        <Container
          heading={"11. EVENT PRODUCTION SCHEDULE."}
          showHeading={true}
          textContent={text11}
        />

        <Container
          heading={"12. APPROVALS, REVISIONS, ASSETS, AND INFORMATION."}
          showHeading={true}
          textContent={text12}
        />

        <Container
          heading={"13. VENUE REQUIREMENTS & EVENT INSURANCE."}
          showHeading={true}
          textContent={text13}
        />

        <Container
          heading={"14. ACCESS"}
          showHeading={true}
          textContent={text14}
        />

        <Container
          heading={"15. MANDATORY PERSONNEL."}
          showHeading={true}
          textContent={text15}
        />

        <Container
          heading={"16. ADVERSE WEATHER PLAN."}
          showHeading={true}
          textContent={text16}
        />

        <Container
          heading={"17. CREATIVE DISCRETION."}
          showHeading={true}
          textContent={text17}
        />

        <Container
          heading={"18. APPROPRIATE CONDUCT & ENVIRONMENT."}
          showHeading={true}
          textContent={text18}
        />

        <Container
          heading={"19. MEETINGS."}
          showHeading={true}
          textContent={text19}
        />

        <Container
          heading={"20. BUSINESS HOURS & COMMUNICATIONS."}
          showHeading={true}
          textContent={text20}
        />

        <Container
          heading={"21. COOPERATION & EXCLUSIVITY."}
          showHeading={true}
          textContent={text21}
        />

        <ContainerCancellation />

        <Container
          heading={"24. COMPANY PERSONNEL."}
          showHeading={true}
          textContent={text24}
        />

        <Container
          heading={"25. INDEMNIFICATION."}
          showHeading={true}
          textContent={text25}
        />

        <Container
          heading={"26. LIMITATION OF LIABILITY."}
          showHeading={true}
          textContent={text26}
        />


        <ContainerConfidentiality />

        <Container
          heading={"28. NON-SOLICITATION & NON-DISPARAGEMENT."}
          showHeading={true}
          textContent={text28}
        />

        <Container
          heading={"29. DISPUTE RESOLUTION."}
          showHeading={true}
          textContent={text29}
        />

        <Container
          heading={"30. DEPOSITS."}
          showHeading={true}
          textContent={text30}
        />

        <ContainerMiscellaneous />

        <AgreedAndAccepted />

        <ClientStatementOfWork />

        <Box
          sx={{
            marginTop: "2rem"
          }}
        >
          <ScopeOfWork />
        </Box>

        <ServiceDetails />

        <LastContainer />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "2rem"
        }}
      >
        <DownloadButton />
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: "2rem",
          bottom: "2rem"
        }}
      >
        <QRSection />
      </Box>
      {/* <DownloadButton /> */}
    </>
  )
};

export default LiveEventServiceAgreement;
import { MedicalHistory, ConsultationHistory } from "./interfaces";

const defaultGlucoseChart = {
  fbs: 1,
  rbs_2hrs_postprandial: 1,
  rbs_before_lunch: 1,
  rbs_before_dinner: 1,
  rbs_2hrs_afterdinner: 1,
  rbs_at_10pm: 1,
  remark: "a"
};

const defaultFamilyHistory = {
  hereditory_condition: "a",
  relationship_to_client: "a",
  any_other_information: "a"
};

const defaultSocialHistory = {
  alcohol: {
    drinks_alcohol: "a",
    is_true: [
      {
        alcohol_type: "a",
        quantity: 1,
        frequency: "a"
      }
    ]
  },
  cigarettes: {
    smokes_cigarette: "a",
    is_true: {
      sticks_per_day: "a",
      duration: "a"
    }
  },
  takes_shisha: true,
  hard_drugs: ["a"]
};

const defaultPrevSurgery = {
  surgery_type: "a",
  year: 1
};

const defaultSurgeryHistory = {
  previous_surgery: [defaultPrevSurgery],
  complications: {
    any: true,
    is_true: "a"
  },
  drugs_history: "a",
  drug_allergies: {
    any: true,
    is_true: [
      {
        drug_name: "a",
        drug_reactions: "a"
      }
    ]
  }
};

const defaultConsultationHistory: ConsultationHistory = {
  dental_history: "a",
  surgery_history: defaultSurgeryHistory,
  medical_history: {
    previous_condition: "a",
    previous_blood_transfusion: "a",
    any_complication: "a"
  },
  bbl: {
    buttocks_size_wanted: "a",
    client_expectation: "a",
    doctor_remarks: {
      comment: "a",
      impression_on_expectation: "a"
    }
  },
  breast: {
    cup_size_wanted: "a",
    client_expectation: "a",
    doctor_remarks: {
      comment: "a",
      impression_on_expectation: "a"
    }
  },
  social_history: defaultSocialHistory,
  family_history: defaultFamilyHistory
};

export const actualData: MedicalHistory = {
  _id: "a",
  allergies: "a",
  consultation_history: defaultConsultationHistory,
  nursing_history: {
    glucose_profile_chart_fields: defaultGlucoseChart
  },
  immunization: "a",
  social_activities: "a",
  blood_group: "a",
  genotype: "a"
};

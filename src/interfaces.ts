export interface MedicalHistory {
  _id?: string;
  allergies?: string;
  consultation_history?: ConsultationHistory;
  nursing_history?: NursingHistory;
  immunization?: string;
  social_activities?: string;
  nutrition_history?: string;
  blood_group?: string;
  genotype?: string;
}
export interface ConsultationHistory {
  dental_history?: string;
  surgery_history?: SurgeryHistory;
  medical_history?: {
    previous_condition?: string;
    previous_blood_transfusion?: string;
    any_complication?: string;
  };
  obstetrics_history?: {
    menarche?: number;
    last_menstrual_period?: {
      date?: string;
      number_of_days?: number;
      regular_flow?: boolean;
    };
    contraceptives?: {
      was_any_used?: boolean;
      type_if_true?: string;
    };
    pap_smear?: {
      any_been_done?: boolean;
      last_papsmear_year?: number;
      last_papsmear_findings?: string;
    };
    parity?: string;
    year?: string;
    mode_of_delivery?: {
      first?: string;
      second?: string;
      third?: string;
      fourth?: string;
    };
    any_complications?: string;
  };
  psychiatric_history?: {
    addictions?: {
      has_addictions?: string;
      addictions_if_true?: string;
    };
    previous_episode_of_depression?: string;
    previous_episode_of_elation?: string;
    surgery?: {
      reason?: string;
      clarify_if_others?: string;
    };
  };
  bbl?: {
    buttocks_size_wanted?: string;
    client_expectation?: string;
    doctor_remarks?: {
      comment?: string;
      impression_on_expectation?: string;
    };
  };
  breast?: {
    cup_size_wanted?: string;
    client_expectation?: string;
    doctor_remarks?: {
      comment?: string;
      impression_on_expectation?: string;
    };
  };
  social_history?: SocialHistory;
  family_history?: FamilyHistory;
}
export interface SocialHistory {
  alcohol?: {
    drinks_alcohol?: string;
    is_true?: Array<{
      alcohol_type?: string;
      quantity?: any;
      frequency?: string;
    }>;
  };
  cigarettes?: {
    smokes_cigarette?: string;
    is_true?: {
      sticks_per_day?: string;
      duration?: string;
    };
  };
  takes_shisha?: boolean;
  hard_drugs?: Array<string>;
}
export interface FamilyHistory {
  hereditory_condition?: string;
  relationship_to_client?: string;
  any_other_information?: string;
}

export interface NursingHistory {
  glucose_profile_chart_fields?: GlucoseProfileChartField;
}
export interface GlucoseProfileChartField {
  fbs?: number;
  rbs_2hrs_postprandial?: number;
  rbs_before_lunch?: number;
  rbs_before_dinner?: number;
  rbs_2hrs_afterdinner?: number;
  rbs_at_10pm?: number;
  remark?: string;
}

export interface SurgeryHistory {
  previous_surgery?: Array<PreviousSurgery>;
  complications?: {
    any?: boolean;
    is_true: string;
  };
  drugs_history?: string;
  drug_allergies?: {
    any?: boolean;
    is_true?: Array<{
      drug_name: string;
      drug_reactions: string;
    }>;
  };
}

export interface PreviousSurgery {
  surgery_type?: string;
  year?: number;
}

const defaultGlucoseChart = {
  fbs: 0,
  rbs_2hrs_postprandial: 0,
  rbs_before_lunch: 0,
  rbs_before_dinner: 0,
  rbs_2hrs_afterdinner: 0,
  rbs_at_10pm: 0,
  remark: ""
};

const defaultFamilyHistory = {
  hereditory_condition: "",
  relationship_to_client: "",
  any_other_information: ""
};

const defaultSocialHistory = {
  alcohol: {
    drinks_alcohol: "",
    is_true: []
  },
  cigarettes: {
    smokes_cigarette: "",
    is_true: {
      sticks_per_day: "",
      duration: ""
    }
  },
  takes_shisha: true,
  hard_drugs: []
};

// const defaultPrevSurgery = {
//   surgery_type: "",
//   year: 0
// };

const defaultSurgeryHistory = {
  previous_surgery: [],
  complications: {
    any: true,
    is_true: ""
  },
  drugs_history: "",
  drug_allergies: {
    any: true,
    is_true: []
  }
};

const defaultConsultationHistory: ConsultationHistory = {
  dental_history: "",
  surgery_history: defaultSurgeryHistory,
  medical_history: {
    previous_condition: "",
    previous_blood_transfusion: "",
    any_complication: ""
  },
  obstetrics_history: {
    menarche: 0,
    last_menstrual_period: {
      date: "",
      number_of_days: 0,
      regular_flow: true
    },
    contraceptives: {
      was_any_used: true,
      type_if_true: ""
    },
    pap_smear: {
      any_been_done: true,
      last_papsmear_year: 0,
      last_papsmear_findings: ""
    },
    parity: "",
    year: "",
    mode_of_delivery: {
      first: "",
      second: "",
      third: "",
      fourth: ""
    },
    any_complications: ""
  },
  psychiatric_history: {
    addictions: {
      has_addictions: "",
      addictions_if_true: ""
    },
    previous_episode_of_depression: "",
    previous_episode_of_elation: "",
    surgery: {
      reason: "",
      clarify_if_others: ""
    }
  },
  bbl: {
    buttocks_size_wanted: "",
    client_expectation: "",
    doctor_remarks: {
      comment: "",
      impression_on_expectation: ""
    }
  },
  breast: {
    cup_size_wanted: "",
    client_expectation: "",
    doctor_remarks: {
      comment: "",
      impression_on_expectation: ""
    }
  },
  social_history: defaultSocialHistory,
  family_history: defaultFamilyHistory
};

export const defaultData: MedicalHistory = {
  _id: "",
  allergies: "",
  consultation_history: defaultConsultationHistory,
  nursing_history: {
    glucose_profile_chart_fields: defaultGlucoseChart
  },
  immunization: "",
  social_activities: "",
  nutrition_history: "",
  blood_group: "",
  genotype: ""
};

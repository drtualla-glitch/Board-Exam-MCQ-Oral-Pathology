const QUESTION_LIMIT = 50;
const EXAM_TIME = 2700; // seconds

const allQuestions = [

// ====================
// TRAUMATIC ULCERATIONS
// ====================
// 1
  {
    "question": "Most traumatic oral ulcerations are primarily caused by:",
    "answers": [
      {"text": "Viral infections", "correct": false},
      {"text": "Fungal colonization", "correct": false},
      {"text": "Simple mechanical trauma", "correct": true},
      {"text": "Autoimmune reactions", "correct": false},
      {"text": "Nutritional deficiencies", "correct": false}
    ],
    "explanation": "Most traumatic oral ulcerations result from simple mechanical trauma such as accidental biting, sharp edges of teeth, or dental appliances causing injury to the oral mucosa."
  },
// 2
  {
    "question": "Traumatic ulcers most commonly appear in areas that are:",
    "answers": [
      {"text": "Keratinized and immobile", "correct": false},
      {"text": "Frequently exposed to sunlight", "correct": false},
      {"text": "Readily trapped or abraded between teeth", "correct": true},
      {"text": "Rich in salivary gland tissue", "correct": false},
      {"text": "Covered by thick mucosa", "correct": false}
    ],
    "explanation": "Traumatic ulcers commonly occur in areas where the mucosa is easily trapped or abraded between teeth, such as the buccal mucosa and lateral tongue border."
  },
// 3
  {
    "question": "Which site is LEAST likely to develop a traumatic ulcer from accidental trauma?",
    "answers": [
      {"text": "Lower lip", "correct": false},
      {"text": "Tongue", "correct": false},
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Hard palate", "correct": true},
      {"text": "Lateral tongue border", "correct": false}
    ],
    "explanation": "The hard palate is less likely to develop traumatic ulcers from accidental trauma because it is a firm, keratinized surface less prone to injury compared to mobile mucosal areas."
  },
// 4
  {
    "question": "Riga-Fede disease is best described as:",
    "answers": [
      {"text": "A fungal ulcer of the palate", "correct": false},
      {"text": "A chemical burn of the mucosa", "correct": false},
      {"text": "A traumatic ulcer on the anterior tongue of infants", "correct": true},
      {"text": "A malignant ulcer of salivary origin", "correct": false},
      {"text": "A radiation-induced ulcer", "correct": false}
    ],
    "explanation": "Riga-Fede disease is a traumatic ulceration occurring on the ventral surface of the tongue in infants, caused by repetitive trauma from erupted teeth."
  },
// 5
  {
    "question": "Prostheses most commonly associated with traumatic oral ulcers are:",
    "answers": [
      {"text": "Orthodontic brackets", "correct": false},
      {"text": "Dental implants", "correct": false},
      {"text": "Dentures", "correct": true},
      {"text": "Space maintainers", "correct": false},
      {"text": "Occlusal splints", "correct": false}
    ],
    "explanation": "Dentures are the most common prostheses associated with traumatic oral ulcers due to irritation or trauma caused by ill-fitting or rough denture surfaces."
  },
// 6
  {
    "question": "Self-induced traumatic ulcers are often associated with:",
    "answers": [
      {"text": "Vitamin deficiency", "correct": false},
      {"text": "Psychological problems", "correct": true},
      {"text": "Genetic disorders", "correct": false},
      {"text": "Viral latency", "correct": false},
      {"text": "Autoimmune disease", "correct": false}
    ],
    "explanation": "Self-induced traumatic ulcers are frequently linked to psychological problems where patients may habitually traumatize their oral mucosa."
  },
// 7
  {
    "question": "Iatrogenic traumatic ulcers may result from:",
    "answers": [
      {"text": "Viral replication", "correct": false},
      {"text": "Excess salivary flow", "correct": false},
      {"text": "Diagnostic or surgical procedures", "correct": true},
      {"text": "Excess fluoride exposure", "correct": false},
      {"text": "Tobacco chewing", "correct": false}
    ],
    "explanation": "Iatrogenic traumatic ulcers are caused by medical or dental interventions such as diagnostic or surgical procedures that inadvertently injure the oral mucosa."
  },
// 8
  {
    "question": "Which of the following is an uncommon but preventable cause of oral ulceration?",
    "answers": [
      {"text": "Removal of adherent cotton rolls", "correct": true},
      {"text": "Viral infection", "correct": false},
      {"text": "Autoimmune blistering", "correct": false},
      {"text": "Fungal colonization", "correct": false},
      {"text": "Nutritional anemia", "correct": false}
    ],
    "explanation": "Removal of adherent cotton rolls can cause traumatic ulceration but is uncommon and preventable with careful technique."
  },
// 9
  {
    "question": "Chemical oral ulcers may result from all EXCEPT:",
    "answers": [
      {"text": "Acidity", "correct": false},
      {"text": "Alkalinity", "correct": false},
      {"text": "Local irritation", "correct": false},
      {"text": "Contact allergy", "correct": false},
      {"text": "Mechanical friction", "correct": true}
    ],
    "explanation": "Chemical oral ulcers are caused by chemical agents such as acids, alkalis, irritants, or allergens, but not by mechanical friction which causes traumatic ulcers."
  },
// 10
  {
    "question": "Aspirin burns occur when:",
    "answers": [
      {"text": "Aspirin is swallowed without water", "correct": false},
      {"text": "Aspirin is injected into mucosa", "correct": false},
      {"text": "Acetylsalicylic acid is placed against oral mucosa", "correct": true},
      {"text": "Aspirin is inhaled", "correct": false},
      {"text": "Aspirin is dissolved in saliva", "correct": false}
    ],
    "explanation": "Aspirin burns occur when acetylsalicylic acid is placed directly against the oral mucosa, causing a chemical burn."
  },
// 11
  {
    "question": "The tissue reaction seen in aspirin burns is:",
    "answers": [
      {"text": "Liquefactive necrosis", "correct": true},
      {"text": "Coagulative necrosis", "correct": false},
      {"text": "Caseous necrosis", "correct": false},
      {"text": "Fat necrosis", "correct": false},
      {"text": "Fibrinoid necrosis", "correct": false}
    ],
    "explanation": "Aspirin burns cause liquefactive necrosis due to the chemical injury to the oral mucosa."
  },
// 12
  {
    "question": "Dental cavity medications most associated with iatrogenic oral ulcers commonly contain:",
    "answers": [
      {"text": "Fluoride", "correct": false},
      {"text": "Eugenol", "correct": true},
      {"text": "Phenol", "correct": false},
      {"text": "Calcium hydroxide", "correct": false},
      {"text": "Chlorhexidine", "correct": false}
    ],
    "explanation": "Eugenol, commonly found in dental cavity medications, is known to cause iatrogenic oral ulcers due to its irritating properties."
  },
// 13
  {
    "question": "Chemical burns of oral mucosa have been associated with:",
    "answers": [
      {"text": "Fluoride varnish", "correct": false},
      {"text": "Tooth desensitizers", "correct": false},
      {"text": "Acidic tooth-etching agents", "correct": true},
      {"text": "Sealants", "correct": false},
      {"text": "Glass ionomer cement", "correct": false}
    ],
    "explanation": "Acidic tooth-etching agents can cause chemical burns to the oral mucosa if improperly applied."
  },
// 14
  {
    "question": "Endodontic and vital bleaching procedures may cause burns due to:",
    "answers": [
      {"text": "Alcohol compounds", "correct": false},
      {"text": "Strong oxidizing agents", "correct": true},
      {"text": "Weak organic acids", "correct": false},
      {"text": "Local anesthetics", "correct": false},
      {"text": "Enzymatic reactions", "correct": false}
    ],
    "explanation": "Strong oxidizing agents used in bleaching and endodontic procedures can cause chemical burns to oral tissues."
  },
// 15
  {
    "question": "A classic example of an intraoral thermal burn is:",
    "answers": [
      {"text": "Ice burn", "correct": false},
      {"text": "Steam inhalation injury", "correct": false},
      {"text": "Pizza burn on the palate", "correct": true},
      {"text": "Hot beverage lip burn", "correct": false},
      {"text": "Electrical burn", "correct": false}
    ],
    "explanation": "Pizza burn on the palate is a classic example of an intraoral thermal burn caused by hot food."
  },
// 16
  {
    "question": "Oral ulcerations are common during:",
    "answers": [
      {"text": "Antibiotic therapy", "correct": false},
      {"text": "Antihistamine therapy", "correct": false},
      {"text": "Therapeutic radiation and certain chemotherapies", "correct": true},
      {"text": "Vitamin supplementation", "correct": false},
      {"text": "Antifungal therapy", "correct": false}
    ],
    "explanation": "Therapeutic radiation and certain chemotherapies commonly cause oral ulcerations as a side effect."
  },
// 17
  {
    "question": "Oral mucositis initially involves the:",
    "answers": [
      {"text": "Epithelium only", "correct": true},
      {"text": "Submucosa and vasculature", "correct": false},
      {"text": "Muscle layer", "correct": false},
      {"text": "Salivary ducts", "correct": false},
      {"text": "Periosteum", "correct": false}
    ],
    "explanation": "Oral mucositis initially affects the epithelial layer of the mucosa before deeper tissues are involved."
  },
// 18
  {
    "question": "The correct sequence of phases in oral mucositis is:",
    "answers": [
      {"text": "Ulcerative → Healing → Epithelial → Initial", "correct": false},
      {"text": "Epithelial → Ulcerative → Healing → Initial", "correct": false},
      {"text": "Initial → Epithelial → Ulcerative → Healing", "correct": true},
      {"text": "Healing → Initial → Ulcerative → Epithelial", "correct": false},
      {"text": "Initial → Ulcerative → Epithelial → Healing", "correct": false}
    ],
    "explanation": "The phases of oral mucositis progress from initial injury, epithelial damage, ulceration, and finally healing."
  },
// 19
  {
    "question": "Which medication is particularly damaging to oral mucosa due to interference with nucleotide synthesis?",
    "answers": [
      {"text": "Cisplatin", "correct": false},
      {"text": "Doxorubicin", "correct": false},
      {"text": "Methotrexate", "correct": true},
      {"text": "Cyclophosphamide", "correct": false},
      {"text": "Vincristine", "correct": false}
    ],
    "explanation": "Methotrexate interferes with nucleotide synthesis, making it particularly damaging to rapidly dividing oral mucosal cells."
  },
// 20
  {
    "question": "Chronopharmacology refers to:",
    "answers": [
      {"text": "Drug metabolism by the liver", "correct": false},
      {"text": "Drug excretion rate", "correct": false},
      {"text": "Timing of drug administration affecting outcomes", "correct": true},
      {"text": "Drug–drug interaction", "correct": false},
      {"text": "Drug allergy mechanisms", "correct": false}
    ],
    "explanation": "Chronopharmacology studies how the timing of drug administration influences therapeutic outcomes and toxicity."
  },
// 21
  {
    "question": "5-fluorouracil shows improved effectiveness and reduced toxicity when:",
    "answers": [
      {"text": "Given with meals", "correct": false},
      {"text": "Given at higher doses", "correct": false},
      {"text": "Administered at specific times of the day", "correct": true},
      {"text": "Combined with antibiotics", "correct": false},
      {"text": "Given intravenously only", "correct": false}
    ],
    "explanation": "5-fluorouracil's effectiveness and toxicity profile improve when administered according to specific timing, reflecting chronopharmacology principles."
  },
// 22
  {
    "question": "An acute traumatic ulcer is typically characterized by:",
    "answers": [
      {"text": "Painless lesion", "correct": false},
      {"text": "Elevated scarred margins", "correct": false},
      {"text": "Yellow base with red halo and pain", "correct": true},
      {"text": "Indurated borders", "correct": false},
      {"text": "Progressive enlargement", "correct": false}
    ],
    "explanation": "Acute traumatic ulcers usually present with a yellowish base surrounded by a red inflammatory halo and are painful."
  },
// 23
  {
    "question": "Chronic traumatic ulcers usually present with:",
    "answers": [
      {"text": "Severe pain", "correct": false},
      {"text": "Vesicular eruptions", "correct": false},
      {"text": "Little or no pain", "correct": true},
      {"text": "Rapid healing", "correct": false},
      {"text": "Profuse bleeding", "correct": false}
    ],
    "explanation": "Chronic traumatic ulcers often have minimal or no pain and persist for a longer duration."
  },
// 24
  {
    "question": "A key feature distinguishing chronic traumatic ulcers is:",
    "answers": [
      {"text": "Greenish membrane", "correct": false},
      {"text": "Elevated margins due to scar formation", "correct": true},
      {"text": "Multiple clustered lesions", "correct": false},
      {"text": "Presence of vesicles", "correct": false},
      {"text": "Spontaneous regression in hours", "correct": false}
    ],
    "explanation": "Chronic traumatic ulcers typically have elevated, indurated margins due to scar tissue formation."
  },
// 25
  {
    "question": "Chronic traumatic ulcers may clinically mimic:",
    "answers": [
      {"text": "Aphthous ulcers only", "correct": false},
      {"text": "Viral lesions only", "correct": false},
      {"text": "Carcinoma and infectious ulcers", "correct": true},
      {"text": "Allergic reactions", "correct": false},
      {"text": "Pigmented lesions", "correct": false}
    ],
    "explanation": "Chronic traumatic ulcers can resemble carcinoma or infectious ulcers clinically, necessitating biopsy for diagnosis."
  },
// 26
  {
    "question": "Traumatic ulcerative granuloma with stromal eosinophilia is best described as:",
    "answers": [
      {"text": "A malignant soft tissue tumor", "correct": false},
      {"text": "An acute infectious ulcer", "correct": false},
      {"text": "A chronic, self-limiting reactive lesion", "correct": true},
      {"text": "A salivary gland neoplasm", "correct": false},
      {"text": "A vascular malformation", "correct": false}
    ],
    "explanation": "Traumatic ulcerative granuloma with stromal eosinophilia is a chronic reactive lesion that is self-limiting."
  },
// 27
  {
    "question": "Another name for traumatic granuloma is:",
    "answers": [
      {"text": "Pyogenic granuloma", "correct": false},
      {"text": "Peripheral giant cell granuloma", "correct": false},
      {"text": "Eosinophilic ulcer of the oral mucosa", "correct": true},
      {"text": "Mucocele", "correct": false},
      {"text": "Fibroma", "correct": false}
    ],
    "explanation": "Traumatic granuloma is also known as eosinophilic ulcer of the oral mucosa."
  },
// 28
  {
    "question": "Traumatic granuloma most commonly occurs on the:",
    "answers": [
      {"text": "Floor of mouth", "correct": false},
      {"text": "Hard palate", "correct": false},
      {"text": "Tongue", "correct": true},
      {"text": "Gingiva", "correct": false},
      {"text": "Lip vermilion", "correct": false}
    ],
    "explanation": "The tongue, especially the lateral border, is the most common site for traumatic granuloma."
  },
// 29
  {
    "question": "Healing time for traumatic granuloma is typically:",
    "answers": [
      {"text": "24–48 hours", "correct": false},
      {"text": "3–5 days", "correct": false},
      {"text": "1 week", "correct": false},
      {"text": "Several weeks to a few months", "correct": true},
      {"text": "Over one year", "correct": false}
    ],
    "explanation": "Traumatic granulomas usually take several weeks to a few months to heal."
  },
// 30
  {
    "question": "Necrotizing sialometaplasia is characteristically found on the:",
    "answers": [
      {"text": "Tongue dorsum", "correct": false},
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Hard palate", "correct": true},
      {"text": "Lower lip", "correct": false},
      {"text": "Retromolar pad", "correct": false}
    ],
    "explanation": "Necrotizing sialometaplasia typically occurs on the hard palate due to ischemic necrosis of minor salivary glands."
  },
// 31
  {
    "question": "Necrotizing sialometaplasia results from:",
    "answers": [
      {"text": "Viral cytopathic effects", "correct": false},
      {"text": "Trauma-induced ischemic necrosis of minor salivary glands", "correct": true},
      {"text": "Autoimmune destruction", "correct": false},
      {"text": "Fungal invasion", "correct": false},
      {"text": "Bacterial abscess formation", "correct": false}
    ],
    "explanation": "Necrotizing sialometaplasia is caused by ischemic necrosis of minor salivary glands, often due to trauma."
  },
// 32
  {
    "question": "Acute ulcers histologically show:",
    "answers": [
      {"text": "Hyperkeratosis", "correct": false},
      {"text": "Dysplastic epithelium", "correct": false},
      {"text": "Loss of epithelium replaced by fibrin with neutrophils", "correct": true},
      {"text": "Granuloma formation", "correct": false},
      {"text": "Dense collagen bundles", "correct": false}
    ],
    "explanation": "Acute ulcers show loss of epithelium replaced by fibrin and infiltration of neutrophils histologically."
  },
// 33
  {
    "question": "Chronic ulcers typically have a base composed of:",
    "answers": [
      {"text": "Necrotic bone", "correct": false},
      {"text": "Granulation tissue", "correct": true},
      {"text": "Adipose tissue", "correct": false},
      {"text": "Muscle fibers", "correct": false},
      {"text": "Calcified deposits", "correct": false}
    ],
    "explanation": "Chronic ulcers usually have a base of granulation tissue as part of the healing process."
  },
// 34
  {
    "question": "The inflammatory infiltrate in chronic ulcers is:",
    "answers": [
      {"text": "Neutrophils only", "correct": false},
      {"text": "Lymphocytes only", "correct": false},
      {"text": "Mixed inflammatory cells", "correct": true},
      {"text": "Eosinophils only", "correct": false},
      {"text": "Plasma cells only", "correct": false}
    ],
    "explanation": "Chronic ulcers show a mixed inflammatory infiltrate including lymphocytes, plasma cells, and other immune cells."
  },
// 35
  {
    "question": "When chronic reactive ulcers have unclear cause, clinicians must consider:",
    "answers": [
      {"text": "Only nutritional disorders", "correct": false},
      {"text": "Only viral infections", "correct": false},
      {"text": "Infection and malignancy", "correct": true},
      {"text": "Only autoimmune diseases", "correct": false},
      {"text": "Only drug reactions", "correct": false}
    ],
    "explanation": "In unclear chronic reactive ulcers, infection and malignancy must be considered as differential diagnoses."
  },
// 36
  {
    "question": "Initial management of most reactive ulcers includes:",
    "answers": [
      {"text": "Immediate surgery", "correct": false},
      {"text": "Broad-spectrum antibiotics", "correct": false},
      {"text": "Observation and bland mucolytic mouth rinse", "correct": true},
      {"text": "Chemotherapy", "correct": false},
      {"text": "Radiotherapy", "correct": false}
    ],
    "explanation": "Most reactive ulcers are initially managed conservatively with observation and bland mucolytic rinses."
  },
// 37
  {
    "question": "A recommended bland mucolytic rinse is:",
    "answers": [
      {"text": "Chlorhexidine", "correct": false},
      {"text": "Hydrogen peroxide", "correct": false},
      {"text": "Sodium bicarbonate in warm water", "correct": true},
      {"text": "Povidone iodine", "correct": false},
      {"text": "Alcohol mouthwash", "correct": false}
    ],
    "explanation": "Sodium bicarbonate in warm water is a recommended bland mucolytic rinse for oral ulcers."
  },
// 38
  {
    "question": "Significant pain from traumatic ulcers may be managed with:",
    "answers": [
      {"text": "Systemic antivirals", "correct": false},
      {"text": "Topical corticosteroids", "correct": true},
      {"text": "Antifungal lozenges", "correct": false},
      {"text": "Vitamin supplements", "correct": false},
      {"text": "Anticoagulants", "correct": false}
    ],
    "explanation": "Topical corticosteroids help reduce inflammation and pain in traumatic ulcers."
  },
// 39
  {
    "question": "Healing of traumatic granuloma is generally:",
    "answers": [
      {"text": "Impossible without surgery", "correct": false},
      {"text": "Rapid within 24 hours", "correct": false},
      {"text": "Spontaneous", "correct": true},
      {"text": "Dependent on antibiotics", "correct": false},
      {"text": "Always malignant", "correct": false}
    ],
    "explanation": "Traumatic granulomas generally heal spontaneously without the need for surgical intervention."
  },
// 40
  {
    "question": "If an ulcer fails to heal within two weeks, the next step is:",
    "answers": [
      {"text": "Increase mouthwash frequency", "correct": false},
      {"text": "Start antifungal therapy", "correct": false},
      {"text": "Biopsy to establish diagnosis", "correct": true},
      {"text": "Begin chemotherapy", "correct": false},
      {"text": "Apply topical anesthetics only", "correct": false}
    ],
    "explanation": "Non-healing ulcers beyond two weeks require biopsy to rule out malignancy or other serious conditions."
  },
// =============================
// ULCERATIVE LESION - SYPHYLLIS
// =============================
// 41
  {
    "question": "Syphilis is caused by which organism?",
    "answers": [
      {"text": "Candida albicans", "correct": false},
      {"text": "Herpes simplex virus", "correct": false},
      {"text": "Treponema denticola", "correct": false},
      {"text": "Treponema pallidum", "correct": true},
      {"text": "Neisseria gonorrhoeae", "correct": false}
    ],
    "explanation": "Syphilis is caused by the spirochete bacterium Treponema pallidum."
  },
// 42
  {
    "question": "Syphilis is primarily classified as a:",
    "answers": [
      {"text": "Airborne infection", "correct": false},
      {"text": "Foodborne disease", "correct": false},
      {"text": "Sexually transmitted disease", "correct": true},
      {"text": "Vector-borne illness", "correct": false},
      {"text": "Nosocomial infection", "correct": false}
    ],
    "explanation": "Syphilis is primarily transmitted through sexual contact, classifying it as a sexually transmitted disease."
  },
// 43
  {
    "question": "A significant number of new syphilis cases are reported among:",
    "answers": [
      {"text": "Children under five", "correct": false},
      {"text": "Elderly women", "correct": false},
      {"text": "Healthcare workers", "correct": false},
      {"text": "Gay men", "correct": true},
      {"text": "Intravenous drug users only", "correct": false}
    ],
    "explanation": "Epidemiological data show a significant number of new syphilis cases among gay men."
  },
// 44
  {
    "question": "Syphilis may be transmitted by all EXCEPT:",
    "answers": [
      {"text": "Sexual contact with active lesions", "correct": false},
      {"text": "Blood transfusion", "correct": false},
      {"text": "Transplacental transmission", "correct": false},
      {"text": "Aerosol droplets", "correct": true},
      {"text": "Direct mucocutaneous contact", "correct": false}
    ],
    "explanation": "Syphilis is not transmitted via aerosol droplets; transmission requires direct contact with infectious lesions or fluids. Syphyllisis acquired by sexual contact with a partner with active lesions, by transfusion of infected blood, or by transplacental inoculation of the fetus by an infected mother"
  },
// 45
  {
    "question": "The primary lesion of syphilis that forms at the site of entry is called a:",
    "answers": [
      {"text": "Papule", "correct": false},
      {"text": "Vesicle", "correct": false},
      {"text": "Chancre", "correct": true},
      {"text": "Gumma", "correct": false},
      {"text": "Plaque", "correct": false}
    ],
    "explanation": "The chancre is the characteristic primary lesion of syphilis at the site of inoculation."
  },
// 46
  {
    "question": "A syphilitic chancre is typically described as:",
    "answers": [
      {"text": "Painful with purulent exudate", "correct": false},
      {"text": "Superficial with smooth margins", "correct": false},
      {"text": "Deep ulcer with irregular raised border", "correct": true},
      {"text": "Vesicular with serous fluid", "correct": false},
      {"text": "Multiple clustered erosions", "correct": false}
    ],
    "explanation": "A syphilitic chancre is is typically deep with a red, brown, or purple base and an irregular raised border, with resemblance to a chronic traumatic ulcer, squamous cell carcinoma, and non-Hodgkin’s lymphoma."
  },
// 47
  {
    "question": "The chancre most closely resembles which of the following lesions clinically?",
    "answers": [
      {"text": "Aphthous ulcer", "correct": true},
      {"text": "Mucocele", "correct": false},
      {"text": "Chronic traumatic ulcer", "correct": false},
      {"text": "Leukoplakia", "correct": false},
      {"text": "Lichen planus", "correct": false}
    ],
    "explanation": "Clinically, a syphilitic chancre can resemble an aphthous ulcer due to its ulcerative appearance."
  },
// 48
  {
    "question": "Regional lymphadenopathy in primary syphilis is usually:",
    "answers": [
      {"text": "Painful and suppurative", "correct": false},
      {"text": "Painless and nonsuppurative", "correct": true},
      {"text": "Bilateral and tender", "correct": false},
      {"text": "Fluctuant with pus discharge", "correct": false},
      {"text": "Absent", "correct": false}
    ],
    "explanation": "Lymphadenopathy in primary syphilis is typically painless and nonsuppurative."
  },
// 49
  {
    "question": "The primary chancre typically heals:",
    "answers": [
      {"text": "Only after antibiotic therapy", "correct": false},
      {"text": "Within 24–48 hours", "correct": false},
      {"text": "After several weeks without treatment", "correct": true},
      {"text": "With extensive scarring", "correct": false},
      {"text": "Only after surgical removal", "correct": false}
    ],
    "explanation": "The primary chancre usually heals spontaneously after several weeks even without treatment."
  },
// 50
  {
    "question": "Patients infected with syphyllis via blood transfusion typically begin with:",
    "answers": [
      {"text": "Primary syphilis", "correct": false},
      {"text": "Secondary syphilis", "correct": true},
      {"text": "Tertiary syphilis", "correct": false},
      {"text": "Congenital syphilis", "correct": false},
      {"text": "Latent syphilis", "correct": false}
    ],
    "explanation": "Patients infected through blood transfusion often present initially with secondary syphilis."
  },
// 51
  {
    "question": "Secondary syphilis develops due to:",
    "answers": [
      {"text": "Local toxin production", "correct": false},
      {"text": "Hematogenous spread of spirochetes", "correct": true},
      {"text": "Fungal superinfection", "correct": false},
      {"text": "Autoimmune mechanisms", "correct": false},
      {"text": "Allergic hypersensitivity", "correct": false}
    ],
    "explanation": "Secondary syphilis results from hematogenous dissemination of Treponema pallidum."
  },
// 52
  {
    "question": "Common systemic features of secondary syphilis include:",
    "answers": [
      {"text": "Hypertension and edema", "correct": false},
      {"text": "Fever and flulike symptoms", "correct": true},
      {"text": "Severe abdominal pain", "correct": false},
      {"text": "Hematemesis", "correct": false},
      {"text": "Visual hallucinations", "correct": false}
    ],
    "explanation": "Secondary syphilis commonly presents with fever and flu-like symptoms."
  },
// 53
  {
    "question": "Oral lesions in secondary syphilis most commonly present as:",
    "answers": [
      {"text": "Deep necrotic ulcers", "correct": false},
      {"text": "Vesicular eruptions", "correct": false},
      {"text": "Mucoid exudate–covered mucous patches", "correct": true},
      {"text": "Keratotic plaques", "correct": false},
      {"text": "Pigmented macules", "correct": false}
    ],
    "explanation": "Oral lesions in secondary syphilis often appear as mucous patches covered with mucoid exudate."
  },
// 54
  {
    "question": "Split papules in secondary syphilis are typically found at the:",
    "answers": [
      {"text": "Hard palate", "correct": false},
      {"text": "Floor of mouth", "correct": false},
      {"text": "Labial commissures", "correct": true},
      {"text": "Gingival margin", "correct": false},
      {"text": "Retromolar pad", "correct": false}
    ],
    "explanation": "Split papules are characteristic lesions found at the labial commissures in secondary syphilis."
  },
// 55
  {
    "question": "Deep fissures in secondary syphilis are commonly seen on the:",
    "answers": [
      {"text": "Dorsal tongue", "correct": false},
      {"text": "Lateral tongue", "correct": true},
      {"text": "Soft palate", "correct": false},
      {"text": "Uvula", "correct": false},
      {"text": "Lower lip", "correct": false}
    ],
    "explanation": "Deep fissures are commonly observed on the lateral borders of the tongue in secondary syphilis."
  },
// 56
  {
    "question": "Broad-based verrucous plaques seen in secondary syphilis are called:",
    "answers": [
      {"text": "Chancres", "correct": false},
      {"text": "Gummas", "correct": false},
      {"text": "Condylomata lata", "correct": true},
      {"text": "Leukoplakia", "correct": false},
      {"text": "Papillomas", "correct": false}
    ],
    "explanation": "Condylomata lata are broad-based verrucous plaques characteristic of secondary syphilis."
  },
// 57
  {
    "question": "Approximately what proportion of untreated patients progress to tertiary syphilis?",
    "answers": [
      {"text": "One tenth", "correct": false},
      {"text": "One fifth", "correct": false},
      {"text": "One third", "correct": true},
      {"text": "One half", "correct": false},
      {"text": "Two thirds", "correct": false}
    ],
    "explanation": "About one third of untreated syphilis patients progress to tertiary disease."
  },
// 58
  {
    "question": "Tertiary syphilis may involve all EXCEPT:",
    "answers": [
      {"text": "Central nervous system", "correct": false},
      {"text": "Cardiovascular system", "correct": false},
      {"text": "Liver cirrhosis exclusively", "correct": true},
      {"text": "Focal necrotic inflammatory lesions", "correct": false},
      {"text": "Multiple organ systems", "correct": false}
    ],
    "explanation": "Tertiary syphilis involves multiple organ systems but does not cause liver cirrhosis exclusively."
  },
// 59
  {
    "question": "Focal granulomatous destructive lesions in tertiary syphilis are termed:",
    "answers": [
      {"text": "Chancres", "correct": false},
      {"text": "Papules", "correct": false},
      {"text": "Gummas", "correct": true},
      {"text": "Vesicles", "correct": false},
      {"text": "Macules", "correct": false}
    ],
    "explanation": "Gummas are granulomatous lesions characteristic of tertiary syphilis."
  },
// 60
  {
    "question": "Intraoral gummas most commonly affect the:",
    "answers": [
      {"text": "Tongue", "correct": false},
      {"text": "Gingiva", "correct": false},
      {"text": "Palate", "correct": true},
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Lip", "correct": false}
    ],
    "explanation": "The palate is the most common intraoral site for gummatous lesions."
  },
// 61
  {
    "question": "Palatal involvement by tertiary syphilis may lead to:",
    "answers": [
      {"text": "Trismus", "correct": false},
      {"text": "Palatal perforation", "correct": true},
      {"text": "Macroglossia", "correct": false},
      {"text": "Gingival recession", "correct": false},
      {"text": "Dental ankylosis", "correct": false}
    ],
    "explanation": "Tertiary syphilis can cause palatal perforation due to tissue destruction."
  },
// 62
  {
    "question": "Neural syphilis may manifest as all EXCEPT:",
    "answers": [
      {"text": "General paresis", "correct": false},
      {"text": "Tabes dorsalis", "correct": false},
      {"text": "Locomotor ataxia", "correct": false},
      {"text": "Peripheral neuropathy only", "correct": true},
      {"text": "Paralysis", "correct": false}
    ],
    "explanation": "Neurosyphilis involves central nervous system manifestations; peripheral neuropathy alone is not typical."
  },
// 63
  {
    "question": "Cardiovascular involvement in tertiary syphilis most commonly affects the:",
    "answers": [
      {"text": "Coronary arteries", "correct": false},
      {"text": "Pulmonary artery", "correct": false},
      {"text": "Aorta", "correct": true},
      {"text": "Portal vein", "correct": false},
      {"text": "Carotid bifurcation", "correct": false}
    ],
    "explanation": "The aorta is the most commonly affected vessel in cardiovascular syphilis."
  },
// 64
  {
    "question": "Congenital syphilis results from:",
    "answers": [
      {"text": "Postnatal infection", "correct": false},
      {"text": "Breast milk transmission", "correct": false},
      {"text": "Placental transmission during pregnancy", "correct": true},
      {"text": "Salivary transmission", "correct": false},
      {"text": "Airborne spread", "correct": false}
    ],
    "explanation": "Congenital syphilis occurs via transplacental transmission from mother to fetus."
  },
// 65
  {
    "question": "A nasal deformity characterized by collapse of the bridge is known as:",
    "answers": [
      {"text": "Roman nose", "correct": false},
      {"text": "Button nose", "correct": false},
      {"text": "Saddle nose", "correct": true},
      {"text": "Hooked nose", "correct": false},
      {"text": "Cleft nose", "correct": false}
    ],
    "explanation": "Saddle nose deformity is a classic feature of congenital syphilis."
  },
// 66
  {
    "question": "Excessive anterior bowing of the tibia in congenital syphilis is termed:",
    "answers": [
      {"text": "Paget leg", "correct": false},
      {"text": "Saber shin", "correct": true},
      {"text": "Clubfoot", "correct": false},
      {"text": "Genu valgum", "correct": false},
      {"text": "Coxa vara", "correct": false}
    ],
    "explanation": "Saber shin refers to anterior bowing of the tibia seen in congenital syphilis."
  },
// 67
  {
    "question": "Higoumenakis’ sign refers to:",
    "answers": [
      {"text": "Bilateral mandibular enlargement", "correct": false},
      {"text": "Unilateral clavicular enlargement", "correct": true},
      {"text": "Frontal bone bossing", "correct": false},
      {"text": "Nasal septum deviation", "correct": false},
      {"text": "Maxillary hypoplasia", "correct": false}
    ],
    "explanation": "Higoumenakis’ sign is unilateral enlargement of the clavicle in congenital syphilis."
  },
// 68
  {
    "question": "Hutchinson’s triad includes all EXCEPT:",
    "answers": [
      {"text": "Interstitial keratitis", "correct": false},
      {"text": "Eighth-nerve deafness", "correct": false},
      {"text": "Notched incisors", "correct": false},
      {"text": "Mulberry molars", "correct": false},
      {"text": "Cleft palate", "correct": true}
    ],
    "explanation": "Hutchinson’s triad includes interstitial keratitis, eighth-nerve deafness, and dental abnormalities but not cleft palate."
  },
// 69
  {
    "question": "Dental abnormalities in congenital syphilis occur due to infection of the:",
    "answers": [
      {"text": "Dental pulp", "correct": false},
      {"text": "Cementoblasts", "correct": false},
      {"text": "Enamel organ during amelogenesis", "correct": true},
      {"text": "Periodontal ligament", "correct": false},
      {"text": "Odontoclasts", "correct": false}
    ],
    "explanation": "Infection of the enamel organ during tooth development leads to characteristic dental abnormalities."
  },
// 70
  {
    "question": "The fundamental histopathologic vascular change in syphilis is:",
    "answers": [
      {"text": "Thrombosis", "correct": false},
      {"text": "Atherosclerosis", "correct": false},
      {"text": "Proliferative endarteritis", "correct": true},
      {"text": "Vasculitis with fibrinoid necrosis", "correct": false},
      {"text": "Capillary hemangioma", "correct": false}
    ],
    "explanation": "Proliferative endarteritis is the hallmark vascular lesion in syphilis."
  },
// 71
  {
    "question": "The predominant inflammatory cells in syphilitic lesions are:",
    "answers": [
      {"text": "Neutrophils", "correct": false},
      {"text": "Eosinophils", "correct": false},
      {"text": "Plasma cells", "correct": true},
      {"text": "Mast cells", "correct": false},
      {"text": "Basophils", "correct": false}
    ],
    "explanation": "Plasma cells predominate in the inflammatory infiltrate of syphilitic lesions."
  },
// 72
  {
    "question": "Detection of T. pallidum in tissue is best performed using:",
    "answers": [
      {"text": "Gram stain", "correct": false},
      {"text": "PAS stain", "correct": false},
      {"text": "Immunohistochemistry", "correct": true},
      {"text": "Acid-fast stain", "correct": false},
      {"text": "Wright stain", "correct": false}
    ],
    "explanation": "Immunohistochemistry is the preferred method for detecting Treponema pallidum in tissue."
  },
// 73
  {
    "question": "Gummas histologically resemble granulomatous lesions seen in:",
    "answers": [
      {"text": "Candidiasis", "correct": false},
      {"text": "Tuberculosis", "correct": true},
      {"text": "Herpes infection", "correct": false},
      {"text": "Actinomycosis", "correct": false},
      {"text": "Syphilitic chancre", "correct": false}
    ],
    "explanation": "Gummas are granulomatous lesions similar to those seen in tuberculosis."
  },
// 74
  {
    "question": "Syphilis is referred to as the “great imitator” because it:",
    "answers": [
      {"text": "Rapidly mutates", "correct": false},
      {"text": "Is difficult to culture", "correct": false},
      {"text": "Mimics many unrelated diseases", "correct": true},
      {"text": "Has multiple strains", "correct": false},
      {"text": "Relapses frequently", "correct": false}
    ],
    "explanation": "Syphilis is called the great imitator because its clinical manifestations mimic many other diseases."
  },
// 75
  {
    "question": "Definitive diagnosis of syphilis relies on:",
    "answers": [
      {"text": "Clinical appearance alone", "correct": false},
      {"text": "Radiographic findings", "correct": false},
      {"text": "Laboratory confirmation", "correct": true},
      {"text": "Therapeutic response", "correct": false},
      {"text": "Family history", "correct": false}
    ],
    "explanation": "Laboratory tests are essential for definitive diagnosis of syphilis."
  },
// 76
  {
    "question": "Direct visualization of spirochetes from lesions is done by:",
    "answers": [
      {"text": "Light microscopy", "correct": false},
      {"text": "Fluorescence microscopy only", "correct": false},
      {"text": "Darkfield examination", "correct": true},
      {"text": "Electron microscopy", "correct": false},
      {"text": "Confocal microscopy", "correct": false}
    ],
    "explanation": "Darkfield microscopy is used to directly visualize Treponema pallidum from lesions."
  },
// 77
  {
    "question": "Which is a non-treponemal serologic test?",
    "answers": [
      {"text": "FTA-ABS", "correct": false},
      {"text": "ELISA", "correct": false},
      {"text": "VDRL", "correct": true},
      {"text": "Immunoblot", "correct": false},
      {"text": "PCR", "correct": false}
    ],
    "explanation": "VDRL is a non-treponemal test used for syphilis screening."
  },
// 78
  {
    "question": "Which serologic test has greater specificity for T. pallidum?",
    "answers": [
      {"text": "VDRL", "correct": false},
      {"text": "RPR", "correct": false},
      {"text": "ELISA", "correct": false},
      {"text": "Fluorescent treponemal antibody absorption test", "correct": true},
      {"text": "Complement fixation test", "correct": false}
    ],
    "explanation": "The fluorescent treponemal antibody absorption (FTA-ABS) test has higher specificity for syphilis."
  },
// 79
  {
    "question": "The drug of choice for all stages of syphilis is:",
    "answers": [
      {"text": "Azithromycin", "correct": false},
      {"text": "Doxycycline", "correct": false},
      {"text": "Penicillin", "correct": true},
      {"text": "Tetracycline", "correct": false},
      {"text": "Erythromycin", "correct": false}
    ],
    "explanation": "Penicillin remains the drug of choice for treating syphilis at all stages."
  },
// 80
  {
    "question": "An alternative single-dose oral treatment for syphilis is:",
    "answers": [
      {"text": "Ciprofloxacin", "correct": false},
      {"text": "Metronidazole", "correct": false},
      {"text": "Azithromycin", "correct": true},
      {"text": "Amoxicillin", "correct": false},
      {"text": "Clindamycin", "correct": false}
    ],
    "explanation": "Azithromycin is an alternative single-dose oral treatment option for syphilis."
  },
//=================================
// ULCERATIVE LESSION - GONORRHEA
// ================================
// 81
  {
    "question": "Gonorrhea is caused by which microorganism?",
    "answers": [
      {"text": "Treponema pallidum", "correct": false},
      {"text": "Chlamydia trachomatis", "correct": false},
      {"text": "Neisseria meningitidis", "correct": false},
      {"text": "Neisseria gonorrhoeae", "correct": true},
      {"text": "Haemophilus influenzae", "correct": false}
    ],
    "explanation": "Gonorrhea is caused by the bacterium Neisseria gonorrhoeae."
  },
// 82
  {
    "question": "Neisseria gonorrhoeae is best described as a:",
    "answers": [
      {"text": "Gram-positive coccus", "correct": false},
      {"text": "Gram-negative diplococcus", "correct": true},
      {"text": "Gram-positive bacillus", "correct": false},
      {"text": "Acid-fast bacillus", "correct": false},
      {"text": "Spirochete bacterium", "correct": false}
    ],
    "explanation": "Neisseria gonorrhoeae is a gram-negative diplococcus bacterium."
  },
// 83
  {
    "question": "Gonorrhea primarily infects which type of epithelium?",
    "answers": [
      {"text": "Stratified squamous epithelium", "correct": false},
      {"text": "Keratinized epithelium", "correct": false},
      {"text": "Columnar epithelium", "correct": true},
      {"text": "Transitional epithelium", "correct": false},
      {"text": "Pseudostratified ciliated epithelium", "correct": false}
    ],
    "explanation": "Gonorrhea primarily infects columnar epithelium found in mucosal surfaces."
  },
// 84
  {
    "question": "Common sites of gonorrheal infection include all EXCEPT:",
    "answers": [
      {"text": "Lower genital tract", "correct": false},
      {"text": "Rectum", "correct": false},
      {"text": "Pharynx", "correct": false},
      {"text": "Eyes", "correct": false},
      {"text": "Liver", "correct": true}
    ],
    "explanation": "The liver is not a common site of gonorrheal infection."
  },
// 85
  {
    "question": "Gonorrhea is most commonly transmitted through:",
    "answers": [
      {"text": "Aerosol inhalation", "correct": false},
      {"text": "Contaminated food", "correct": false},
      {"text": "Direct sexual contact", "correct": true},
      {"text": "Insect vectors", "correct": false},
      {"text": "Casual contact", "correct": false}
    ],
    "explanation": "Gonorrhea is primarily transmitted through direct sexual contact."
  },
// 86
  {
    "question": "The incubation period of gonorrhea is typically:",
    "answers": [
      {"text": "Less than 7 days", "correct": true},
      {"text": "2–3 weeks", "correct": false},
      {"text": "1–2 months", "correct": false},
      {"text": "3–6 months", "correct": false},
      {"text": "More than 1 year", "correct": false}
    ],
    "explanation": "The incubation period of gonorrhea is usually less than 7 days."
  },
// 87
  {
    "question": "Contact tracing in gonorrhea is facilitated by its short incubation period but hindered by:",
    "answers": [
      {"text": "Rapid bacterial mutation", "correct": false},
      {"text": "High mortality", "correct": false},
      {"text": "Lack of effective tests", "correct": false},
      {"text": "Absence of symptoms in many individuals", "correct": true},
      {"text": "Long latency period", "correct": false}
    ],
    "explanation": "Many individuals with gonorrhea are asymptomatic, hindering contact tracing."
  },
// 88
  {
    "question": "Asymptomatic infection of gonorrhea is especially common in:",
    "answers": [
      {"text": "Children", "correct": false},
      {"text": "Elderly males", "correct": false},
      {"text": "Immunocompromised patients only", "correct": false},
      {"text": "Females", "correct": true},
      {"text": "Healthcare workers", "correct": false}
    ],
    "explanation": "Asymptomatic gonorrhea infection is particularly common in females."
  },
// 89
  {
    "question": "Genital gonorrheal infections may spread to oral tissues through:",
    "answers": [
      {"text": "Hematogenous spread", "correct": false},
      {"text": "Airborne transmission", "correct": false},
      {"text": "Orogenital contact", "correct": true},
      {"text": "Contaminated water", "correct": false},
      {"text": "Fomite transmission", "correct": false}
    ],
    "explanation": "Orogenital contact can spread gonorrhea from genital to oral tissues."
  },
// 90
  {
    "question": "The mucosa most likely to be infected by gonorrhea is the:",
    "answers": [
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Gingiva", "correct": false},
      {"text": "Pharyngeal mucosa", "correct": true},
      {"text": "Hard palate", "correct": false},
      {"text": "Dorsal tongue", "correct": false}
    ],
    "explanation": "Pharyngeal mucosa is the most commonly infected oral site in gonorrhea."
  },
// 91
  {
    "question": "Pharyngeal mucosa is more susceptible to infection because it:",
    "answers": [
      {"text": "Is highly keratinized", "correct": false},
      {"text": "Has abundant salivary protection", "correct": false},
      {"text": "Is more resistant to trauma", "correct": false},
      {"text": "Has epithelium less resistant to trauma", "correct": true},
      {"text": "Contains more immune cells", "correct": false}
    ],
    "explanation": "Pharyngeal mucosa is less keratinized and more susceptible to trauma, making it more vulnerable to infection."
  },
// 92
  {
    "question": "The chief complaint in pharyngeal gonorrhea is:",
    "answers": [
      {"text": "Severe oral bleeding", "correct": false},
      {"text": "Burning tongue", "correct": false},
      {"text": "Pharyngitis", "correct": true},
      {"text": "Halitosis", "correct": false},
      {"text": "Dysgeusia", "correct": false}
    ],
    "explanation": "Pharyngitis, or sore throat, is the main symptom of pharyngeal gonorrhea."
  },
// 93
  {
    "question": "Transmission of gonorrhea to dental personnel is considered:",
    "answers": [
      {"text": "Highly common", "correct": false},
      {"text": "Moderately frequent", "correct": false},
      {"text": "Highly unlikely", "correct": true},
      {"text": "Inevitable", "correct": false},
      {"text": "Seasonal", "correct": false}
    ],
    "explanation": "Transmission of gonorrhea to dental personnel is highly unlikely due to effective infection control."
  },
// 94
  {
    "question": "The low risk of transmission of gonorrhea in dental settings is primarily because the organism:",
    "answers": [
      {"text": "Is resistant to disinfectants", "correct": false},
      {"text": "Requires anaerobic conditions", "correct": false},
      {"text": "Is very sensitive to drying", "correct": true},
      {"text": "Survives long on surfaces", "correct": false},
      {"text": "Cannot infect mucosa", "correct": false}
    ],
    "explanation": "Neisseria gonorrhoeae is sensitive to drying, reducing its survival outside the host."
  },
// 95
  {
    "question": "Establishment of gonorrheal infection requires:",
    "answers": [
      {"text": "High fever", "correct": false},
      {"text": "Immune suppression", "correct": false},
      {"text": "A break in skin or mucosa", "correct": true},
      {"text": "Blood transfusion", "correct": false},
      {"text": "Genetic susceptibility", "correct": false}
    ],
    "explanation": "A break in the skin or mucosa facilitates gonorrheal infection."
  },
// 96
  {
    "question": "Adequate protection for dental personnel from infection includes all EXCEPT:",
    "answers": [
      {"text": "Gloves", "correct": false},
      {"text": "Protective eyewear", "correct": false},
      {"text": "Face mask", "correct": false},
      {"text": "Lead apron", "correct": true},
      {"text": "Barrier precautions", "correct": false}
    ],
    "explanation": "Lead aprons are not necessary for protection against gonorrhea transmission."
  },
// 97
  {
    "question": "Oral gonorrhea is difficult to diagnose clinically because:",
    "answers": [
      {"text": "It is always painless", "correct": false},
      {"text": "It has excessive bleeding", "correct": false},
      {"text": "It lacks consistent specific clinical signs", "correct": true},
      {"text": "It always forms vesicles", "correct": false},
      {"text": "It produces heavy pus discharge", "correct": false}
    ],
    "explanation": "Oral gonorrhea lacks consistent specific clinical signs, making diagnosis challenging."
  },
// 98
  {
    "question": "Pharyngeal gonococcal infection commonly presents with:",
    "answers": [
      {"text": "White keratotic plaques", "correct": false},
      {"text": "General erythema with ulcers", "correct": true},
      {"text": "Pigmented lesions", "correct": false},
      {"text": "Papillomatous growths", "correct": false},
      {"text": "Necrotic bone exposure", "correct": false}
    ],
    "explanation": "Pharyngeal gonorrhea often presents as general erythema with ulcerations."
  },
// 99
  {
    "question": "Lymph node involvement in pharyngeal gonorrhea typically affects the:",
    "answers": [
      {"text": "Submental nodes", "correct": false},
      {"text": "Preauricular nodes", "correct": false},
      {"text": "Cervical lymph nodes", "correct": true},
      {"text": "Axillary nodes", "correct": false},
      {"text": "Inguinal nodes", "correct": false}
    ],
    "explanation": "Cervical lymph nodes are commonly involved in pharyngeal gonorrhea."
  },
// 100
  {
    "question": "Differential diagnosis of oral gonorrhea should include all EXCEPT:",
    "answers": [
      {"text": "Aphthous ulcers", "correct": false},
      {"text": "Herpetic ulcers", "correct": false},
      {"text": "Erythema multiforme", "correct": false},
      {"text": "Pemphigus", "correct": false},
      {"text": "Leukoplakia", "correct": true}
    ],
    "explanation": "Leukoplakia is not typically considered in the differential diagnosis of oral gonorrhea."
  },
// 101
  {
    "question": "Which autoimmune blistering disease should be considered in the differential diagnosis with gonorrhea?",
    "answers": [
      {"text": "Lichen planus", "correct": false},
      {"text": "Pemphigus", "correct": true},
      {"text": "Candidiasis", "correct": false},
      {"text": "Actinomycosis", "correct": false},
      {"text": "Tuberculosis", "correct": false}
    ],
    "explanation": "Pemphigus is an autoimmune blistering disease that can mimic oral gonorrhea lesions."
  },
// 102
  {
    "question": "Streptococcal infection is included in the differential diagnosis of gonorrhea because it may present with:",
    "answers": [
      {"text": "Vesicles only", "correct": false},
      {"text": "Multiple ulcers or erythema", "correct": true},
      {"text": "Pigmented nodules", "correct": false},
      {"text": "Salivary gland enlargement", "correct": false},
      {"text": "Bone necrosis", "correct": false}
    ],
    "explanation": "Streptococcal infections can present with multiple ulcers or erythema similar to gonorrhea."
  },
// 103
  {
    "question": "Traditional laboratory diagnosis of gonorrhea includes:",
    "answers": [
      {"text": "Acid-fast staining", "correct": false},
      {"text": "Gram staining", "correct": true},
      {"text": "PAS staining", "correct": false},
      {"text": "India ink preparation", "correct": false},
      {"text": "Wright staining", "correct": false}
    ],
    "explanation": "Gram staining is a traditional method for diagnosing gonorrhea."
  },
// 104 
  {
    "question": "The culture medium classically used for diagnosis of gonorrhea is:",
    "answers": [
      {"text": "Blood agar", "correct": false},
      {"text": "MacConkey agar", "correct": false},
      {"text": "Sabouraud agar", "correct": false},
      {"text": "Thayer-Martin medium", "correct": true},
      {"text": "Chocolate agar", "correct": false}
    ],
    "explanation": "Thayer-Martin medium is the selective culture medium used for Neisseria gonorrhoeae."
  },
// 105
  {
    "question": "Rapid identification of the organism in gonorrhea can be achieved using:",
    "answers": [
      {"text": "ELISA only", "correct": false},
      {"text": "PCR only", "correct": false},
      {"text": "Immunofluorescent antibody techniques", "correct": true},
      {"text": "Darkfield microscopy", "correct": false},
      {"text": "Silver staining", "correct": false}
    ],
    "explanation": "Immunofluorescent antibody techniques allow rapid identification of Neisseria gonorrhoeae."
  },
// 106
  {
    "question": "In Western countries, gonorrheal infections are generally susceptible to:",
    "answers": [
      {"text": "Tetracyclines only", "correct": false},
      {"text": "Macrolides only", "correct": false},
      {"text": "Penicillins", "correct": true},
      {"text": "Antifungals", "correct": false},
      {"text": "Antivirals", "correct": false}
    ],
    "explanation": "Penicillins remain effective against gonorrhea in many Western countries."
  },
// 107
  {
    "question": "Effective treatment of gonorrhea in susceptible regions includes a single parenteral dose of:",
    "answers": [
      {"text": "Amoxicillin", "correct": false},
      {"text": "Ampicillin", "correct": true},
      {"text": "Penicillin V", "correct": false},
      {"text": "Cefalexin", "correct": false},
      {"text": "Doxycycline", "correct": false}
    ],
    "explanation": "A single parenteral dose of ampicillin is effective treatment in susceptible regions."
  },
// 108
  {
    "question": "The recommended parenteral dose range of ampicillin for gonorrhea is:",
    "answers": [
      {"text": "100–250 mg", "correct": false},
      {"text": "500–750 mg", "correct": false},
      {"text": "1.0–1.5 g", "correct": true},
      {"text": "2.0–3.5 g", "correct": false},
      {"text": "5–10 g", "correct": false}
    ],    "explanation": "The recommended parenteral dose of ampicillin for gonorrhea is 1.0–1.5 g."
  },
// 109
  {
    "question": "In parts of the Far East and Africa, resistance to penicillins may reach:",
    "answers": [
      {"text": "10%", "correct": false},
      {"text": "20%", "correct": false},
      {"text": "30%", "correct": false},
      {"text": "40%", "correct": false},
      {"text": "Up to 50%", "correct": true}
    ],
    "explanation": "Penicillin resistance in gonorrhea can reach up to 50% in some regions."
  },
// 110
  {
    "question": "Penicillin-resistant gonorrhea in the Far East and Africa can be treated with a single dose of:",
    "answers": [
      {"text": "Azithromycin", "correct": false},
      {"text": "Ciprofloxacin", "correct": true},
      {"text": "Erythromycin", "correct": false},
      {"text": "Tetracycline", "correct": false},
      {"text": "Gentamicin", "correct": false}
    ],
    "explanation": "Ciprofloxacin is used to treat penicillin-resistant gonorrhea in some regions."
  },
// ===================================
// ULCERATIVE LESIONS - TUBERCULOSIS
//====================================
// 111
  {
    "question": "Tuberculosis is caused by which microorganism?",
    "answers": [
      {"text": "Treponema pallidum", "correct": false},
      {"text": "Mycobacterium leprae", "correct": false},
      {"text": "Mycobacterium tuberculosis", "correct": true},
      {"text": "Actinomyces israelii", "correct": false},
      {"text": "Nocardia asteroides", "correct": false}
    ],
    "explanation": "Tuberculosis is caused by the bacterium Mycobacterium tuberculosis."
  },
// 112
  {
    "question": "Mycobacterium tuberculosis is best described as:",
    "answers": [
      {"text": "Anaerobic spore-forming bacillus", "correct": false},
      {"text": "Aerobic non–spore-forming bacillus", "correct": true},
      {"text": "Gram-positive diplococcus", "correct": false},
      {"text": "Acid-labile coccus", "correct": false},
      {"text": "Facultative intracellular parasite", "correct": false}
    ],
    "explanation": "Mycobacterium tuberculosis is an aerobic, non-spore-forming bacillus."
  },
// 113
  {
    "question": "The organism responsible for TB does not react with Gram stain because it has a:",
    "answers": [
      {"text": "Protein capsule", "correct": false},
      {"text": "Thick peptidoglycan layer", "correct": false},
      {"text": "Lipopolysaccharide envelope", "correct": false},
      {"text": "Thick waxy coat", "correct": true},
      {"text": "Flagellar sheath", "correct": false}
    ],
    "explanation": "Mycobacterium tuberculosis has a thick waxy coat (mycolic acid) that prevents Gram stain uptake."
  },
// 114
  {
    "question": "Tubercle bacilli retain red dyes when stained using:",
    "answers": [
      {"text": "Gram and PAS stains", "correct": false},
      {"text": "Wright and Giemsa stains", "correct": false},
      {"text": "Ziehl-Neelsen and Fite techniques", "correct": true},
      {"text": "Silver and trichrome stains", "correct": false},
      {"text": "India ink preparation", "correct": false}
    ],
    "explanation": "Ziehl-Neelsen and Fite staining are acid-fast techniques used to identify tubercle bacilli."
  },
// 115
  {
    "question": "Mycobacteria are termed acid-fast bacilli because they:",
    "answers": [
      {"text": "Grow only in acidic environments", "correct": false},
      {"text": "Produce acidic metabolites", "correct": false},
      {"text": "Do not decolorize with acid-alcohol", "correct": true},
      {"text": "Require acid for staining", "correct": false},
      {"text": "Survive gastric acidity", "correct": false}
    ],
    "explanation": "Mycobacteria retain the red dye during acid-alcohol decolorization, hence termed acid-fast."
  },
// 116
  {
    "question": "Transmission of pulmonary TB most commonly occurs through:",
    "answers": [
      {"text": "Contaminated food", "correct": false},
      {"text": "Blood transfusion", "correct": false},
      {"text": "Insect vectors", "correct": false},
      {"text": "Airborne droplets", "correct": true},
      {"text": "Direct skin contact", "correct": false}
    ],
    "explanation": "Pulmonary TB is primarily transmitted via airborne droplets."
  },
// 117
  {
    "question": "Mycobacterium bovis is primarily associated with:",
    "answers": [
      {"text": "Human airborne infection", "correct": false},
      {"text": "Waterborne outbreaks", "correct": false},
      {"text": "Disease in cows transmitted via infected milk", "correct": true},
      {"text": "Soil contamination", "correct": false},
      {"text": "Nosocomial infections", "correct": false}
    ],
    "explanation": "M. bovis causes disease in cattle and can infect humans through contaminated milk."
  },
// 118
  {
    "question": "Infection with M. bovis in humans most commonly produces:",
    "answers": [
      {"text": "Pulmonary cavitation", "correct": false},
      {"text": "Cutaneous nodules", "correct": false},
      {"text": "Intestinal or tonsillar lesions", "correct": true},
      {"text": "Renal abscesses", "correct": false},
      {"text": "Cardiac vegetations", "correct": false}
    ],
    "explanation": "M. bovis infection in humans often causes intestinal or tonsillar lesions."
  },
// 119
  {
    "question": "Mycobacterium avium and Mycobacterium intracellulare typically cause disease in:",
    "answers": [
      {"text": "Healthy young adults", "correct": false},
      {"text": "Vaccinated children", "correct": false},
      {"text": "Immunocompromised individuals", "correct": true},
      {"text": "Pregnant women", "correct": false},
      {"text": "Elderly smokers only", "correct": false}
    ],
    "explanation": "M. avium and M. intracellulare cause disease mainly in immunocompromised patients."
  },
// 120
  {
    "question": "Initial host defense against inhaled M. tuberculosis involves:",
    "answers": [
      {"text": "Neutrophil degranulation", "correct": false},
      {"text": "Complement activation", "correct": false},
      {"text": "Phagocytosis by alveolar macrophages", "correct": true},
      {"text": "Antibody neutralization", "correct": false},
      {"text": "Mast cell degranulation", "correct": false}
    ],
    "explanation": "Alveolar macrophages phagocytose inhaled M. tuberculosis as the initial defense."
  },
// 121
  {
    "question": "Sensitization to mycobacterial antigens results in development of:",
    "answers": [
      {"text": "Anaphylaxis", "correct": false},
      {"text": "Positive tuberculin reactivity", "correct": true},
      {"text": "Autoimmune disease", "correct": false},
      {"text": "Immediate hypersensitivity", "correct": false},
      {"text": "Immune tolerance", "correct": false}
    ],
    "explanation": "Sensitization leads to a positive tuberculin skin test indicating prior exposure."
  },
// 122
  {
    "question": "The Mantoux and tine tests use which antigen?",
    "answers": [
      {"text": "Lipopolysaccharide", "correct": false},
      {"text": "Tuberculin toxin", "correct": false},
      {"text": "Purified protein derivative", "correct": true},
      {"text": "Capsular polysaccharide", "correct": false},
      {"text": "Mycolic acid extract", "correct": false}
    ],
    "explanation": "The Mantoux and tine tests use purified protein derivative (PPD) antigen."
  },
// 123
  {
    "question": "A positive tuberculin skin test indicates:",
    "answers": [
      {"text": "Active pulmonary disease", "correct": false},
      {"text": "Immediate infectivity", "correct": false},
      {"text": "Prior exposure and subclinical infection", "correct": true},
      {"text": "Drug-resistant TB", "correct": false},
      {"text": "Vaccine failure", "correct": false}
    ],
    "explanation": "A positive test indicates prior exposure or latent infection, not necessarily active disease."
  },
// 124
  {
    "question": "Arrest of TB infection is primarily mediated by:",
    "answers": [
      {"text": "Humoral immunity", "correct": false},
      {"text": "Complement cascade", "correct": false},
      {"text": "Cell-mediated immune response", "correct": true},
      {"text": "Passive immunity", "correct": false},
      {"text": "Neutrophil activation", "correct": false}
    ],
    "explanation": "Cell-mediated immunity is crucial for controlling TB infection."
  },
// 125
  {
    "question": "Inflammatory foci in controlled TB may undergo:",
    "answers": [
      {"text": "Liquefactive necrosis", "correct": false},
      {"text": "Fat necrosis", "correct": false},
      {"text": "Dystrophic calcification", "correct": true},
      {"text": "Case hardening", "correct": false},
      {"text": "Amyloid deposition", "correct": false}
    ],
    "explanation": "Dystrophic calcification occurs in granulomas during controlled TB."
  },
// 126
  {
    "question": "Reactivation of TB occurs due to persistence of:",
    "answers": [
      {"text": "Viral particles", "correct": false},
      {"text": "Fungal spores", "correct": false},
      {"text": "Latent organisms", "correct": true},
      {"text": "Autoantibodies", "correct": false},
      {"text": "Immune complexes", "correct": false}
    ],
    "explanation": "Latent mycobacteria can reactivate causing active disease."
  },
// 127
  {
    "question": "Oral TB infection most commonly occurs via:",
    "answers": [
      {"text": "Direct airborne exposure", "correct": false},
      {"text": "Implantation from infected sputum", "correct": true},
      {"text": "Salivary gland infection", "correct": false},
      {"text": "Dental caries", "correct": false},
      {"text": "Lymphatic obstruction", "correct": false}
    ],
    "explanation": "Oral TB usually results from implantation of bacilli from infected sputum."
  },
// 128
  {
    "question": "The most favored intraoral sites for TB lesions are the:",
    "answers": [
      {"text": "Gingiva and lips", "correct": false},
      {"text": "Floor of mouth and uvula", "correct": false},
      {"text": "Tongue and palate", "correct": true},
      {"text": "Buccal mucosa and retromolar pad", "correct": false},
      {"text": "Tonsils and oropharynx only", "correct": false}
    ],
    "explanation": "The tongue and palate are common sites for oral TB lesions."
  },
// 129
  {
    "question": "The typical oral TB lesion is best described as:",
    "answers": [
      {"text": "Painless vesicle", "correct": false},
      {"text": "Indurated chronic painful nonhealing ulcer", "correct": true},
      {"text": "Pigmented macule", "correct": false},
      {"text": "Exophytic papillary mass", "correct": false},
      {"text": "Fluctuant abscess", "correct": false}
    ],
    "explanation": "Oral TB lesions are typically indurated, chronic, painful, and nonhealing ulcers."
  },
// 130
  {
    "question": "Tuberculous osteomyelitis of the jaws most commonly results from:",
    "answers": [
      {"text": "Direct mucosal invasion", "correct": false},
      {"text": "Dental infection spread", "correct": false},
      {"text": "Hematogenous dissemination", "correct": true},
      {"text": "Lymphatic obstruction", "correct": false},
      {"text": "Iatrogenic trauma", "correct": false}
    ],
    "explanation": "Hematogenous spread is the common cause of tuberculous osteomyelitis."
  },
// 131
  {
    "question": "The basic microscopic lesion of TB is:",
    "answers": [
      {"text": "Suppurative inflammation", "correct": false},
      {"text": "Granulomatous inflammation", "correct": true},
      {"text": "Fibrinoid necrosis", "correct": false},
      {"text": "Serous exudation", "correct": false},
      {"text": "Hyperkeratosis", "correct": false}
    ],
    "explanation": "Granulomatous inflammation is the hallmark microscopic lesion in TB."
  },
// 132
  {
    "question": "Granulomas in TB typically exhibit:",
    "answers": [
      {"text": "Fat necrosis", "correct": false},
      {"text": "Coagulative necrosis", "correct": false},
      {"text": "Caseous necrosis", "correct": true},
      {"text": "Liquefactive necrosis", "correct": false},
      {"text": "Gangrenous necrosis", "correct": false}
    ],
    "explanation": "Caseous necrosis is characteristic of TB granulomas."
  },
// 133
  {
    "question": "Macrophages in TB granulomas resemble epithelial cells and are termed:",
    "answers": [
      {"text": "Foam cells", "correct": false},
      {"text": "Giant cells", "correct": false},
      {"text": "Epithelioid cells", "correct": true},
      {"text": "Langerhans cells", "correct": false},
      {"text": "Histiocytes", "correct": false}
    ],
    "explanation": "Epithelioid cells are activated macrophages resembling epithelial cells in TB granulomas."
  },
// 134
  {
    "question": "Fusion of macrophages in TB leads to formation of:",
    "answers": [
      {"text": "Touton giant cells", "correct": false},
      {"text": "Foreign body giant cells", "correct": false},
      {"text": "Reed-Sternberg cells", "correct": false},
      {"text": "Langerhans giant cells", "correct": true},
      {"text": "Plasma cell aggregates", "correct": false}
    ],
    "explanation": "Langerhans giant cells are multinucleated cells formed by macrophage fusion in TB."
  },
// 135
  {
    "question": "Confirmation of acid-fast bacilli in tissue requires:",
    "answers": [
      {"text": "Gram staining", "correct": false},
      {"text": "PAS staining", "correct": false},
      {"text": "Ziehl-Neelsen or Fite staining", "correct": true},
      {"text": "Wright staining", "correct": false},
      {"text": "H&E staining only", "correct": false}
    ],
    "explanation": "Ziehl-Neelsen or Fite stains are used to identify acid-fast bacilli in tissue."
  },
// 136
  {
    "question": "Conditions that may mimic TB granulomas histologically include all EXCEPT:",
    "answers": [
      {"text": "Syphilis", "correct": false},
      {"text": "Histoplasmosis", "correct": false},
      {"text": "Sarcoidosis", "correct": false},
      {"text": "Squamous papilloma", "correct": true},
      {"text": "Blastomycosis", "correct": false}
    ],
    "explanation": "Squamous papilloma does not histologically mimic TB granulomas."
  },
// 137
  {
    "question": "Clinically, noninfectious conditions that may resemble TB include:",
    "answers": [
      {"text": "Aphthous ulcer", "correct": true},
      {"text": "Foreign body reaction", "correct": false},
      {"text": "Herpetic stomatitis", "correct": false},
      {"text": "Candidiasis", "correct": false},
      {"text": "Varicella", "correct": false}
    ],
    "explanation": "Aphthous ulcers can clinically resemble oral TB lesions."
  },
// 138
  {
    "question": "First-line anti-TB therapy commonly includes all EXCEPT:",
    "answers": [
      {"text": "Isoniazid", "correct": false},
      {"text": "Rifampin", "correct": false},
      {"text": "Pyrazinamide", "correct": false},
      {"text": "Ethambutol", "correct": false},
      {"text": "Acyclovir", "correct": true}
    ],
    "explanation": "Acyclovir is an antiviral and not used in TB treatment."
  },
// 139
  {
    "question": "Typical TB drug regimens last:",
    "answers": [
      {"text": "1–2 weeks", "correct": false},
      {"text": "1 month", "correct": false},
      {"text": "3 months", "correct": false},
      {"text": "6–12 months", "correct": true},
      {"text": "2–3 weeks", "correct": false}
    ],
    "explanation": "TB treatment typically lasts 6 to 12 months."
  },
// 140
  {
    "question": "Streptomycin is primarily reserved for:",
    "answers": [
      {"text": "Routine prophylaxis", "correct": false},
      {"text": "Mild TB cases", "correct": false},
      {"text": "Multidrug-resistant TB", "correct": true},
      {"text": "Pediatric vaccination", "correct": false},
      {"text": "Latent TB only", "correct": false}
    ],
    "explanation": "Streptomycin is used mainly for multidrug-resistant TB."
  },
// 141
  {
    "question": "Patients converting from negative to positive skin test may receive prophylaxis with:",
    "answers": [
      {"text": "Rifampin", "correct": false},
      {"text": "Ethambutol", "correct": false},
      {"text": "Isoniazid", "correct": true},
      {"text": "Pyrazinamide", "correct": false},
      {"text": "Ciprofloxacin", "correct": false}
    ],
    "explanation": "Isoniazid is used for prophylaxis in patients with new positive skin tests."
  },
// 142
  {
    "question": "Prophylactic chemotherapy for TB conversion is typically given for:",
    "answers": [
      {"text": "1 week", "correct": false},
      {"text": "1 month", "correct": false},
      {"text": "6 months", "correct": true},
      {"text": "1 year", "correct": false},
      {"text": "5 years", "correct": false}
    ],
    "explanation": "Prophylactic treatment is usually given for 6 months."
  },
// 143
  {
    "question": "Bacille Calmette-Guérin (BCG) vaccine is most effective in:",
    "answers": [
      {"text": "Adults", "correct": false},
      {"text": "Elderly patients", "correct": false},
      {"text": "Immunocompromised adults", "correct": false},
      {"text": "Childhood TB control", "correct": true},
      {"text": "Multidrug-resistant TB", "correct": false}
    ],
    "explanation": "BCG vaccine is most effective in preventing childhood tuberculosis."
  },
// ====================================
// ULCERATIVE LESION - LEPROSY
// ====================================
// 144
  {
    "question": "Leprosy is also known as:",
    "answers": [
      {"text": "Behçet disease", "correct": false},
      {"text": "Wegener granulomatosis", "correct": false},
      {"text": "Hansen disease", "correct": true},
      {"text": "Addison disease", "correct": false},
      {"text": "Kawasaki disease", "correct": false}
    ],
    "explanation": "Leprosy is also called Hansen disease, named after the bacteriologist who discovered the causative organism."
  },
// 145
  {
    "question": "Leprosy is caused by which organisms?",
    "answers": [
      {"text": "Treponema pallidum and Borrelia burgdorferi", "correct": false},
      {"text": "Mycobacterium tuberculosis and Mycobacterium bovis", "correct": false},
      {"text": "Mycobacterium leprae and Mycobacterium lepromatosis", "correct": true},
      {"text": "Actinomyces israelii and Nocardia asteroides", "correct": false},
      {"text": "Candida albicans and Aspergillus fumigatus", "correct": false}
    ],
    "explanation": "Leprosy is caused by Mycobacterium leprae and Mycobacterium lepromatosis."
  },
// 146
  {
    "question": "Mycobacterium leprae is classified as a(n):",
    "answers": [
      {"text": "Gram-positive coccus", "correct": false},
      {"text": "Acid-fast bacillus", "correct": true},
      {"text": "Spirochete bacterium", "correct": false},
      {"text": "Obligate anaerobe", "correct": false},
      {"text": "Encapsulated diplococcus", "correct": false}
    ],
    "explanation": "Mycobacterium leprae is an acid-fast bacillus."
  },
// 147
  {
    "question": "Leprosy is recognized as the most common cause of:",
    "answers": [
      {"text": "Chronic osteomyelitis", "correct": false},
      {"text": "Oral granulomas", "correct": false},
      {"text": "Peripheral neuritis", "correct": true},
      {"text": "Autoimmune neuropathy", "correct": false},
      {"text": "Cranial nerve palsy", "correct": false}
    ],
    "explanation": "Leprosy is the most common cause of peripheral neuritis."
  },
// 148
  {
    "question": "Transmission of leprosy generally requires:",
    "answers": [
      {"text": "Casual brief contact", "correct": false},
      {"text": "Vector-borne spread", "correct": false},
      {"text": "Frequent direct contact over a long period", "correct": true},
      {"text": "Foodborne exposure", "correct": false},
      {"text": "Water contamination", "correct": false}
    ],
    "explanation": "Leprosy transmission generally requires frequent, prolonged direct contact."
  },
// 149
  {
    "question": "The incubation period of leprosy may extend up to:",
    "answers": [
      {"text": "6 months", "correct": false},
      {"text": "1 year", "correct": false},
      {"text": "3 years", "correct": false},
      {"text": "5–12 years depending on disease form", "correct": true},
      {"text": "20 years in all forms", "correct": false}
    ],
    "explanation": "Leprosy incubation can range from 5 to 12 years depending on the form."
  },
// 150
  {
    "question": "The tuberculoid form of leprosy has an incubation period of up to:",
    "answers": [
      {"text": "1 year", "correct": false},
      {"text": "3 years", "correct": true},
      {"text": "5 years", "correct": false},
      {"text": "8 years", "correct": false},
      {"text": "12 years", "correct": false}
    ],
    "explanation": "The tuberculoid form typically has an incubation period up to 3 years."
  },
// 151
  {
    "question": "The lepromatous form of leprosy has an incubation period of up to:",
    "answers": [
      {"text": "2 years", "correct": false},
      {"text": "5 years", "correct": false},
      {"text": "8 years", "correct": false},
      {"text": "10 years", "correct": false},
      {"text": "12 years", "correct": true}
    ],
    "explanation": "The lepromatous form may have an incubation period up to 12 years."
  },
// 152
  {
    "question": "A potential route of leprosy transmission is through the:",
    "answers": [
      {"text": "Gastrointestinal tract", "correct": false},
      {"text": "Genitourinary tract", "correct": false},
      {"text": "Respiratory tract", "correct": true},
      {"text": "Conjunctival mucosa", "correct": false},
      {"text": "Blood transfusion", "correct": false}
    ],
    "explanation": "Leprosy is potentially transmitted via the respiratory tract."
  },
// 153
  {
    "question": "Oral lesions are most commonly seen in which form of leprosy?",
    "answers": [
      {"text": "Tuberculoid", "correct": false},
      {"text": "Indeterminate", "correct": false},
      {"text": "Borderline", "correct": false},
      {"text": "Lepromatous", "correct": true},
      {"text": "Neural", "correct": false}
    ],
    "explanation": "Oral lesions are most common in the lepromatous form."
  },
// 154
  {
    "question": "Oral involvement in leprosy occurs in approximately:",
    "answers": [
      {"text": "<5% of cases", "correct": false},
      {"text": "5–10% of cases", "correct": false},
      {"text": "10–20% of cases", "correct": false},
      {"text": "20–60% of cases", "correct": true},
      {"text": ">90% of cases", "correct": false}
    ],
    "explanation": "Oral involvement occurs in about 20–60% of leprosy cases."
  },
// 155
  {
    "question": "Typical oral lesions in leprosy present as:",
    "answers": [
      {"text": "Vesicular eruptions", "correct": false},
      {"text": "White keratotic plaques", "correct": false},
      {"text": "Multiple nodules that may necrose and ulcerate", "correct": true},
      {"text": "Pigmented macules", "correct": false},
      {"text": "Exophytic papillomas", "correct": false}
    ],
    "explanation": "Oral lesions typically appear as multiple nodules that may ulcerate."
  },
// 156
  {
    "question": "Healing of oral lesions in leprosy is often associated with:",
    "answers": [
      {"text": "Rapid epithelialization", "correct": false},
      {"text": "Hypertrophic scarring", "correct": false},
      {"text": "Slow healing with atrophic scarring", "correct": true},
      {"text": "Complete regeneration without scarring", "correct": false},
      {"text": "Keloid formation", "correct": false}
    ],
    "explanation": "Healing is slow and often results in atrophic scarring."
  },
// 157
  {
    "question": "The clinical spectrum of leprosy depends largely on:",
    "answers": [
      {"text": "Patient age", "correct": false},
      {"text": "Nutritional status", "correct": false},
      {"text": "Cell-mediated immune response", "correct": true},
      {"text": "Hormonal imbalance", "correct": false},
      {"text": "Bacterial strain mutation", "correct": false}
    ],
    "explanation": "The immune response, particularly cell-mediated immunity, determines the clinical form."
  },
// 158
  {
    "question": "Tuberculoid leprosy is most likely to occur in patients with:",
    "answers": [
      {"text": "Severe immune deficiency", "correct": false},
      {"text": "Poor nutritional status", "correct": false},
      {"text": "Well-functioning immune system", "correct": true},
      {"text": "Chronic viral infections", "correct": false},
      {"text": "Autoimmune disease", "correct": false}
    ],
    "explanation": "Tuberculoid leprosy occurs in patients with strong immune responses."
  },
// 159
  {
    "question": "Lepromatous leprosy is most commonly seen in individuals with:",
    "answers": [
      {"text": "Strong antibody response", "correct": false},
      {"text": "Reduced cell-mediated immunity", "correct": true},
      {"text": "Hyperactive complement system", "correct": false},
      {"text": "Excess neutrophil activity", "correct": false},
      {"text": "Elevated IgE levels", "correct": false}
    ],
    "explanation": "Lepromatous leprosy is associated with poor cell-mediated immunity."
  },
// 160
  {
    "question": "Immunocompromised patients with leprosy typically experience:",
    "answers": [
      {"text": "Mild self-limiting disease", "correct": false},
      {"text": "Localized lesions only", "correct": false},
      {"text": "A more seriously damaging disease course", "correct": true},
      {"text": "Exclusive oral involvement", "correct": false},
      {"text": "Rapid spontaneous remission", "correct": false}
    ],
    "explanation": "Immunocompromised patients often have more severe disease."
  },
// 161
  {
    "question": "Skin and peripheral nerves are commonly affected because the organism grows best at:",
    "answers": [
      {"text": "Temperatures above 40°C", "correct": false},
      {"text": "Core body temperature", "correct": false},
      {"text": "Temperatures below core body temperature", "correct": true},
      {"text": "Highly acidic environments", "correct": false},
      {"text": "High oxygen tension only", "correct": false}
    ],
    "explanation": "Mycobacterium leprae prefers cooler temperatures found in skin and peripheral nerves."
  },
// 162
  {
    "question": "Cutaneous lesions in leprosy commonly appear as:",
    "answers": [
      {"text": "Vesicles", "correct": false},
      {"text": "Bullae", "correct": false},
      {"text": "Erythematous plaques or nodules", "correct": true},
      {"text": "Pigmented nevi", "correct": false},
      {"text": "Ulcerated tumors", "correct": false}
    ],
    "explanation": "Skin lesions are typically erythematous plaques or nodules."
  },
// 163
  {
    "question": "Skin lesions represent a granulomatous response to the:",
    "answers": [
      {"text": "Viral cytopathic effect", "correct": false},
      {"text": "Fungal colonization", "correct": false},
      {"text": "Bacterial organism", "correct": true},
      {"text": "Autoimmune reaction", "correct": false},
      {"text": "Allergic hypersensitivity", "correct": false}
    ],
    "explanation": "Skin lesions are granulomatous inflammation in response to the bacteria."
  },
// 164
  {
    "question": "Histopathology of leprosy most commonly shows:",
    "answers": [
      {"text": "Suppurative inflammation", "correct": false},
      {"text": "Granulomatous inflammatory response", "correct": true},
      {"text": "Fibrinoid necrosis", "correct": false},
      {"text": "Hyperkeratosis", "correct": false},
      {"text": "Dysplastic epithelium", "correct": false}
    ],
    "explanation": "Leprosy lesions show granulomatous inflammation histologically."
  },
// 165
  {
    "question": "Predominant cells in leprosy granulomas include:",
    "answers": [
      {"text": "Neutrophils and plasma cells", "correct": false},
      {"text": "Eosinophils and mast cells", "correct": false},
      {"text": "Macrophages/epithelioid histiocytes and multinucleated giant cells", "correct": true},
      {"text": "Fibroblasts and adipocytes", "correct": false},
      {"text": "Basophils and lymphoblasts", "correct": false}
    ],
    "explanation": "Granulomas contain macrophages, epithelioid cells, and multinucleated giant cells."
  },
// 166
  {
    "question": "A notable microscopic feature of leprosy is:",
    "answers": [
      {"text": "Bone sequestration", "correct": false},
      {"text": "Viral inclusion bodies", "correct": false},
      {"text": "Nerve infiltration by mononuclear inflammatory cells", "correct": true},
      {"text": "Keratin pearl formation", "correct": false},
      {"text": "Vascular thrombosis", "correct": false}
    ],
    "explanation": "Nerve infiltration is a hallmark microscopic feature of leprosy."
  },
// 167
  {
    "question": "The presence of oral lesions without skin involvement in leprosy is:",
    "answers": [
      {"text": "Common", "correct": false},
      {"text": "Typical", "correct": false},
      {"text": "Pathognomonic", "correct": false},
      {"text": "Highly improbable", "correct": true},
      {"text": "Diagnostic", "correct": false}
    ],
    "explanation": "Oral lesions without skin involvement are highly improbable in leprosy."
  },
// 168
  {
    "question": "Definitive diagnosis of leprosy requires:",
    "answers": [
      {"text": "Serologic testing", "correct": false},
      {"text": "PCR analysis", "correct": false},
      {"text": "Skin patch testing", "correct": false},
      {"text": "Biopsy confirmation", "correct": true},
      {"text": "Radiographic imaging", "correct": false}
    ],
    "explanation": "Biopsy with histopathologic examination is necessary for definitive diagnosis."
  },
// 169
  {
    "question": "A key reason biopsy is necessary is that leprosy:",
    "answers": [
      {"text": "Has highly variable symptoms", "correct": true},
      {"text": "Lacks a laboratory diagnostic test", "correct": false},
      {"text": "Mimics fungal infections", "correct": false},
      {"text": "Produces no histologic changes", "correct": false},
      {"text": "Is self-limiting", "correct": false}
    ],
    "explanation": "Leprosy has variable clinical presentations, making biopsy essential."
  },
// 170
  {
    "question": "Differential diagnosis of leprosy includes all EXCEPT:",
    "answers": [
      {"text": "Late-stage syphilis", "correct": false},
      {"text": "Sarcoidosis", "correct": false},
      {"text": "Cutaneous leishmaniasis", "correct": false},
      {"text": "Lupus erythematosus", "correct": false},
      {"text": "Herpes simplex infection", "correct": true}
    ],
    "explanation": "Herpes simplex infection is not typically included in the differential diagnosis of leprosy."
  },
// 171
  {
    "question": "First-line drugs used in leprosy management include all EXCEPT:",
    "answers": [
      {"text": "Dapsone", "correct": false},
      {"text": "Rifampin", "correct": false},
      {"text": "Clofazimine", "correct": false},
      {"text": "Minocycline", "correct": false},
      {"text": "Acyclovir", "correct": true}
    ],
    "explanation": "Acyclovir is an antiviral and not used in leprosy treatment."
  },
// 172
  {
    "question": "Thalidomide is useful in leprosy primarily for:",
    "answers": [
      {"text": "Eradicating bacteria", "correct": false},
      {"text": "Pain control only", "correct": false},
      {"text": "Managing complications of therapy", "correct": true},
      {"text": "Preventing transmission", "correct": false},
      {"text": "Vaccine development", "correct": false}
    ],
    "explanation": "Thalidomide is used to manage complications such as erythema nodosum leprosum."
  },
// 173
  {
    "question": "Thalidomide analogs such as Lenalidomide are beneficial due to their:",
    "answers": [
      {"text": "Antiviral activity", "correct": false},
      {"text": "Antifungal properties", "correct": false},
      {"text": "Immunomodulatory effects", "correct": true},
      {"text": "Direct bactericidal action", "correct": false},
      {"text": "Analgesic potency", "correct": false}
    ],
    "explanation": "Lenalidomide and similar drugs have immunomodulatory effects useful in leprosy treatment."
  },
// ==================================
// ULCERATIVE LESION - ACTINOMYCOSIS
// ==================================
// 174
  {
    "question": "Actinomycosis is best described as a:",
    "answers": [
      {"text": "Acute viral infection", "correct": false},
      {"text": "Chronic fungal disease", "correct": false},
      {"text": "Chronic bacterial disease with fungus-like features", "correct": true},
      {"text": "Autoimmune granulomatous disease", "correct": false},
      {"text": "Parasitic soft tissue infection", "correct": false}
    ],
    "explanation": "Actinomycosis is a chronic bacterial infection that exhibits fungus-like features due to its filamentous nature."
  },
// 175
  {
    "question": "The organism most commonly responsible for actinomycosis is:",
    "answers": [
      {"text": "Actinomyces viscosus", "correct": false},
      {"text": "Nocardia asteroides", "correct": false},
      {"text": "Streptomyces somaliensis", "correct": false},
      {"text": "Actinomyces israelii", "correct": true},
      {"text": "Staphylococcus aureus", "correct": false}
    ],
    "explanation": "Actinomyces israelii is the most common causative organism of actinomycosis."
  },
// 176
  {
    "question": "Actinomyces israelii is classified as a:",
    "answers": [
      {"text": "Gram-negative aerobe", "correct": false},
      {"text": "Gram-positive anaerobic or microaerophilic bacterium", "correct": true},
      {"text": "Acid-fast bacillus", "correct": false},
      {"text": "Spirochete", "correct": false},
      {"text": "Encapsulated facultative anaerobe", "correct": false}
    ],
    "explanation": "Actinomyces israelii is a gram-positive anaerobic or microaerophilic bacterium."
  },
// 177
  {
    "question": "Actinomyces israelii is normally found in all EXCEPT:",
    "answers": [
      {"text": "Tonsillar crypts", "correct": false},
      {"text": "Gingival crevices", "correct": false},
      {"text": "Carious lesions", "correct": false},
      {"text": "Nonvital root canals", "correct": false},
      {"text": "Salivary gland acini", "correct": true}
    ],
    "explanation": "Actinomyces israelii is not normally found in salivary gland acini."
  },
// 178
  {
    "question": "Actinomycosis is not considered contagious because:",
    "answers": [
      {"text": "It is self-limiting", "correct": false},
      {"text": "It lacks systemic spread", "correct": false},
      {"text": "It cannot be transmitted between individuals", "correct": true},
      {"text": "Humans are not natural hosts", "correct": false},
      {"text": "It requires fungal co-infection", "correct": false}
    ],
    "explanation": "Actinomycosis is not contagious as it cannot be transmitted between individuals."
  },
// 179
  {
    "question": "Actinomycosis most commonly develops following:",
    "answers": [
      {"text": "Hematogenous dissemination", "correct": false},
      {"text": "Allergic hypersensitivity", "correct": false},
      {"text": "Trauma, surgery, or prior infection", "correct": true},
      {"text": "Insect bites", "correct": false},
      {"text": "Viral immunosuppression", "correct": false}
    ],
    "explanation": "Actinomycosis commonly develops after trauma, surgery, or prior infection."
  },
// 180
  {
    "question": "Dental procedures that predispose to actinomycosis include all EXCEPT:",
    "answers": [
      {"text": "Tooth extraction", "correct": false},
      {"text": "Gingival surgery", "correct": false},
      {"text": "Oral infection", "correct": false},
      {"text": "Orthodontic bracket placement", "correct": true},
      {"text": "Surgical trauma", "correct": false}
    ],
    "explanation": "Orthodontic bracket placement is not typically a predisposing factor for actinomycosis."
  },
// 181
  {
    "question": "Common anatomic regions affected by actinomycosis include the:",
    "answers": [
      {"text": "Brain and spinal cord", "correct": false},
      {"text": "Thorax, abdomen, and head & neck", "correct": true},
      {"text": "Kidneys and bladder", "correct": false},
      {"text": "Endocrine glands", "correct": false},
      {"text": "Small joints of the hands", "correct": false}
    ],
    "explanation": "Actinomycosis commonly affects the thorax, abdomen, and head & neck regions."
  },
// 182
  {
    "question": "Actinomycosis of the head and neck is termed:",
    "answers": [
      {"text": "Oropharyngeal actinomycosis", "correct": false},
      {"text": "Maxillofacial nocardiosis", "correct": false},
      {"text": "Cervicofacial actinomycosis", "correct": true},
      {"text": "Craniofacial mycosis", "correct": false},
      {"text": "Mandibular granulomatosis", "correct": false}
    ],
    "explanation": "Actinomycosis affecting the head and neck is called cervicofacial actinomycosis."
  },
// 183
  {
    "question": "Cervicofacial actinomycosis typically presents as:",
    "answers": [
      {"text": "Rapidly enlarging cyst", "correct": false},
      {"text": "Mandibular swelling mimicking pyogenic infection", "correct": true},
      {"text": "Painless mucosal plaque", "correct": false},
      {"text": "Vesiculobullous eruption", "correct": false},
      {"text": "Pigmented ulcer", "correct": false}
    ],
    "explanation": "It typically presents as mandibular swelling that mimics a pyogenic infection."
  },
// 184
  {
    "question": "Skin lesions in actinomycosis are characteristically described as:",
    "answers": [
      {"text": "Fluctuant and compressible", "correct": false},
      {"text": "Soft and cystic", "correct": false},
      {"text": "Woody hard and indurated", "correct": true},
      {"text": "Vesicular and fragile", "correct": false},
      {"text": "Erythematous and scaly", "correct": false}
    ],
    "explanation": "Skin lesions are typically woody hard and indurated."
  },
// 185
  {
    "question": "Which tissues may be involved in cervicofacial actinomycosis?",
    "answers": [
      {"text": "Only mucosal tissue", "correct": false},
      {"text": "Only bone", "correct": false},
      {"text": "Only lymph nodes", "correct": false},
      {"text": "Any mucosal site and bone", "correct": true},
      {"text": "Only salivary glands", "correct": false}
    ],
    "explanation": "Cervicofacial actinomycosis can involve any mucosal site and bone."
  },
// 186
  {
    "question": "Pus draining from chronic actinomycotic lesions often contains:",
    "answers": [
      {"text": "Keratin debris", "correct": false},
      {"text": "Cholesterol clefts", "correct": false},
      {"text": "Rice bodies", "correct": false},
      {"text": "Sulfur granules", "correct": true},
      {"text": "Hemosiderin deposits", "correct": false}
    ],
    "explanation": "Sulfur granules are characteristic aggregates found in pus from actinomycotic lesions."
  },
// 187
  {
    "question": "Sulfur granules represent aggregates of:",
    "answers": [
      {"text": "Necrotic epithelial cells", "correct": false},
      {"text": "Calcified debris", "correct": false},
      {"text": "Actinomyces israelii organisms", "correct": true},
      {"text": "Fungal hyphae", "correct": false},
      {"text": "Neutrophil clusters", "correct": false}
    ],
    "explanation": "Sulfur granules are aggregates of Actinomyces israelii organisms."
  },
// 188
  {
    "question": "Radiographically, actinomycosis most commonly appears as:",
    "answers": [
      {"text": "Well-circumscribed radiopacity", "correct": false},
      {"text": "Mixed radiolucent-radiopaque lesion", "correct": false},
      {"text": "Radiolucency with irregular, ill-defined margins", "correct": true},
      {"text": "Multilocular soap-bubble lesion", "correct": false},
      {"text": "Ground-glass opacity", "correct": false}
    ],
    "explanation": "Radiographs typically show radiolucent lesions with irregular, ill-defined margins."
  },
// 189
  {
    "question": "Histopathology of actinomycosis typically demonstrates:",
    "answers": [
      {"text": "Hyperkeratotic epithelial proliferation", "correct": false},
      {"text": "Granulomatous inflammation with central abscess formation", "correct": true},
      {"text": "Caseating necrosis", "correct": false},
      {"text": "Fibrinoid vascular necrosis", "correct": false},
      {"text": "Viral cytopathic changes", "correct": false}
    ],
    "explanation": "Histology shows granulomatous inflammation with central abscesses."
  },
// 190
  {
    "question": "A distinctive microscopic feature is the presence of:",
    "answers": [
      {"text": "Keratin pearls", "correct": false},
      {"text": "Acid-fast bacilli", "correct": false},
      {"text": "Gram-positive colonies with radiating filaments and clubbed ends", "correct": true},
      {"text": "Spirochete clusters", "correct": false},
      {"text":  "Encapsulated yeast forms", "correct": false}
    ],
    "explanation": "Characteristic gram-positive colonies with radiating filaments and clubbed ends are seen."
  },
// 191
  {
    "question": "Radiating filamentous structures seen histologically originate from:",
    "answers": [
      {"text": "Fungal spores", "correct": false},
      {"text": "Necrotic bone", "correct": false},
      {"text": "Bacterial colonies", "correct": true},
      {"text": "Salivary concretions", "correct": false},
      {"text": "Keratin aggregates", "correct": false}
    ],
    "explanation": "These structures are bacterial colonies of Actinomyces."
  },
// 192
  {
    "question": "Differential diagnosis of actinomycosis includes:",
    "answers": [
      {"text": "Tuberculosis and sarcoidosis", "correct": true},
      {"text": "Candidiasis and aspergillosis", "correct": false},
      {"text": "Scrofula and botryomycosis", "correct": true},
      {"text": "Syphilis and gonorrhea", "correct": false},
      {"text": "Viral stomatitis", "correct": false}
    ],
    "explanation": "Differential diagnosis includes tuberculosis, sarcoidosis, scrofula, and botryomycosis."
  },
// 193
  {
    "question": "Definitive diagnosis of actinomycosis depends on:",
    "answers": [
      {"text": "Radiographic findings alone", "correct": false},
      {"text": "Serologic antibody testing", "correct": false},
      {"text": "Identification of the actinomycotic organism", "correct": true},
      {"text": "Response to antibiotics", "correct": false},
      {"text": "Clinical appearance only", "correct": false}
    ],
    "explanation": "Definitive diagnosis requires identification of the causative organism."
  },
// 194
  {
    "question": "Identification of the organism may be performed by all EXCEPT:",
    "answers": [
      {"text": "Direct examination of exudate", "correct": false},
      {"text": "Microscopic tissue evaluation", "correct": false},
      {"text": "Microbiologic culture", "correct": false},
      {"text": "Routine blood chemistry", "correct": true},
      {"text": "Pathologic material analysis", "correct": false}
    ],
    "explanation": "Routine blood chemistry does not identify the organism."
  },
// 195
  {
    "question": "First-line antibiotic therapy for actinomycosis is:",
    "answers": [
      {"text": "Isoniazid", "correct": false},
      {"text": "Amphotericin B", "correct": false},
      {"text": "High-dose penicillin", "correct": true},
      {"text": "Ciprofloxacin", "correct": false},
      {"text": "Acyclovir", "correct": false}
    ],
    "explanation": "High-dose penicillin is the first-line treatment."
  },
// 196
  {
    "question": "Standard management of severe actinomycosis includes:",
    "answers": [
      {"text": "Short-term oral antibiotics only", "correct": false},
      {"text": "Topical antimicrobial therapy", "correct": false},
      {"text": "Intravenous penicillin followed by prolonged oral therapy", "correct": true},
      {"text": "Radiation therapy", "correct": false},
      {"text": "Antiviral combination therapy", "correct": false}
    ],
    "explanation": "Severe cases require IV penicillin followed by long-term oral antibiotics."
  },
// 197
  {
    "question": "Duration of antibiotic therapy in deep chronic actinomycosis may extend up to:",
    "answers": [
      {"text": "2 weeks", "correct": false},
      {"text": "1 month", "correct": false},
      {"text": "3 months", "correct": false},
      {"text": "6 months", "correct": false},
      {"text": "1 year", "correct": true}
    ],
    "explanation": "Treatment may last up to one year for deep chronic infections."
  },
// 198
  {
    "question": "Alternative effective antibiotics for actinomycosis include:",
    "answers": [
      {"text": "Vancomycin and metronidazole", "correct": false},
      {"text": "Tetracycline and erythromycin", "correct": true},
      {"text": "Rifampin and pyrazinamide", "correct": false},
      {"text": "Clindamycin and gentamicin", "correct": false},
      {"text": "Cephalexin and ceftriaxone", "correct": false}
    ],
    "explanation": "Tetracycline and erythromycin are alternative treatments."
  },
// 199
  {
    "question": "Surgical management of actinomycosis may involve all EXCEPT:",
    "answers": [
      {"text": "Abscess drainage", "correct": false},
      {"text": "Debridement", "correct": false},
      {"text": "Excision of scar and sinus tracts", "correct": false},
      {"text": "Radical neck dissection", "correct": true},
      {"text": "Aeration of infected tissue", "correct": false}
    ],
    "explanation": "Radical neck dissection is not typically indicated."
  },
// 200
  {
    "question": "Surgical intervention primarily enhances treatment by:",
    "answers": [
      {"text": "Eliminating viral reservoirs", "correct": false},
      {"text": "Preventing systemic spread", "correct": false},
      {"text": "Improving antibiotic penetration", "correct": true},
      {"text": "Stimulating antibody production", "correct": false},
      {"text": "Reducing hypersensitivity reactions", "correct": false}
    ],
    "explanation": "Surgery improves antibiotic penetration by removing necrotic tissue."
  },
// ==================================
// ULCERATIVE LESION - NOMA
// ==================================
// 201
  {
    "question": "Noma is BEST described as a:",
    "answers": [
      {"text": "Viral infection affecting immunocompetent adults", "correct": false},
      {"text": "Fungal disease of the maxillary sinus", "correct": false},
      {"text": "Destructive orofacial disease of malnourished children", "correct": true},
      {"text": "Genetic disorder causing facial deformities", "correct": false},
      {"text": "Autoimmune ulcerative condition", "correct": false}
    ],
    "explanation": "Noma is a rapidly progressing, destructive orofacial gangrenous disease primarily affecting malnourished children, especially in impoverished regions."
  },
// 202
  {
    "question": "Noma is ALSO known as:",
    "answers": [
      {"text": "Ludwig angina", "correct": false},
      {"text": "Vincent infection", "correct": false},
      {"text": "Cancrum oris", "correct": true},
      {"text": "Erythema multiforme", "correct": false},
      {"text": "Necrotizing fasciitis", "correct": false}
    ],
    "explanation": "Noma is also called cancrum oris, referring to the gangrenous infection causing rapid tissue destruction of the mouth and face."
  },
// 203
  {
    "question": "Noma is relatively uncommon in developed countries but remains a significant cause of childhood morbidity and mortality in:",
    "answers": [
      {"text": "Europe and North America", "correct": false},
      {"text": "Australia and New Zealand", "correct": false},
      {"text": "Arctic regions", "correct": false},
      {"text": "Africa, South America, and Asia", "correct": true},
      {"text": "Middle East only", "correct": false}
    ],
    "explanation": "Noma predominantly affects children in impoverished regions of Africa, South America, and Asia where malnutrition and poor sanitation are prevalent."
  },
// 204
  {
    "question": "Tissue necrosis in noma primarily results from:",
    "answers": [
      {"text": "Autoimmune vasculitis", "correct": false},
      {"text": "Aerobic streptococcal infection", "correct": false},
      {"text": "Viral cytopathic effects", "correct": false},
      {"text": "Anaerobic bacterial invasion in a systemically compromised host", "correct": true},
      {"text": "Fungal angioinvasion", "correct": false}
    ],
    "explanation": "Noma tissue necrosis is mainly caused by anaerobic bacterial infection in hosts weakened by malnutrition or systemic illness."
  },
// 205
  {
    "question": "Heavy oral infestation by which organism is strongly implicated in the development of noma?",
    "answers": [
      {"text": "Streptococcus mutans", "correct": false},
      {"text": "Candida albicans", "correct": false},
      {"text": "Fusobacterium necrophorum", "correct": true},
      {"text": "Actinomyces israelii", "correct": false},
      {"text": "Lactobacillus acidophilus", "correct": false}
    ],
    "explanation": "Fusobacterium necrophorum, an anaerobic bacterium, is strongly associated with noma and contributes to its aggressive tissue destruction."
  },
// 206
  {
    "question": "Which of the following organisms is part of the polymicrobial consortium associated with noma?",
    "answers": [
      {"text": "Mycobacterium tuberculosis", "correct": false},
      {"text": "Prevotella intermedia", "correct": true},
      {"text": "Corynebacterium diphtheriae", "correct": false},
      {"text": "Epstein–Barr virus", "correct": false},
      {"text": "Enterococcus faecalis", "correct": false}
    ],
    "explanation": "Prevotella intermedia is one of several anaerobic bacteria involved in the polymicrobial infection that characterizes noma."
  },
// 207
  {
    "question": "All of the following predispose oral tissues to invasion in noma EXCEPT:",
    "answers": [
      {"text": "Malnutrition", "correct": false},
      {"text": "Acute necrotizing gingivitis", "correct": false},
      {"text": "Debilitating systemic disease", "correct": false},
      {"text": "Oral mucosal trauma", "correct": false},
      {"text": "Excellent nutritional status", "correct": true}
    ],
    "explanation": "Good nutritional status protects against noma; malnutrition and systemic illness predispose to the disease."
  },
// 208
  {
    "question": "The initial lesion of noma most commonly presents as:",
    "answers": [
      {"text": "Painless white plaque on the tongue", "correct": false},
      {"text": "Vesicular eruption of the lips", "correct": false},
      {"text": "Painful ulceration of gingiva or buccal mucosa", "correct": true},
      {"text": "Diffuse gingival enlargement", "correct": false},
      {"text": "Palatal petechiae", "correct": false}
    ],
    "explanation": "Noma typically begins as a painful ulcer on the gingiva or buccal mucosa, often following necrotizing gingivitis."
  },
// 209
  {
    "question": "Progression of noma may lead to all of the following EXCEPT:",
    "answers": [
      {"text": "Bone denudation", "correct": false},
      {"text": "Bone sequestration", "correct": false},
      {"text": "Tooth loosening and exfoliation", "correct": false},
      {"text": "Fetid necrotic facial lesions", "correct": false},
      {"text": "Hypercementosis", "correct": true}
    ],
    "explanation": "Hypercementosis is not associated with noma; the disease causes destructive necrosis rather than abnormal cementum deposition."
  },
// 210
  {
    "question": "Noma neonatorum primarily affects:",
    "answers": [
      {"text": "Elderly edentulous patients", "correct": false},
      {"text": "Immunocompetent adolescents", "correct": false},
      {"text": "Low-birth-weight infants with debilitating disease", "correct": true},
      {"text": "Healthy full-term neonates", "correct": false},
      {"text": "Pregnant women", "correct": false}
    ],
    "explanation": "Noma neonatorum is a rare form affecting low-birth-weight or premature infants with severe systemic illness."
  },
// 211
  {
    "question": "First-line management of noma includes:",
    "answers": [
      {"text": "Immediate radiotherapy", "correct": false},
      {"text": "Antiviral therapy", "correct": false},
      {"text": "Nutritional rehabilitation and antibiotic therapy", "correct": true},
      {"text": "Exclusive surgical excision", "correct": false},
      {"text": "Corticosteroid monotherapy", "correct": false}
    ],
    "explanation": "Treatment focuses on correcting malnutrition and administering broad-spectrum antibiotics to control infection."
  },
// 212
  {
    "question": "Which antibiotic is among those recommended for the treatment of noma?",
    "answers": [
      {"text": "Acyclovir", "correct": false},
      {"text": "Clindamycin", "correct": true},
      {"text": "Isoniazid", "correct": false},
      {"text": "Fluconazole", "correct": false},
      {"text": "Rifampicin", "correct": false}
    ],
    "explanation": "Clindamycin is effective against anaerobic bacteria involved in noma and is commonly used in treatment regimens."
  },
// 213
  {
    "question": "Surgical management in noma is primarily indicated for:",
    "answers": [
      {"text": "All early-stage lesions", "correct": false},
      {"text": "Mild gingival ulcerations only", "correct": false},
      {"text": "Cosmetic whitening after recovery", "correct": false},
      {"text": "Extensive tissue destruction and later reconstruction", "correct": true},
      {"text": "Routine prevention", "correct": false}
    ],
    "explanation": "Surgery is reserved for later stages to reconstruct extensive tissue loss after infection is controlled."
  },
// ==================================
// ULCERATIVE LESION - DEEP FUNGAL INFECTIONS
// ==================================
// 214

  {
    "question": "Deep fungal infections most commonly have their primary site of involvement in the:",
    "answers": [
      {"text": "Oral mucosa", "correct": false},
      {"text": "Skin", "correct": false},
      {"text": "Lungs", "correct": true},
      {"text": "Lymph nodes", "correct": false},
      {"text": "Gastrointestinal tract", "correct": false}
    ],
    "explanation": "Deep fungal infections typically begin in the lungs as the primary site due to inhalation of fungal spores."
  },
// 215
  {
    "question": "The most common route of transmission of deep fungal infections is:",
    "answers": [
      {"text": "Direct mucosal contact", "correct": false},
      {"text": "Inhalation of spores", "correct": true},
      {"text": "Hematogenous spread", "correct": false},
      {"text": "Sexual transmission", "correct": false},
      {"text": "Ingestion of contaminated food", "correct": false}
    ],
    "explanation": "Inhalation of fungal spores is the primary mode of transmission for most deep fungal infections."
  },
// 216
  {
    "question": "Oral lesions in deep fungal infections most commonly arise due to:",
    "answers": [
      {"text": "Primary oral infection", "correct": false},
      {"text": "Autoimmune mucosal injury", "correct": false},
      {"text": "Spread from pulmonary infection", "correct": true},
      {"text": "Salivary gland infection", "correct": false},
      {"text": "Reactivation of latent oral fungi", "correct": false}
    ],
    "explanation": "Oral lesions usually result from dissemination or direct spread from a primary pulmonary fungal infection."
  },
// 217
  {
    "question": "The typical oral lesion seen in deep fungal infections is:",
    "answers": [
      {"text": "Vesicular lesion", "correct": false},
      {"text": "White keratotic plaque", "correct": false},
      {"text": "Nonhealing ulcer", "correct": true},
      {"text": "Pigmented macule", "correct": false},
      {"text": "Papillary growth", "correct": false}
    ],
    "explanation": "Nonhealing ulcers are characteristic oral manifestations of deep fungal infections."
  },
// 218
  {
    "question": "Histopathologic hallmark of deep fungal infections is:",
    "answers": [
      {"text": "Epithelial dysplasia", "correct": false},
      {"text": "Granulomatous inflammation", "correct": true},
      {"text": "Viral inclusion bodies", "correct": false},
      {"text": "Fibrinoid necrosis", "correct": false},
      {"text": "Hyperkeratosis", "correct": false}
    ],
    "explanation": "Granulomatous inflammation is a typical histopathologic response seen in deep fungal infections."
  },
// 219
  {
    "question": "Multinucleated giant cells are most commonly associated with which inflammatory pattern?",
    "answers": [
      {"text": "Acute suppurative", "correct": false},
      {"text": "Allergic", "correct": false},
      {"text": "Granulomatous", "correct": true},
      {"text": "Necrotizing", "correct": false},
      {"text": "Serous", "correct": false}
    ],
    "explanation": "Multinucleated giant cells are a hallmark of granulomatous inflammation, which is common in fungal infections."
  },
// 220
  {
    "question": "Purulence is most commonly associated with which deep fungal infection?",
    "answers": [
      {"text": "Histoplasmosis", "correct": false},
      {"text": "Cryptococcosis", "correct": false},
      {"text": "Blastomycosis", "correct": true},
      {"text": "Candidiasis", "correct": false},
      {"text": "Aspergillosis", "correct": false}
    ],
    "explanation": "Blastomycosis often presents with purulent lesions due to its suppurative inflammatory response."
  },
// 221
  {
    "question": "Pseudoepitheliomatous hyperplasia is characteristically seen in:",
    "answers": [
      {"text": "Histoplasmosis", "correct": false},
      {"text": "Coccidioidomycosis", "correct": false},
      {"text": "Cryptococcosis", "correct": false},
      {"text": "Blastomycosis", "correct": true},
      {"text": "Aspergillosis", "correct": false}
    ],
    "explanation": "Pseudoepitheliomatous hyperplasia is a reactive epithelial proliferation commonly seen in blastomycosis lesions."
  },
// 222
  {
    "question": "Which drug used for deep fungal infections is known for significant nephrotoxicity?",
    "answers": [
      {"text": "Ketoconazole", "correct": false},
      {"text": "Fluconazole", "correct": false},
      {"text": "Itraconazole", "correct": false},
      {"text": "Amphotericin B", "correct": true},
      {"text": "Nystatin", "correct": false}
    ],
    "explanation": "Amphotericin B is effective against many deep fungal infections but is well known for causing significant kidney toxicity."
  },
// 223
  {
    "question": "Primary involvement of the oral mucous membranes in deep fungal infections is:",
    "answers": [
      {"text": "The most common presentation", "correct": false},
      {"text": "A frequent early finding", "correct": false},
      {"text": "A highly likely route of infection", "correct": false},
      {"text": "Rare and highly unlikely", "correct": true},
      {"text": "Pathognomonic", "correct": false}
    ],
    "explanation": "Primary oral mucosal infection by deep fungi is rare; oral lesions usually arise secondary to systemic spread."
  },
// 224
  {
    "question": "A 46-year-old man presents with chronic cough, fever, night sweats, and weight loss for two months. Weeks later, he develops a painful, indurated, nonhealing ulcer on the tongue. Biopsy shows granulomatous inflammation with multinucleated giant cells and fungal organisms. What is the most likely primary site of infection?",
    "answers": [
      {"text": "Oral mucosa", "correct": false},
      {"text": "Skin", "correct": false},
      {"text": "Gastrointestinal tract", "correct": false},
      {"text": "Lung", "correct": true},
      {"text": "Lymph nodes", "correct": false}
    ],
    "explanation": "The lung is the primary site of infection in most deep fungal infections, as inhalation of spores leads to pulmonary disease before dissemination."
  },
// 225
  {
    "question": "A patient with a known pulmonary fungal infection develops oral ulcers. Which mechanism most commonly explains the oral involvement?",
    "answers": [
      {"text": "Primary colonization of oral epithelium", "correct": false},
      {"text": "Direct invasion through dental pulp", "correct": false},
      {"text": "Hematogenous dissemination or implantation of infected sputum", "correct": true},
      {"text": "Autoimmune mucosal destruction", "correct": false},
      {"text": "Spread through salivary ducts", "correct": false}
    ],
    "explanation": "Oral lesions in deep fungal infections usually arise from hematogenous spread or direct implantation of infected sputum rather than primary oral infection."
  },
// 226
  {
    "question": "A farmer develops fever, cough, and chest pain after working in an area with heavy dust exposure. Weeks later, he presents with chronic oral ulcers. Which route of infection most likely initiated the disease?",
    "answers": [
      {"text": "Ingestion of contaminated food", "correct": false},
      {"text": "Inhalation of fungal spores", "correct": true},
      {"text": "Direct mucosal contact", "correct": false},
      {"text": "Arthropod transmission", "correct": false},
      {"text": "Sexual transmission", "correct": false}
    ],
    "explanation": "Inhalation of fungal spores from dust is the most common route of infection for deep fungal diseases."
  },
// 227
  {
    "question": "A patient with suspected deep fungal infection undergoes biopsy of an oral lesion. Which histopathologic feature is most characteristic?",
    "answers": [
      {"text": "Dense neutrophilic infiltrate without granulomas", "correct": false},
      {"text": "Viral cytopathic epithelial changes", "correct": false},
      {"text": "Granulomatous inflammation with multinucleated giant cells", "correct": true},
      {"text": "Dysplastic epithelial proliferation", "correct": false},
      {"text": "Fibrinoid necrosis of vessel walls", "correct": false}
    ],
    "explanation": "Granulomatous inflammation with multinucleated giant cells is a hallmark of deep fungal infections."
  },
// 228
  {
    "question": "A patient presents with a chronic oral ulcer suspected to be fungal in origin. Which clinical feature most strongly supports deep fungal infection?",
    "answers": [
      {"text": "Rapid healing after topical therapy", "correct": false},
      {"text": "Painless superficial erosion", "correct": false},
      {"text": "Nonhealing, indurated, painful ulcer", "correct": true},
      {"text": "Vesicular eruption with crusting", "correct": false},
      {"text": "Migratory erythematous patches", "correct": false}
    ],
    "explanation": "Deep fungal infections typically present as nonhealing, indurated, and painful ulcers."
  },
// 229
  {
    "question": "A patient with pulmonary fungal disease develops oral lesions. Which presentation is most typical?",
    "answers": [
      {"text": "White scrapable plaques", "correct": false},
      {"text": "Multiple painless mucosal nodules", "correct": false},
      {"text": "Chronic ulcerative lesions", "correct": true},
      {"text": "Diffuse gingival enlargement", "correct": false},
      {"text": "Pigmented mucosal macules", "correct": false}
    ],
    "explanation": "Chronic ulcerative lesions are the most common oral manifestation of pulmonary fungal infections."
  },
// 230
  {
    "question": "A clinician considers deep fungal infection in the differential diagnosis of a persistent oral ulcer. Which condition should also be considered due to similar presentation?",
    "answers": [
      {"text": "Dental fluorosis", "correct": false},
      {"text": "Recurrent aphthous stomatitis", "correct": false},
      {"text": "Oral squamous cell carcinoma", "correct": true},
      {"text": "Geographic tongue", "correct": false},
      {"text": "Fordyce granules", "correct": false}
    ],
    "explanation": "Oral squamous cell carcinoma can present as a persistent ulcer and should be considered in the differential diagnosis."
  },
// 231
  {
    "question": "A patient with pulmonary fungal infection develops oral lesions that produce purulent discharge. Which infection is most likely associated with this feature?",
    "answers": [
      {"text": "Histoplasmosis", "correct": false},
      {"text": "Cryptococcosis", "correct": false},
      {"text": "Coccidioidomycosis", "correct": false},
      {"text": "Blastomycosis", "correct": true},
      {"text": "Candidiasis", "correct": false}
    ],
    "explanation": "Blastomycosis is known for causing purulent oral lesions due to its suppurative inflammatory response."
  },
// 232
  {
    "question": "A biopsy of an oral lesion shows granulomatous inflammation with organisms. The pathologist notes pseudoepitheliomatous hyperplasia without surface ulceration. Which deep fungal infection most strongly correlates with this finding?",
    "answers": [
      {"text": "Histoplasmosis", "correct": false},
      {"text": "Cryptococcosis", "correct": false},
      {"text": "Coccidioidomycosis", "correct": false},
      {"text": "Blastomycosis", "correct": true},
      {"text": "Aspergillosis", "correct": false}
    ],
    "explanation": "Pseudoepitheliomatous hyperplasia is characteristically seen in blastomycosis lesions."
  },
// 233
  {
    "question": "A patient diagnosed with deep mycotic infection is started on antifungal therapy. Which medication is highly effective but associated with significant nephrotoxicity?",
    "answers": [
      {"text": "Ketoconazole", "correct": false},
      {"text": "Fluconazole", "correct": false},
      {"text": "Itraconazole", "correct": false},
      {"text": "Amphotericin B", "correct": true},
      {"text": "Nystatin", "correct": false}
    ],
    "explanation": "Amphotericin B is a potent antifungal agent but is well known for its significant nephrotoxicity."
  },
// =================================================================
// ULCERATIVE LESION - Subcutaneous Fungal Infection: Sporotrichosis
// =================================================================
// 234

  {
    "question": "A 38-year-old florist presents with slowly enlarging subcutaneous nodules on the forearm that later ulcerate and produce exudate. She recalls frequent minor injuries while handling rose plants. Weeks later, she develops a persistent, nonspecific oral ulcer and regional lymphadenopathy. Which of the following is the most likely causative organism?",
    "answers": [
      {"text": "Candida albicans", "correct": false},
      {"text": "Histoplasma capsulatum", "correct": false},
      {"text": "Sporothrix schenckii", "correct": true},
      {"text": "Cryptococcus neoformans", "correct": false},
      {"text": "Blastomyces dermatitidis", "correct": false}
    ],
    "explanation": "Sporothrix schenckii is the causative agent of sporotrichosis, often acquired through minor skin injuries from handling plants like roses, leading to nodular lesions and sometimes oral ulcers."
  },
// 235
  {
    "question": "Sporotrichosis is most commonly acquired through:",
    "answers": [
      {"text": "Inhalation of fungal spores", "correct": false},
      {"text": "Ingestion of contaminated water", "correct": false},
      {"text": "Inoculation of skin or mucosa by contaminated soil or thorny plants", "correct": true},
      {"text": "Person-to-person respiratory spread", "correct": false},
      {"text": "Hematogenous spread from pulmonary infection", "correct": false}
    ],
    "explanation": "Sporotrichosis is typically acquired by traumatic inoculation of the fungus into skin or mucosa from contaminated soil or plant material."
  },
// 236
  {
    "question": "A gardener develops red cutaneous nodules that later ulcerate with exudate formation. Oral examination reveals a chronic ulcer of unclear origin. Which oral presentation is most typical of this condition?",
    "answers": [
      {"text": "White scrapable plaques", "correct": false},
      {"text": "Vesicular eruptions", "correct": false},
      {"text": "Nonspecific chronic ulcer", "correct": true},
      {"text": "Diffuse gingival enlargement", "correct": false},
      {"text": "Pigmented mucosal macule", "correct": false}
    ],
    "explanation": "Sporotrichosis can present with nonspecific chronic oral ulcers, often persistent and indurated."
  },
// 237
  {
    "question": "The characteristic inflammatory pattern seen in sporotrichosis is:",
    "answers": [
      {"text": "Acute suppurative inflammation", "correct": false},
      {"text": "Granulomatous inflammation", "correct": true},
      {"text": "Viral cytopathic changes", "correct": false},
      {"text": "Fibrinoid necrosis", "correct": false},
      {"text": "Eosinophilic infiltration", "correct": false}
    ],
    "explanation": "Sporotrichosis typically induces granulomatous inflammation with formation of granulomas."
  },
// 238
  {
    "question": "Histologic examination of a biopsy from a chronic ulcerated lesion in a patient with suspected sporotrichosis shows granulomas with central abscess formation. The overlying epithelium demonstrates marked pseudoepitheliomatous hyperplasia. Which diagnosis is most consistent with these findings?",
    "answers": [
      {"text": "Tuberculosis", "correct": false},
      {"text": "Actinomycosis", "correct": false},
      {"text": "Sporotrichosis", "correct": true},
      {"text": "Coccidioidomycosis", "correct": false},
      {"text": "Syphilis", "correct": false}
    ],
    "explanation": "Sporotrichosis histology often shows granulomas with central abscesses and pseudoepitheliomatous hyperplasia of the overlying epithelium."
  },
// 239
  {
    "question": "Definitive diagnosis of sporotrichosis is established by:",
    "answers": [
      {"text": "Serologic antibody testing", "correct": false},
      {"text": "Direct fluorescent antibody testing", "correct": false},
      {"text": "Culture of infected tissue on Sabouraud agar", "correct": true},
      {"text": "PCR from saliva", "correct": false},
      {"text": "Radiographic imaging", "correct": false}
    ],
    "explanation": "Culture of tissue on Sabouraud agar is the gold standard for diagnosing sporotrichosis."
  },
// 240
  {
    "question": "Serologic testing for sporotrichosis is generally considered:",
    "answers": [
      {"text": "Highly sensitive and specific", "correct": false},
      {"text": "Rapid and definitive", "correct": false},
      {"text": "Unnecessary due to pathognomonic lesions", "correct": false},
      {"text": "Unreliable", "correct": true},
      {"text": "Superior to tissue culture", "correct": false}
    ],
    "explanation": "Serologic tests for sporotrichosis lack reliability and are not routinely used for diagnosis."
  },
// 241
  {
    "question": "Which special stain may aid in identifying the organism in tissue biopsy specimens?",
    "answers": [
      {"text": "Gram stain", "correct": false},
      {"text": "Acid-fast stain", "correct": false},
      {"text": "Silver stain", "correct": true},
      {"text": "PAS stain", "correct": false},
      {"text": "Wright stain", "correct": false}
    ],
    "explanation": "Silver stains (e.g., Gomori methenamine silver) are useful for visualizing fungal organisms in tissue."
  },
// 242
  {
    "question": "First-line treatment for sporotrichosis most commonly involves:",
    "answers": [
      {"text": "Amphotericin B infusion", "correct": false},
      {"text": "Saturated potassium iodide solution", "correct": true},
      {"text": "Fluconazole therapy", "correct": false},
      {"text": "Nystatin oral suspension", "correct": false},
      {"text": "Surgical excision alone", "correct": false}
    ],
    "explanation": "Saturated potassium iodide solution is a traditional and effective first-line treatment for cutaneous sporotrichosis."
  },
// 243
  {
    "question": "Ketoconazole is used in sporotrichosis primarily in patients who:",
    "answers": [
      {"text": "Have pulmonary involvement", "correct": false},
      {"text": "Are immunocompromised", "correct": false},
      {"text": "Fail initial surgical therapy", "correct": false},
      {"text": "Have toxicity or allergy to iodides", "correct": true},
      {"text": "Develop lymphadenopathy", "correct": false}
    ],
    "explanation": "Ketoconazole is used as an alternative treatment in patients who cannot tolerate potassium iodide due to toxicity or allergy."
  },
// ==================================================================================================
// ULCERATIVE LESION - Opportunistic Fungal Infections: Mucormycosis (Phycomycosis) and Aspergillosis
// ==================================================================================================
// 244
  {
    "question": "A 58-year-old man with poorly controlled ketoacidotic diabetes presents with facial pain, nasal congestion, and a rapidly progressive necrotic lesion of the palate that results in perforation. Imaging shows extension into the paranasal sinuses and orbit. Which fungal infection is most strongly associated with this presentation?",
    "answers": [
      {"text": "Candidiasis", "correct": false},
      {"text": "Histoplasmosis", "correct": false},
      {"text": "Mucormycosis", "correct": true},
      {"text": "Blastomycosis", "correct": false},
      {"text": "Sporotrichosis", "correct": false}
    ],
    "explanation": "Mucormycosis is a rapidly progressive fungal infection commonly seen in immunocompromised patients such as those with poorly controlled diabetes, characterized by necrotic lesions and tissue destruction including palatal perforation."
  },
// 245
  {
    "question": "Mucormycosis affecting the head and neck region is most commonly caused by fungal species belonging to which groups?",
    "answers": [
      {"text": "Candida and Cryptococcus", "correct": false},
      {"text": "Mucor, Rhizopus, and Absidia", "correct": true},
      {"text": "Histoplasma and Blastomyces", "correct": false},
      {"text": "Aspergillus and Penicillium", "correct": false},
      {"text": "Trichophyton and Microsporum", "correct": false}
    ],
    "explanation": "Mucormycosis is caused by fungi in the order Mucorales, including Mucor, Rhizopus, and Absidia species."
  },
//246
  {
    "question": "An immunosuppressed transplant recipient develops a rapidly spreading sinonasal fungal infection. Tissue necrosis progresses, and vascular invasion leads to thrombosis and infarction. Which property of the causative organism best explains these complications?",
    "answers": [
      {"text": "Toxin-mediated epithelial destruction", "correct": false},
      {"text": "BLymphatic obstruction", "correct": false},
      {"text": "Propensity for arterial wall invasion", "correct": true},
      {"text": "Hypersensitivity immune response", "correct": false},
      {"text": "Viral coinfection", "correct": false}
    ],
    "explanation": "Mucormycosis fungi have a strong tendency to invade blood vessel walls, causing thrombosis and tissue infarction, leading to rapid tissue necrosis."
  },
// 247
  {
    "question": "The most common anatomic sites of head and neck involvement in mucormycosis are the:",
    "answers": [
      {"text": "Tongue and buccal mucosa", "correct": false},
      {"text": "Salivary glands", "correct": false},
      {"text": "Nasal cavity and paranasal sinuses", "correct": true},
      {"text": "Larynx and trachea", "correct": false},
      {"text": "Cervical lymph nodes", "correct": false}
    ],
    "explanation": "Mucormycosis most commonly affects the nasal cavity and paranasal sinuses in the head and neck region."
  },
// 248
  {
    "question": "Biopsy of a necrotic palatal lesion shows fungal organisms within thrombosed blood vessels. Microscopy reveals broad, pale-staining hyphae without septa that branch at right angles. Which diagnosis is most consistent with these findings?",
    "answers": [
      {"text": "Aspergillosis", "correct": false},
      {"text": "Candidiasis", "correct": false},
      {"text": "Histoplasmosis", "correct": false},
      {"text": "Mucormycosis", "correct": true},
      {"text": "Cryptococcosis", "correct": false}
    ],
    "explanation": "Mucormycosis is characterized microscopically by broad, nonseptate hyphae branching at right angles, often invading blood vessels causing thrombosis."
  },
// 249
  {
    "question": "The characteristic microscopic appearance of mucormycosis includes:",
    "answers": [
      {"text": "Narrow septate hyphae branching at acute angles", "correct": false},
      {"text": "Encapsulated budding yeasts", "correct": false},
      {"text": "Broad nonseptate hyphae branching at right angles", "correct": true},
      {"text": "Pseudohyphae with blastoconidia", "correct": false},
      {"text": "Spherules containing endospores", "correct": false}
    ],
    "explanation": "Mucormycosis fungi show broad, ribbon-like, nonseptate hyphae branching at right angles under microscopy."
  },
// 250
  {
    "question": "Which staining method typically allows ready identification of mucormycosis organisms in necrotic tissue sections?",
    "answers": [
      {"text": "Gram stain", "correct": false},
      {"text": "Ziehl–Neelsen stain", "correct": false},
      {"text": "Hematoxylin and eosin stain", "correct": true},
      {"text": "Wright stain", "correct": false},
      {"text": "Giemsa stain", "correct": false}
    ],
    "explanation": "Hematoxylin and eosin (H&E) stain is commonly used to identify mucormycosis organisms in tissue, showing broad hyphae in necrotic areas."
  },
// 251
  {
    "question": "Perforating palatal lesions seen in mucormycosis should be differentiated from all of the following EXCEPT:",
    "answers": [
      {"text": "Tertiary syphilis", "correct": false},
      {"text": "NK/T-cell lymphoma (midline granuloma)", "correct": false},
      {"text": "Granulomatosis with polyangiitis", "correct": false},
      {"text": "Oral squamous papilloma", "correct": true},
      {"text": "Gummatous necrosis", "correct": false}
    ],
    "explanation": "Oral squamous papilloma does not cause palatal perforation and is not part of the differential diagnosis for necrotic palatal lesions."
  },
// 252
  {
    "question": "The drugs of choice for treatment of mucormycosis and aspergillosis are:",
    "answers": [
      {"text": "Ketoconazole", "correct": false},
      {"text": "Fluconazole", "correct": false},
      {"text": "Itraconazole", "correct": false},
      {"text": "Lipid-based amphotericin B", "correct": true},
      {"text": "Nystatin", "correct": false}
    ],
    "explanation": "Lipid-based amphotericin B is the preferred antifungal treatment for mucormycosis and aspergillosis due to its efficacy and reduced toxicity."
  },
// 253
  {
    "question": "Which adjunctive management is often required for upper respiratory tract lesions in mucormycosis?",
    "answers": [
      {"text": "Radiation therapy", "correct": false},
      {"text": "Chemotherapy", "correct": false},
      {"text": "Surgical debridement", "correct": true},
      {"text": "Cryotherapy", "correct": false},
      {"text": "Laser ablation", "correct": false}
    ],
    "explanation": "Surgical debridement is often necessary to remove necrotic tissue and control infection in mucormycosis."
  },
// 254
  {
    "question": "Overall prognosis in mucormycosis is most strongly influenced by:",
    "answers": [
      {"text": "Patient age", "correct": false},
      {"text": "Duration of symptoms", "correct": false},
      {"text": "Severity of underlying disease and timely therapy", "correct": true},
      {"text": "Size of palatal perforation", "correct": false},
      {"text": "Presence of lymphadenopathy", "correct": false}
    ],
    "explanation": "Prognosis depends largely on the patient's underlying health and how quickly effective treatment is initiated."
  },
// 255
  {
    "question": "Which form of infection is generally more likely to be lethal?",
    "answers": [
      {"text": "Upper respiratory tract infection", "correct": false},
      {"text": "Cutaneous infection", "correct": false},
      {"text": "Oral mucosal infection", "correct": false},
      {"text": "Lung infection", "correct": true},
      {"text": "Sinonasal infection", "correct": false}
    ],
    "explanation": "Pulmonary mucormycosis is more lethal due to rapid progression and difficulty in early diagnosis and treatment."
  },
// ===================================
// ULCERATIVE LESION - APHTOUS ULCER
// ===================================
// 256
  {
    "question": "A 25-year-old female office worker presents with a single, painful, oval ulcer <0.5 cm on the nonkeratinized mucosa of the buccal sulcus. It is surrounded by an erythematous halo and heals spontaneously in 7–10 days without scarring. Which type of aphthous ulcer is this?",
    "answers": [
      {"text": "Minor aphthous ulcer", "correct": true},
      {"text": "Major aphthous ulcer", "correct": false},
      {"text": "Herpetiform aphthous ulcer", "correct": false},
      {"text": "Traumatic ulcer", "correct": false},
      {"text": "Herpetic ulcer", "correct": false}
    ],
    "explanation": "Minor aphthous ulcers are small (<1 cm), painful ulcers on nonkeratinized mucosa that heal spontaneously within 7–10 days without scarring."
  },
// 257
  {
    "question": "Major aphthous ulcers are distinguished from minor aphthae by all EXCEPT:",
    "answers": [
      {"text": "Size >0.5 cm", "correct": false},
      {"text": "Longer healing time (up to 6 weeks)", "correct": false},
      {"text": "Healing with scar formation", "correct": false},
      {"text": "Single, small lesions", "correct": true},
      {"text": "Crateriform appearance", "correct": false}
    ],
    "explanation": "Major aphthous ulcers are larger, heal more slowly, and often scar; they are not characterized by single, small lesions, which is typical of minor aphthae."
  },
// 258
  {
    "question": "Herpetiform aphthous ulcers:",
    "answers": [
      {"text": "Are preceded by vesicles", "correct": false},
      {"text": "Occur predominantly on movable mucosa", "correct": true},
      {"text": "Heal with scarring", "correct": false},
      {"text": "Are usually solitary", "correct": false},
      {"text": "Are viral in origin", "correct": false}
    ],
    "explanation": "Herpetiform aphthous ulcers are multiple small ulcers that occur mainly on movable (nonkeratinized) mucosa and are not viral in origin."
  },
// 259
  {
    "question": "A patient reports multiple painful oral ulcers that recur every month. The lateral tongue lesions are disproportionately painful relative to their small size. GI complaints are also present. Which systemic disease should be considered?",
    "answers": [
      {"text": "Ulcerative colitis", "correct": false},
      {"text": "Crohn’s disease", "correct": true},
      {"text": "Celiac disease", "correct": false},
      {"text": "Diabetes mellitus", "correct": false},
      {"text": "HIV infection", "correct": false}
    ],
    "explanation": "Crohn’s disease is associated with recurrent oral ulcers and gastrointestinal symptoms, with painful tongue lesions disproportionate to their size."
  },
// 260
  {
    "question": "Which population has the highest prevalence of aphthous ulcers?",
    "answers": [
      {"text": "Smokers", "correct": false},
      {"text": "White-collar/professional individuals", "correct": true},
      {"text": "Low socioeconomic groups", "correct": false},
      {"text": "Children <10 years", "correct": false},
      {"text": "Rural agricultural workers", "correct": false}
    ],
    "explanation": "Aphthous ulcers are more prevalent among white-collar or professional individuals, possibly related to stress and lifestyle factors."
  },
// 261
  {
    "question": "Which of the following is a recognized etiologic factor for aphthous ulcers?",
    "answers": [
      {"text": "Vitamin B12 deficiency", "correct": true},
      {"text": "Candida infection", "correct": false},
      {"text": "Tobacco use", "correct": false},
      {"text": "Herpes simplex virus", "correct": false},
      {"text": "Hard palate trauma", "correct": false}
    ],
    "explanation": "Vitamin B12 deficiency is a known contributing factor to aphthous ulcers."
  },
// 262
  {
    "question": "The preulcerative stage of aphthous ulcers is predominantly characterized by which immune cells?",
    "answers": [
      {"text": "CD8 lymphocytes", "correct": false},
      {"text": "CD4 lymphocytes", "correct": true},
      {"text": "Neutrophils", "correct": false},
      {"text": "Eosinophils", "correct": false},
      {"text": "B lymphocytes", "correct": false}
    ],
    "explanation": "CD4 lymphocytes predominate in the preulcerative stage of aphthous ulcers, indicating a cell-mediated immune response."
  },
// 263
  {
    "question": "During the ulcerative stage, which immune cells predominate in aphthous ulcers?",
    "answers": [
      {"text": "CD4 lymphocytes", "correct": false},
      {"text": "CD8 lymphocytes", "correct": true},
      {"text": "Mast cells only", "correct": false},
      {"text": "Eosinophils only", "correct": false},
      {"text": "Plasma cells only", "correct": false}
    ],
    "explanation": "CD8 lymphocytes predominate during the ulcerative stage, contributing to tissue damage."
  },
// 264
  {
    "question": "Other contributing factors for aphthous ulcers include all EXCEPT:",
    "answers": [
      {"text": "Neurogenic inflammation (substance P)", "correct": false},
      {"text": "Cytokine-induced inhibition of mucosal healing", "correct": false},
      {"text": "Nutritional deficiencies (iron, folate, B12)", "correct": false},
      {"text": "Direct viral infection of epithelial cells", "correct": true},
      {"text": "Chemical irritants in toothpaste or preservatives", "correct": false}
    ],
    "explanation": "Direct viral infection is not a recognized cause of aphthous ulcers."
  },
// 265
  {
    "question": "A patient presents with recurrent oral ulcers preceded by vesicles, mainly on the hard palate and attached gingiva. Which condition is most likely?",
    "answers": [
      {"text": "Aphthous ulcers", "correct": false},
      {"text": "Herpetic ulcers", "correct": true},
      {"text": "Traumatic ulcers", "correct": false},
      {"text": "Pemphigus vulgaris", "correct": false},
      {"text": "Mucous membrane pemphigoid", "correct": false}
    ],
    "explanation": "Herpetic ulcers are preceded by vesicles and commonly affect keratinized mucosa such as the hard palate and attached gingiva."
  },
// 266
  {
    "question": "Which of the following is NOT commonly included in the differential diagnosis of aphthous ulcers?",
    "answers": [
      {"text": "Trauma", "correct": false},
      {"text": "Pemphigus vulgaris", "correct": false},
      {"text": "Mucous membrane pemphigoid", "correct": false},
      {"text": "Neutropenia", "correct": false},
      {"text": "Leukoplakia", "correct": true}
    ],
    "explanation": "Leukoplakia is a white patch and is not typically confused with aphthous ulcers."
  },
// 267
  {
    "question": "Which clinical feature favors aphthous ulcers over herpetic ulcers?",
    "answers": [
      {"text": "Crops of vesicles", "correct": false},
      {"text": "Lesions on nonkeratinized mucosa", "correct": true},
      {"text": "Rapid progression of multiple ulcers", "correct": false},
      {"text": "Preceding fever", "correct": false},
      {"text": "Presence of viral inclusion bodies", "correct": false}
    ],
    "explanation": "Aphthous ulcers typically occur on nonkeratinized mucosa, whereas herpetic ulcers favor keratinized mucosa."
  },
// 268
  {
    "question": "A patient presents with minor recurrent aphthous ulcers. Which first-line therapy is MOST appropriate?",
    "answers": [
      {"text": "Topical corticosteroids", "correct": true},
      {"text": "Systemic immunosuppressives", "correct": false},
      {"text": "Oral thalidomide", "correct": false},
      {"text": "Systemic montelukast", "correct": false},
      {"text": "Oral tetracycline for 6 weeks", "correct": false}
    ],
    "explanation": "Topical corticosteroids are the first-line treatment for minor recurrent aphthous ulcers to reduce inflammation and pain."
  },
// 269
  {
    "question": "Which topical corticosteroid is commonly used in aphthous ulcers?",
    "answers": [
      {"text": "Clobetasol propionate", "correct": true},
      {"text": "Fluconazole", "correct": false},
      {"text": "Ketoconazole", "correct": false},
      {"text": "Nystatin", "correct": false},
      {"text": "Amphotericin B", "correct": false}
    ],
    "explanation": "Clobetasol propionate is a potent topical corticosteroid commonly used to treat aphthous ulcers."
  },
// 270
  {
    "question": "A patient with severe, recurrent aphthous ulcers cannot tolerate systemic corticosteroids. Which alternative systemic therapy may be considered?",
    "answers": [
      {"text": "Montelukast", "correct": true},
      {"text": "Sodium bicarbonate rinse", "correct": false},
      {"text": "Clotrimazole lozenges", "correct": false},
      {"text": "Amoxicillin", "correct": false},
      {"text": "Nystatin suspension", "correct": false}
    ],
    "explanation": "Montelukast, a leukotriene receptor antagonist, may be used as an alternative systemic therapy for severe aphthous ulcers."
  },
// 271
  {
    "question": "A patient uses a tetracycline mouth rinse prepared from 250 mg of capsule dissolved in 30 mL warm water. Which consideration is critical?",
    "answers": [
      {"text": "The solution must be freshly prepared due to rapid breakdown in light", "correct": true},
      {"text": "It prevents future recurrence permanently", "correct": false},
      {"text": "Only one rinse per week is needed", "correct": false},
      {"text": "It is ineffective in the prodromal stage", "correct": false},
      {"text": "Contraindicated on nonkeratinized mucosa", "correct": false}
    ],
    "explanation": "Tetracycline solution degrades quickly when exposed to light and must be freshly prepared for effective use."
  },
// 272
  {
    "question": "Systemic immunosuppressives such as azathioprine or cyclophosphamide are reserved for:",
    "answers": [
      {"text": "Mild minor aphthous ulcers", "correct": false},
      {"text": "Patients who need reduced prednisone doses for severe disease", "correct": true},
      {"text": "Occasional single minor aphthae", "correct": false},
      {"text": "Herpetiform ulcers only", "correct": false},
      {"text": "Routine prophylaxis", "correct": false}
    ],
    "explanation": "Systemic immunosuppressives are used in severe aphthous ulcer cases to reduce corticosteroid dependence."
  },
// 273
  {
    "question": "Which drug has been shown to relieve severe aphthous ulcers in AIDS patients?",
    "answers": [
      {"text": "Thalidomide", "correct": true},
      {"text": "Montelukast", "correct": false},
      {"text": "Colchicine", "correct": false},
      {"text": "Pentoxifylline", "correct": false},
      {"text": "Clobetasol", "correct": false}
    ],
    "explanation": "Thalidomide has immunomodulatory effects and has been effective in treating severe aphthous ulcers in AIDS patients."
  },
// =====================================
// ULCERATIVE LESION - BEHCET'S SYNDROME
// =====================================
// 274
  {
    "question": "A 30-year-old male presents with recurrent painful oral ulcers, genital ulcers, and a history of eye inflammation. He also reports intermittent arthritis of the knees and headaches. Which syndrome is most likely?",
    "answers": [
      {"text": "Recurrent aphthous stomatitis", "correct": false},
      {"text": "Behçet’s syndrome", "correct": true},
      {"text": "Crohn’s disease", "correct": false},
      {"text": "Stevens-Johnson syndrome", "correct": false},
      {"text": "Herpetiform ulcers", "correct": false}
    ],
    "explanation": "Behçet’s syndrome is characterized by recurrent oral and genital ulcers, ocular inflammation, arthritis, and neurological symptoms such as headaches."
  },
// 275
  {
    "question": "Which of the following organ systems is NOT commonly affected in Behçet’s syndrome?",
    "answers": [
      {"text": "Oral mucosa", "correct": false},
      {"text": "Genitals", "correct": false},
      {"text": "Eyes", "correct": false},
      {"text": "Joints", "correct": false},
      {"text": "Kidneys", "correct": true}
    ],
    "explanation": "Kidneys are not commonly involved in Behçet’s syndrome, whereas oral mucosa, genitals, eyes, and joints are frequently affected."
  },
// 276
  {
    "question": "Which of the following statements regarding oral lesions in Behçet’s syndrome is TRUE?",
    "answers": [
      {"text": "They are preceded by vesicles", "correct": false},
      {"text": "They are clinically identical to minor aphthous ulcers", "correct": true},
      {"text": "They are confined to keratinized mucosa", "correct": false},
      {"text": "They rarely recur", "correct": false},
      {"text": "They are painless", "correct": false}
    ],
    "explanation": "Oral ulcers in Behçet’s syndrome resemble minor aphthous ulcers clinically but tend to recur frequently."
  },
// 277
  {
    "question": "A patient has recurrent oral and genital ulcers, pustular erythema nodosum–like lesions on the skin, and inflamed auricular cartilage. What is the name of this specific syndrome?",
    "answers": [
      {"text": "MAGIC syndrome", "correct": true},
      {"text": "Stevens-Johnson syndrome", "correct": false},
      {"text": "Crohn’s disease", "correct": false},
      {"text": "Reiter’s syndrome", "correct": false},
      {"text": "Sweet’s syndrome", "correct": false}
    ],
    "explanation": "MAGIC syndrome (Mouth and Genital ulcers with Inflamed Cartilage) is a variant involving features of Behçet’s and relapsing polychondritis."
  },
// 278
  {
    "question": "The ocular manifestations of Behçet’s syndrome commonly include:",
    "answers": [
      {"text": "Glaucoma", "correct": false},
      {"text": "Conjunctivitis, uveitis, retinitis", "correct": true},
      {"text": "Cataracts", "correct": false},
      {"text": "Orbital cellulitis", "correct": false},
      {"text": "Keratoconjunctivitis sicca", "correct": false}
    ],
    "explanation": "Behçet’s syndrome commonly causes inflammatory eye conditions such as conjunctivitis, uveitis, and retinitis."
  },
// 279
  {
    "question": "Which joint sites are most commonly involved in Behçet’s syndrome?",
    "answers": [
      {"text": "Shoulders and elbows", "correct": false},
      {"text": "Wrists, ankles, knees", "correct": true},
      {"text": "Hips and spine", "correct": false},
      {"text": "Fingers only", "correct": false},
      {"text": "TMJ only", "correct": false}
    ],
    "explanation": "Behçet’s syndrome commonly affects the wrists, ankles, and knees causing intermittent arthritis."
  },
// 280
  {
    "question": "Behçet’s syndrome is primarily considered:",
    "answers": [
      {"text": "Infectious", "correct": false},
      {"text": "Autoimmune/immune dysfunction", "correct": true},
      {"text": "Viral", "correct": false},
      {"text": "Neoplastic", "correct": false},
      {"text": "Nutritional deficiency", "correct": false}
    ],
    "explanation": "Behçet’s syndrome is an autoimmune or immune dysfunction disorder characterized by systemic vasculitis."
  },
// 281
  {
    "question": "Histopathologically, the ulcerative lesions of Behçet’s syndrome are characterized by:",
    "answers": [
      {"text": "Fungal hyphae in the submucosa", "correct": false},
      {"text": "T lymphocyte predominance and neutrophilic vasculitis", "correct": true},
      {"text": "Eosinophilic infiltration", "correct": false},
      {"text": "Plasma cell aggregates only", "correct": false},
      {"text": "Granulomas with caseation", "correct": false}
    ],
    "explanation": "Lesions show T lymphocyte infiltration and neutrophilic vasculitis, reflecting immune-mediated vascular inflammation."
  },
// 282
  {
    "question": "A biopsy of an oral ulcer in a patient with Behçet’s syndrome shows neutrophils in vessel walls and T lymphocyte infiltration. Which process is being observed?",
    "answers": [
      {"text": "Vasculitis", "correct": true},
      {"text": "Fungal invasion", "correct": false},
      {"text": "Viral cytopathic effect", "correct": false},
      {"text": "Traumatic ulceration", "correct": false},
      {"text": "Herpetic inflammation", "correct": false}
    ],
    "explanation": "The histologic findings indicate vasculitis, a hallmark of Behçet’s syndrome."
  },
// 283
  {
    "question": "Which of the following is the primary method for diagnosing Behçet’s syndrome?",
    "answers": [
      {"text": "Clinical signs and history", "correct": true},
      {"text": "Histopathology", "correct": false},
      {"text": "Serologic testing for antibodies", "correct": false},
      {"text": "Culture of lesions", "correct": false},
      {"text": "Imaging studies", "correct": false}
    ],
    "explanation": "Diagnosis is primarily clinical, based on characteristic signs and symptoms."
  },
// 284
  {
    "question": "Which of the following laboratory or biopsy findings is pathognomonic for Behçet’s syndrome?",
    "answers": [
      {"text": "Positive HLA-B51", "correct": false},
      {"text": "Vasculitis on biopsy", "correct": false},
      {"text": "No specific supportive lab or histologic test", "correct": true},
      {"text": "Positive ANA", "correct": false},
      {"text": "Elevated ESR", "correct": false}
    ],
    "explanation": "No specific laboratory or histologic test is pathognomonic; diagnosis relies on clinical criteria."
  },
// 285
  {
    "question": "Which class of drugs is most commonly used as first-line therapy in Behçet’s syndrome?",
    "answers": [
      {"text": "Systemic corticosteroids", "correct": true},
      {"text": "Antibiotics", "correct": false},
      {"text": "Antivirals", "correct": false},
      {"text": "NSAIDs only", "correct": false},
      {"text": "Antifungals", "correct": false}
    ],
    "explanation": "Systemic corticosteroids are the mainstay of treatment to control inflammation."
  },
// 286
  {
    "question": "Which of the following medications may be used for immunosuppression in Behçet’s syndrome?",
    "answers": [
      {"text": "Chlorambucil and azathioprine", "correct": true},
      {"text": "Tetracycline and doxycycline", "correct": false},
      {"text": "Amphotericin B", "correct": false},
      {"text": "Nystatin", "correct": false},
      {"text": "Fluconazole", "correct": false}
    ],
    "explanation": "Immunosuppressive agents like chlorambucil and azathioprine are used in severe or refractory cases."
  },
// 287
  {
    "question": "Which biologic therapy can be considered in severe Behçet’s syndrome?",
    "answers": [
      {"text": "Anti–TNF agents", "correct": true},
      {"text": "Anti–CD20 agents", "correct": false},
      {"text": "Rituximab", "correct": false},
      {"text": "Interleukin-1 antagonists only", "correct": false},
      {"text": "None of the above", "correct": false}
    ],
    "explanation": "Anti–TNF agents are effective biologics used in severe or refractory Behçet’s syndrome."
  },
// 288
  {
    "question": "A patient with severe Behçet’s syndrome involving eyes and CNS is not responding to corticosteroids. Which adjunct therapy might be considered?",
    "answers": [
      {"text": "Dapsone, cyclosporine, thalidomide, interferon, or anti–TNF agents", "correct": true},
      {"text": "Topical corticosteroids only", "correct": false},
      {"text": "Tetracycline mouth rinse", "correct": false},
      {"text": "Potassium iodide solution", "correct": false},
      {"text": "Fluconazole", "correct": false}
    ],
    "explanation": "Adjunct therapies including immunosuppressants and biologics are used for severe, corticosteroid-resistant cases."
  },
// 289
  {
    "question": "Which statement is TRUE regarding treatment of oral lesions in Behçet’s syndrome?",
    "answers": [
      {"text": "They always require systemic steroids", "correct": false},
      {"text": "Topical therapy is sometimes sufficient for minor lesions", "correct": true},
      {"text": "Antibiotics are the mainstay", "correct": false},
      {"text": "Antivirals are routinely used", "correct": false},
      {"text": "Surgery is first-line", "correct": false}
    ],
    "explanation": "Minor oral lesions may be managed with topical therapy without systemic steroids."
  },
// 290
  {
    "question": "Which of the following complications is MOST concerning in Behçet’s syndrome?",
    "answers": [
      {"text": "Oral ulcers", "correct": false},
      {"text": "CNS involvement (headache, nerve palsies)", "correct": true},
      {"text": "Mild arthritis", "correct": false},
      {"text": "Pustular skin lesions", "correct": false},
      {"text": "Genital ulcers", "correct": false}
    ],
    "explanation": "Central nervous system involvement is a serious and potentially life-threatening complication."
  },
// 291
  {
    "question": "A patient presents with recurrent oral aphthae, genital ulcers, uveitis, and history of headaches. Which hallmark feature differentiates Behçet’s syndrome from simple recurrent aphthous stomatitis?",
    "answers": [
      {"text": "Multi-system involvement", "correct": true},
      {"text": "Ulcers <0.5 cm", "correct": false},
      {"text": "Healing within 7–10 days", "correct": false},
      {"text": "Nonpainful lesions", "correct": false},
      {"text": "Keratinized mucosa involvement only", "correct": false}
    ],
    "explanation": "Behçet’s syndrome involves multiple organ systems, unlike simple recurrent aphthous stomatitis which is limited to oral mucosa."
  },
// =====================================
// ULCERATIVE LESION - RIETER'S SYNDROME
// =====================================
// 292
  {
    "question": "Reiter’s syndrome is most accurately described as:",
    "answers": [
      {"text": "A chronic autoimmune disorder of the oral mucosa", "correct": false},
      {"text": "A reactive arthritis following bacterial dysentery or sexually transmitted infection", "correct": true},
      {"text": "A primary infectious disease caused by Chlamydia only", "correct": false},
      {"text": "A hereditary connective tissue disorder", "correct": false},
      {"text": "A viral disease affecting joints and eyes", "correct": false}
    ],
    "explanation": "Reiter’s syndrome, also known as reactive arthritis, is an autoimmune condition triggered by bacterial infections, commonly gastrointestinal or genitourinary, leading to arthritis and mucocutaneous manifestations."
  },
// 293
  {
    "question": "Which bacteria are most commonly associated with triggering Reiter’s syndrome?",
    "answers": [
      {"text": "Streptococcus, Staphylococcus, Enterococcus", "correct": false},
      {"text": "Shigella, Salmonella, Yersinia, Campylobacter, Clostridium", "correct": true},
      {"text": "Mycobacterium tuberculosis and Mycobacterium leprae", "correct": false},
      {"text": "Pseudomonas and Escherichia coli only", "correct": false},
      {"text": "Treponema pallidum and Neisseria gonorrhoeae", "correct": false}
    ],
    "explanation": "Reiter’s syndrome is commonly triggered by enteric bacteria such as Shigella, Salmonella, Yersinia, Campylobacter, and Clostridium species."
  },
// 294
  {
    "question": "A male patient with HLA-B27 has approximately what risk of developing Reiter’s syndrome after Shigella dysentery?",
    "answers": [
      {"text": "5%", "correct": false},
      {"text": "10%", "correct": false},
      {"text": "20%", "correct": true},
      {"text": "50%", "correct": false},
      {"text": "70%", "correct": false}
    ],
    "explanation": "HLA-B27 positive males have about a 20% risk of developing Reiter’s syndrome following Shigella infection."
  },
// 295
  {
    "question": "A 30-year-old white man develops sudden bilateral knee and ankle swelling, redness in the eyes, and dysuria 2 weeks after a gastrointestinal infection. On oral examination, you notice geographic tongue–like lesions and small painless ulcers. Which combination of signs constitutes the classic Reiter’s syndrome tetrad?",
    "answers": [
      {"text": "Oral ulcers, conjunctivitis, urethritis, arthritis", "correct": true},
      {"text": "Fever, oral ulcers, conjunctivitis, weight loss", "correct": false},
      {"text": "Arthritis, kidney involvement, oral ulcers, rash", "correct": false},
      {"text": "Oral lesions, iritis, hepatitis, urethritis", "correct": false},
      {"text": "Conjunctivitis, arthritis, oral leukoplakia, dysentery", "correct": false}
    ],
    "explanation": "The classic tetrad of Reiter’s syndrome includes arthritis, urethritis, conjunctivitis, and oral ulcers."
  },
// 296
  {
    "question": "Oral lesions in Reiter’s syndrome are described as:",
    "answers": [
      {"text": "Painful herpetic vesicles on the lips", "correct": false},
      {"text": "Relatively painless aphthous-type ulcers occurring anywhere in the mouth", "correct": true},
      {"text": "White plaques that cannot be scraped off", "correct": false},
      {"text": "Lichen planus–like lesions limited to the gingiva", "correct": false},
      {"text": "Deep necrotic ulcers with bleeding", "correct": false}
    ],
    "explanation": "Oral lesions in Reiter’s syndrome are typically painless aphthous-like ulcers that can appear anywhere in the oral cavity."
  },
// 297
  {
    "question": "A 29-year-old patient presents with pustular lesions on the palms and soles, bilateral conjunctivitis, and oligoarthritis of the lower limb joints. Which oral feature would help support the diagnosis of Reiter’s syndrome?",
    "answers": [
      {"text": "Geographic tongue–like lesions", "correct": true},
      {"text": "Oral candidiasis", "correct": false},
      {"text": "Lacy white lesions of buccal mucosa", "correct": false},
      {"text": "Herpetiform ulcers limited to gingiva", "correct": false},
      {"text": "Necrotizing ulcerative gingivitis", "correct": false}
    ],
    "explanation": "Geographic tongue–like lesions are characteristic oral findings in Reiter’s syndrome."
  },
// 298
  {
    "question": "Which laboratory finding is commonly elevated in the acute phase of Reiter’s syndrome?",
    "answers": [
      {"text": "White blood cell count", "correct": false},
      {"text": "Platelet count", "correct": false},
      {"text": "Erythrocyte sedimentation rate (ESR)", "correct": true},
      {"text": "Serum calcium", "correct": false},
      {"text": "Creatinine", "correct": false}
    ],
    "explanation": "ESR is often elevated during the acute inflammatory phase of Reiter’s syndrome."
  },
// 299
  {
    "question": "Which patient population is most commonly affected by Reiter’s syndrome?",
    "answers": [
      {"text": "Elderly Asian women", "correct": false},
      {"text": "Middle-aged African men", "correct": false},
      {"text": "White men in their third decade", "correct": true},
      {"text": "Children under 10", "correct": false},
      {"text": "Pregnant women", "correct": false}
    ],
    "explanation": "Reiter’s syndrome most commonly affects white men in their 20s and 30s."
  },
// 300
  {
    "question": "A 35-year-old man presents with recurrent arthritis of the knees and ankles, eye redness, and painless oral ulcers. He is HLA-B27 positive. Which of the following treatments is considered first-line?",
    "answers": [
      {"text": "Long-term systemic corticosteroids", "correct": false},
      {"text": "Nonsteroidal anti-inflammatory drugs (NSAIDs)", "correct": true},
      {"text": "Disease-modifying antirheumatic drugs (DMARDs)", "correct": false},
      {"text": "Antibiotics only", "correct": false},
      {"text": "Surgical joint intervention", "correct": false}
    ],
    "explanation": "NSAIDs are the first-line treatment to manage inflammation and pain in Reiter’s syndrome."
  },
// 301
  {
    "question": "A patient with Reiter’s syndrome asks about the likely course of his disease. Which is the most accurate statement?",
    "answers": [
      {"text": "It resolves within a few days and rarely recurs", "correct": false},
      {"text": "Duration varies from weeks to months, with possible recurrences", "correct": true},
      {"text": "It is lifelong with progressive joint destruction", "correct": false},
      {"text": "Oral lesions usually persist for years", "correct": false},
      {"text": "Symptoms disappear after a single course of antibiotics", "correct": false}
    ],
    "explanation": "Reiter’s syndrome typically lasts weeks to months and may recur, but often resolves without permanent joint damage."
  },
// 302
  {
    "question": "Which of the following is true regarding the oral lesions of Reiter’s syndrome?",
    "answers": [
      {"text": "Seen in nearly all patients (>90%)", "correct": false},
      {"text": "Usually painful and ulcerative", "correct": false},
      {"text": "Can resemble geographic tongue", "correct": true},
      {"text": "Limited to the gingiva only", "correct": false},
      {"text": "Indicate a fungal infection", "correct": false}
    ],
    "explanation": "Oral lesions in Reiter’s syndrome can resemble geographic tongue and are often painless."
  },
// 303
  {
    "question": "A patient develops Reiter’s syndrome after a Chlamydia infection. He complains of eye irritation, joint pain, and oral ulcers. Which of the following extraoral features is commonly observed?",
    "answers": [
      {"text": "Vasomotor abnormalities in the feet", "correct": true},
      {"text": "Hair loss and nail pitting", "correct": false},
      {"text": "Hepatomegaly and jaundice", "correct": false},
      {"text": "Pulmonary fibrosis", "correct": false},
      {"text": "Lymphadenopathy", "correct": false}
    ],
    "explanation": "Vasomotor changes such as coldness or discoloration in the feet can be seen in Reiter’s syndrome."
  },
// 304
  {
    "question": "What is the approximate prevalence of HLA-B27 positivity among Reiter’s syndrome patients?",
    "answers": [
      {"text": "10%", "correct": false},
      {"text": "30%", "correct": false},
      {"text": "50%", "correct": false},
      {"text": ">70%", "correct": true},
      {"text": "90%", "correct": false}
    ],
    "explanation": "More than 70% of patients with Reiter’s syndrome are positive for the HLA-B27 antigen."
  },
// 305
  {
    "question": "A 28-year-old man presents with acute urethritis, conjunctivitis, arthritis, and skin pustules on hands and feet. He reports minimal oral discomfort, but oral exam reveals scattered ulcers. Which characteristic makes these oral lesions distinct in Reiter’s syndrome?",
    "answers": [
      {"text": "They are deeply painful and interfere with eating", "correct": false},
      {"text": "They are relatively painless and can occur anywhere in the mouth", "correct": true},
      {"text": "They are always restricted to the tongue", "correct": false},
      {"text": "They are associated with fungal infection", "correct": false},
      {"text": "They present as vesicles only", "correct": false}
    ],
    "explanation": "Oral ulcers in Reiter’s syndrome are typically painless and can appear anywhere in the oral cavity."
  },
// 306
  {
    "question": "Which of the following statements about treatment of Reiter’s syndrome is correct?",
    "answers": [
      {"text": "NSAIDs are generally used as first-line therapy", "correct": true},
      {"text": "Systemic corticosteroids are routinely required", "correct": false},
      {"text": "Antibiotics are always curative", "correct": false},
      {"text": "Surgical treatment is necessary in most cases", "correct": false},
      {"text": "Disease is self-limiting without any therapy", "correct": false}
    ],
    "explanation": "NSAIDs are the mainstay of treatment for symptom control in Reiter’s syndrome; antibiotics treat triggering infections but do not cure the syndrome itself."
  },
// =======================================
// ULCERATIVE LESION - ERYTHEMA MULTIFORME
// =======================================
// 307
  {
    "question": "Erythema multiforme (EM) is best described as:",
    "answers": [
      {"text": "A chronic autoimmune disease affecting oral mucosa only", "correct": false},
      {"text": "An acute self-limiting hypersensitivity reaction with target skin lesions and/or oral ulcers", "correct": true},
      {"text": "A bacterial infection causing widespread mucosal necrosis", "correct": false},
      {"text": "A form of pemphigus vulgaris", "correct": false},
      {"text": "A systemic fungal infection", "correct": false}
    ],
    "explanation": "Erythema multiforme is an acute, self-limiting hypersensitivity reaction characterized by target skin lesions and/or oral ulcers, often triggered by infections or drugs."
  },
// 308
  {
    "question": "Which of the following are common triggers of ERYTHEMA MULTIFORME minor?",
    "answers": [
      {"text": "HSV infection", "correct": true},
      {"text": "Sulfonamide antibiotics", "correct": false},
      {"text": "Barbiturates", "correct": false},
      {"text": "Carbamazepine", "correct": false},
      {"text": "All of the above", "correct": false}
    ],
    "explanation": "Herpes simplex virus (HSV) infection is the most common trigger of EM minor, whereas drugs more commonly trigger EM major."
  },
// 309
  {
    "question": "Erythema multiforme major, sometimes called Stevens-Johnson syndrome, is most commonly associated with:",
    "answers": [
      {"text": "HSV infection", "correct": false},
      {"text": "Drug ingestion, such as oxicams or propionic acid derivatives", "correct": true},
      {"text": "Tuberculosis", "correct": false},
      {"text": "Aphthous ulcer recurrence", "correct": false},
      {"text": "Seasonal allergies", "correct": false}
    ],
    "explanation": "EM major (Stevens-Johnson syndrome) is most often triggered by drug ingestion, including nonsteroidal anti-inflammatory drugs like oxicams and propionic acid derivatives."
  },
// 310
  {
    "question": "A 24-year-old man presents with widespread oral ulcers affecting his lips, buccal mucosa, tongue, and palate. He also has painful crusting at the vermilion border. His parents report he recently started a new analgesic for chronic headaches. Which of the following is the most likely diagnosis?",
    "answers": [
      {"text": "Herpetic gingivostomatitis", "correct": false},
      {"text": "Erythema multiforme major (Stevens-Johnson syndrome)", "correct": true},
      {"text": "Pemphigus vulgaris", "correct": false},
      {"text": "Aphthous ulcers", "correct": false},
      {"text": "Lichen planus", "correct": false}
    ],
    "explanation": "The combination of widespread oral ulcers, crusting lips, and recent drug exposure suggests erythema multiforme major (Stevens-Johnson syndrome)."
  },
// 311
  {
    "question": "Which of the following best describes the classic cutaneous lesion of Erythema multiforme?",
    "answers": [
      {"text": "Vesiculobullous lesions confined to the trunk", "correct": false},
      {"text": "Concentric erythematous rings separated by near-normal skin (“target” or “iris” lesions)", "correct": true},
      {"text": "Linear erosions along the gingiva", "correct": false},
      {"text": "Diffuse erythema with scaling", "correct": false},
      {"text": "Single, deep necrotic ulcers", "correct": false}
    ],
    "explanation": "The hallmark skin lesion of EM is the target or iris lesion, characterized by concentric rings of erythema separated by normal skin."
  },
// 312
  {
    "question": "A patient presents with recurrent oral ulcers that are painful and sometimes widespread. He reports episodes during spring and fall. Examination shows multiple aphthous-type ulcers and erythematous patches. Which viral infection is most likely a trigger?",
    "answers": [
      {"text": "Varicella-zoster virus", "correct": false},
      {"text": "Epstein-Barr virus", "correct": false},
      {"text": "Herpes simplex virus (HSV) types 1 and 2", "correct": true},
      {"text": "Cytomegalovirus", "correct": false},
      {"text": "Influenza virus", "correct": false}
    ],
    "explanation": "HSV types 1 and 2 are common triggers of recurrent erythema multiforme, especially with oral involvement."
  },
// 313
  {
    "question": "Histopathologic examination of erythema multiforme lesions typically shows:",
    "answers": [
      {"text": "Basal and parabasal apoptotic keratinocytes with epithelial necrosis and perivascular lymphocytic infiltrates", "correct": true},
      {"text": "Full-thickness epithelial necrosis with neutrophilic abscesses", "correct": false},
      {"text": "Subepithelial clefting without inflammatory infiltrates", "correct": false},
      {"text": "Hyperkeratosis with fungal hyphae", "correct": false},
      {"text": "Granulomatous inflammation", "correct": false}
    ],
    "explanation": "Erythema multiforme lesions show basal and parabasal keratinocyte apoptosis, epithelial necrosis, and a perivascular lymphocytic infiltrate."
  },
// 314
  {
    "question": "A patient develops mild fever, headache, lymphadenopathy, and painful oral ulcers. He has no skin lesions. Which form of Erythema multiforme is most likely?",
    "answers": [
      {"text": "EM minor", "correct": true},
      {"text": "EM major", "correct": false},
      {"text": "Stevens-Johnson syndrome", "correct": false},
      {"text": "Toxic epidermal necrolysis", "correct": false},
      {"text": "Pemphigus vulgaris", "correct": false}
    ],
    "explanation": "Erythema multiforme minor often presents with oral ulcers and systemic symptoms but lacks the extensive skin involvement seen in Erythema multiforme major."
  },
// 315
  {
    "question": "A 25-year-old woman presents with these oral lesions. She reports recurrent outbreaks following HSV infections. What is the best preventive therapy?",
    "answers": [
      {"text": "Topical corticosteroids", "correct": false},
      {"text": "Oral acyclovir 400–600 mg daily", "correct": true},
      {"text": "Long-term NSAIDs", "correct": false},
      {"text": "Sulfonamide antibiotics", "correct": false},
      {"text": "Surgical excision", "correct": false}
    ],
    "explanation": "Oral acyclovir is effective in preventing HSV-triggered recurrent erythema multiforme outbreaks."
  },
// 316
  {
    "question": "Which of the following drugs has NOT been reported as a common trigger of erythema multiforme?",
    "answers": [
      {"text": "Barbiturates", "correct": false},
      {"text": "Phenytoin", "correct": false},
      {"text": "Carbamazepine", "correct": false},
      {"text": "Paracetamol (acetaminophen)", "correct": true},
      {"text": "Sulfonamides", "correct": false}
    ],
    "explanation": "Paracetamol (acetaminophen) is not commonly associated with triggering erythema multiforme."
  },
// 317
  {
    "question": "A young adult develops ocular inflammation including conjunctivitis and uveitis, along with painful oral ulcers and widespread target lesions on the skin. Which severe complication is most concerning?",
    "answers": [
      {"text": "Blindness due to ocular scarring", "correct": true},
      {"text": "Pulmonary fibrosis", "correct": false},
      {"text": "Chronic kidney disease", "correct": false},
      {"text": "Oral carcinoma", "correct": false},
      {"text": "Heart failure", "correct": false}
    ],
    "explanation": "Ocular involvement in EM can lead to scarring and blindness if not promptly treated."
  },
// 318
  {
    "question": "Which areas of the oral cavity are most frequently affected in erythema multiforme?",
    "answers": [
      {"text": "Gingiva only", "correct": false},
      {"text": "Lips, buccal mucosa, palate, tongue", "correct": true},
      {"text": "Floor of the mouth only", "correct": false},
      {"text": "Hard palate exclusively", "correct": false},
      {"text": "Retromolar area only", "correct": false}
    ],
    "explanation": "EM commonly affects multiple oral sites including lips, buccal mucosa, palate, and tongue."
  },
// 319
  {
    "question": "Erythema multiforme recurrences are often associated with:",
    "answers": [
      {"text": "Seasonal variation (spring or fall)", "correct": false},
      {"text": "Drug ingestion", "correct": false},
      {"text": "HSV infections", "correct": false},
      {"text": "All of the above", "correct": true},
      {"text": "None of the above", "correct": false}
    ],
    "explanation": "Erythema multiforme recurrences can be triggered by HSV infections, drug ingestion, and sometimes show seasonal variation."
  },
// 320
  {
    "question": "A patient presents with widespread oral ulcers, fever, and lymphadenopathy. He has multiple concentric erythematous rings on his hands. He has a history of recently taking anti-seizure medication. Which differential diagnosis is most supported?",
    "answers": [
      {"text": "Aphthous ulcers", "correct": false},
      {"text": "Pemphigus vulgaris", "correct": false},
      {"text": "Erythema multiforme major", "correct": true},
      {"text": "Erosive lichen planus", "correct": false},
      {"text": "Oral candidiasis", "correct": false}
    ],
    "explanation": "The clinical picture of widespread oral ulcers, target skin lesions, and recent drug exposure supports erythema multiforme major."
  },
// 321
  {
    "question": "Supportive measures for Erythema multiforme minor include:",
    "answers": [
      {"text": "Oral irrigation and bland mouth rinses", "correct": false},
      {"text": "Adequate fluid intake", "correct": false},
      {"text": "Antipyretics if needed", "correct": false},
      {"text": "All of the above", "correct": true},
      {"text": "None of the above", "correct": false}
    ],
    "explanation": "Supportive care for Erythema multiforme minor includes oral hygiene measures, hydration, and symptomatic treatment such as antipyretics."
  },
// ===============================================================================
// ULCERATIVE LESION - Wegener’s Granulomatosis (Granulomatosis with Polyangiitis)
// ===============================================================================
// 322
  {
    "question": "Granulomatosis with polyangiitis is best classified as which of the following conditions?",
    "answers": [
      {"text": "Autoimmune vesiculobullous disease", "correct": false},
      {"text": "Immune-mediated necrotizing vasculitis", "correct": true},
      {"text": "Chronic fungal granulomatous infection", "correct": false},
      {"text": "T-cell–mediated mucocutaneous disorder", "correct": false},
      {"text": "Hereditary connective tissue disease", "correct": false}
    ],
    "explanation": "Granulomatosis with polyangiitis (GPA) is a type of systemic vasculitis, specifically an immune-mediated necrotizing vasculitis affecting small to medium-sized blood vessels."
  },
// 323
  {
    "question": "Which classic triad of organ involvement is most characteristic of granulomatosis with polyangiitis?",
    "answers": [
      {"text": "Heart, liver, kidney", "correct": false},
      {"text": "Skin, joints, CNS", "correct": false},
      {"text": "Upper respiratory tract, lungs, kidneys", "correct": true},
      {"text": "Oral cavity, skin, eyes", "correct": false},
      {"text": "GI tract, pancreas, spleen", "correct": false}
    ],
    "explanation": "The classic triad of organ involvement in granulomatosis with polyangiitis includes the upper respiratory tract, lungs, and kidneys."
  },
// 324
  {
    "question": "The distinctive gingival manifestation known as “strawberry gingivitis” is described as:",
    "answers": [
      {"text": "Vesicular erythematous gingiva with ulceration", "correct": false},
      {"text": "Diffuse fibrotic gingival enlargement", "correct": false},
      {"text": "Painful hyperplastic granular cobblestone gingiva", "correct": true},
      {"text": "Necrotic interdental papillae with pseudomembrane", "correct": false},
      {"text": "Petechial hemorrhagic gingival lesions", "correct": false}
    ],
    "explanation": "Strawberry gingivitis, a characteristic oral manifestation of GPA, is described as painful, hyperplastic, granular, and cobblestone-like gingiva."
  },
// 325
  {
    "question": "Kidney involvement in granulomatosis with polyangiitis most commonly presents as:",
    "answers": [
      {"text": "Membranous nephropathy", "correct": false},
      {"text": "Immune complex glomerulosclerosis", "correct": false},
      {"text": "Focal necrotizing glomerulitis", "correct": true},
      {"text": "Minimal change disease", "correct": false},
      {"text": "Polycystic renal disease", "correct": false}
    ],
    "explanation": "The most common renal manifestation of GPA is focal necrotizing glomerulitis, often leading to rapidly progressive glomerulonephritis."
  },
// 326
  {
    "question": "Which antibody test provides the most specific supportive evidence for granulomatosis with polyangiitis?",
    "answers": [
      {"text": "Antinuclear antibody (ANA)", "correct": false},
      {"text": "Rheumatoid factor", "correct": false},
      {"text": "pANCA against myeloperoxidase", "correct": false},
      {"text": "cANCA confirmed by PR-3 ELISA", "correct": true},
      {"text": "Anti–double-stranded DNA", "correct": false}
    ],
    "explanation": "While pANCA can be present, cANCA (cytoplasmic antineutrophil cytoplasmic antibodies) confirmed by PR-3 (proteinase 3) ELISA is the most specific antibody test for granulomatosis with polyangiitis."
  },
// 327
  {
    "question": "Which histopathologic feature is MOST characteristic of granulomatosis with polyangiitis?",
    "answers": [
      {"text": "Caseating granulomas without vascular changes", "correct": false},
      {"text": "Noncaseating granulomas with fibrosis", "correct": false},
      {"text": "Necrotizing vasculitis with granulomatous inflammation", "correct": true},
      {"text": "Dense eosinophilic infiltrates around vessels", "correct": false},
      {"text": "Pure lymphocytic perivascular inflammation", "correct": false}
    ],
    "explanation": "The hallmark histopathologic finding in GPA is necrotizing vasculitis, often accompanied by granulomatous inflammation."
  },
// 328
  {
    "question": "Which condition is LEAST likely to be included in the differential diagnosis of palatal lesions in granulomatosis with polyangiitis?",
    "answers": [
      {"text": "Necrotizing sialometaplasia", "correct": false},
      {"text": "Squamous cell carcinoma", "correct": false},
      {"text": "Lymphoma", "correct": false},
      {"text": "Pyogenic granuloma", "correct": false},
      {"text": "Ameloblastoma", "correct": true}
    ],
    "explanation": "While GPA can cause various palatal lesions, ameloblastoma is a distinct odontogenic tumor and is least likely to be confused with GPA-related palatal manifestations."
  },
// 329
  {
    "question": "The most effective standard treatment regimen for granulomatosis with polyangiitis includes:",
    "answers": [
      {"text": "Broad-spectrum antifungal therapy", "correct": false},
      {"text": "High-dose antivirals", "correct": false},
      {"text": "Cyclophosphamide with corticosteroids", "correct": true},
      {"text": "Surgical excision alone", "correct": false},
      {"text": "Long-term NSAID therapy", "correct": false}
    ],
    "explanation": "The standard and most effective treatment for inducing remission in GPA typically involves a combination of cyclophosphamide and corticosteroids."
  },
// 330
  {
    "question": "A 42-year-old patient presents with painful granular gingival enlargement described as “strawberry gingivitis.” He reports chronic sinusitis, nasal ulcerations, epistaxis, and hematuria. Chest imaging shows multiple inflammatory lung nodules. Which is the most likely diagnosis?",
    "answers": [
      {"text": "Sarcoidosis", "correct": false},
      {"text": "Deep fungal infection", "correct": false},
      {"text": "Granulomatosis with polyangiitis", "correct": true},
      {"text": "Langerhans cell disease", "correct": false},
      {"text": "Polyarteritis nodosa", "correct": false}
    ],
    "explanation": "The combination of strawberry gingivitis, chronic sinusitis, nasal ulcerations, epistaxis, hematuria, and lung nodules strongly suggests granulomatosis with polyangiitis."
  },
// 331
  {
    "question": "A biopsy from an ulcerated maxillary sinus lesion shows granulomatous inflammation with multinucleated giant cells and small vessels demonstrating fibrinoid necrosis with mononuclear infiltrates. Which additional test would most strongly support the suspected diagnosis?",
    "answers": [
      {"text": "Serum ACE levels", "correct": false},
      {"text": "Fungal culture", "correct": false},
      {"text": "cANCA with PR-3 ELISA confirmation", "correct": true},
      {"text": "pANCA for myeloperoxidase", "correct": false},
      {"text": "EBV serology", "correct": false}
    ],
    "explanation": "The biopsy findings are suggestive of GPA. A cANCA test confirmed by PR-3 ELISA would provide the strongest serological support for this diagnosis."
  },
// 332
  {
    "question": "A patient diagnosed with granulomatosis with polyangiitis develops progressive renal impairment. Which outcome is most expected if the disease is left untreated?",
    "answers": [
      {"text": "Spontaneous remission", "correct": false},
      {"text": "Chronic mild proteinuria", "correct": false},
      {"text": "End-stage renal failure", "correct": true},
      {"text": "Nephrolithiasis", "correct": false},
      {"text": "Acute tubular necrosis recovery", "correct": false}
    ],
    "explanation": "Untreated kidney involvement in GPA, characterized by focal necrotizing glomerulitis, commonly progresses to end-stage renal failure."
  },
// 333
  {
    "question": "A 35-year-old woman presents with parotid swelling, facial edema, rhinorrhea, nasal stuffiness, and recurrent epistaxis. Oral exam shows hyperplastic granular lesions of the gingiva. Which additional organ system involvement would complete the classic disease triad?",
    "answers": [
      {"text": "Cardiac conduction defects", "correct": false},
      {"text": "Hepatic cirrhosis", "correct": false},
      {"text": "Pulmonary inflammatory lesions", "correct": true},
      {"text": "Thyroid dysfunction", "correct": false},
      {"text": "Pancreatic insufficiency", "correct": false}
    ],
    "explanation": "Given the upper respiratory and gingival manifestations, the classic triad of GPA would be completed by pulmonary inflammatory lesions."
  },
// ============================================
// ULCERATIVE LESION - SQUAMOUS CELL CARCINOMA
// ============================================
// 334
  {
    "question": "Which risk factor is MOST strongly associated with development of oral squamous cell carcinoma?",
    "answers": [
      {"text": "Mechanical trauma from dentures", "correct": false},
      {"text": "Tobacco smoking", "correct": true},
      {"text": "Epstein–Barr virus infection", "correct": false},
      {"text": "High-protein diet", "correct": false},
      {"text": "Dental amalgam exposure", "correct": false}
    ],
    "explanation": "Tobacco smoking is the most strongly associated risk factor for oral squamous cell carcinoma."
  },
// 335
  {
    "question": "Pipe smokers show a particular predilection for squamous cell carcinoma of the:",
    "answers": [
      {"text": "Hard palate", "correct": false},
      {"text": "Floor of mouth", "correct": false},
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Lower lip", "correct": true},
      {"text": "Soft palate", "correct": false}
    ],
    "explanation": "Pipe smokers have a predilection for squamous cell carcinoma of the lower lip."
  },
// 336
  {
    "question": "Which viral agents are most strongly implicated in a subset of oral squamous cell carcinomas?",
    "answers": [
      {"text": "HPV 6 and 11", "correct": false},
      {"text": "HSV-1 and HSV-2", "correct": false},
      {"text": "HPV 16 and 18", "correct": true},
      {"text": "EBV and CMV", "correct": false},
      {"text": "HHV-8", "correct": false}
    ],
    "explanation": "HPV types 16 and 18 are strongly implicated in a subset of oral squamous cell carcinomas."
  },
// 337
  {
    "question": "The only convincing nutritional risk factor associated with oral cancer is:",
    "answers": [
      {"text": "Vitamin C deficiency", "correct": false},
      {"text": "Zinc deficiency", "correct": false},
      {"text": "Iron deficiency in Plummer–Vinson syndrome", "correct": true},
      {"text": "Folate deficiency", "correct": false},
      {"text": "Protein–energy malnutrition", "correct": false}
    ],
    "explanation": "Iron deficiency in Plummer–Vinson syndrome is a recognized nutritional risk factor for oral cancer."
  },
// 338
  {
    "question": "The MOST important prognostic indicator in oral squamous cell carcinoma is:",
    "answers": [
      {"text": "Patient age", "correct": false},
      {"text": "Tumor histologic grade", "correct": false},
      {"text": "Clinical stage of disease", "correct": true},
      {"text": "Tumor location", "correct": false},
      {"text": "Presence of keratin pearls", "correct": false}
    ],
    "explanation": "Clinical stage of disease is the most important prognostic indicator in oral squamous cell carcinoma."
  },
// 339
  {
    "question": "The most common intraoral site of squamous cell carcinoma is the:",
    "answers": [
      {"text": "Floor of mouth", "correct": false},
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Gingiva", "correct": false},
      {"text": "Tongue", "correct": true},
      {"text": "Hard palate", "correct": false}
    ],
    "explanation": "The tongue is the most common intraoral site for squamous cell carcinoma."
  },
// 340
  {
    "question": "The most common location of tongue carcinoma is the:",
    "answers": [
      {"text": "Ventral surface", "correct": false},
      {"text": "Tip of tongue", "correct": false},
      {"text": "Posterior-lateral border", "correct": true},
      {"text": "Dorsal midline", "correct": false},
      {"text": "Base near epiglottis", "correct": false}
    ],
    "explanation": "The posterior-lateral border is the most common location for tongue carcinoma."
  },
// 341
  {
    "question": "Which TNM classification corresponds to Stage I oral squamous cell carcinoma?",
    "answers": [
      {"text": "T1 N0 M0", "correct": true},
      {"text": "T2 N0 M0", "correct": false},
      {"text": "T3 N0 M0", "correct": false},
      {"text": "T1 N1 M0", "correct": false},
      {"text": "T4 N0 M0", "correct": false}
    ],
    "explanation": "Stage I oral squamous cell carcinoma corresponds to T1 N0 M0 classification."
  },
// 342
  {
    "question": "The surgical removal of oral SCC in bone with a 2-cm margin of normal-appearing bone is termed:",
    "answers": [
      {"text": "Wide local excision", "correct": false},
      {"text": "Marginal mandibulectomy", "correct": false},
      {"text": "Segmental resection", "correct": true},
      {"text": "Composite resection", "correct": false},
      {"text": "Curettage", "correct": false}
    ],
    "explanation": "Segmental resection involves removal of oral SCC in bone with a 2-cm margin of normal-appearing bone."
  },
// 343
  {
    "question": "The most common selective neck dissection for an N0 neck with high occult risk is:",
    "answers": [
      {"text": "Radical neck dissection", "correct": false},
      {"text": "Modified radical neck dissection", "correct": false},
      {"text": "Supraomohyoid neck dissection", "correct": true},
      {"text": "Posterolateral neck dissection", "correct": false},
      {"text": "Extended neck dissection", "correct": false}
    ],
    "explanation": "Supraomohyoid neck dissection is the most common selective neck dissection for an N0 neck with high occult risk."
  },
// 344
  {
    "question": "A 62-year-old man with a long history of pipe smoking presents with a chronic nonhealing ulcer on the vermilion border. The lesion is slow-growing. Which feature is MOST consistent with this malignancy?",
    "answers": [
      {"text": "Upper lip location with aggressive spread", "correct": false},
      {"text": "Lower lip lesion with favorable prognosis", "correct": true},
      {"text": "Rapid metastasis to cervical nodes", "correct": false},
      {"text": "Common bilateral nodal spread", "correct": false},
      {"text": "Strong association with HPV infection", "correct": false}
    ],
    "explanation": "Lower lip lesions in pipe smokers tend to have a favorable prognosis and slow growth."
  },
// 345
  {
    "question": "A 58-year-old man presents with an asymptomatic indurated ulcer on the posterior-lateral border of the tongue. Imaging reveals ipsilateral cervical lymph node metastasis. Which lymph nodes are most likely involved first?",
    "answers": [
      {"text": "Submental nodes", "correct": false},
      {"text": "Parotid nodes", "correct": false},
      {"text": "Retropharyngeal nodes", "correct": false},
      {"text": "Submandibular and jugulodigastric nodes", "correct": true},
      {"text": "Supraclavicular nodes", "correct": false}
    ],
    "explanation": "Submandibular and jugulodigastric nodes are the first lymph nodes involved in metastasis from the posterior-lateral tongue."
  },
// 346
  {
    "question": "A painless, indurated ulcer on the floor of the mouth in a chronic alcoholic smoker most commonly demonstrates which clinical behavior?",
    "answers": [
      {"text": "Rare nodal metastasis", "correct": false},
      {"text": "Predominance in young females", "correct": false},
      {"text": "Frequent submandibular lymph node metastasis", "correct": true},
      {"text": "Strong association with UV exposure", "correct": false},
      {"text": "Rapid spontaneous regression", "correct": false}
    ],
    "explanation": "Floor of mouth SCC in chronic alcoholic smokers frequently metastasizes to submandibular lymph nodes."
  },
// 347
  {
    "question": "A broad-based, wart-like, slow-growing oral lesion with excellent prognosis and rare metastasis is most consistent with:",
    "answers": [
      {"text": "Basaloid squamous carcinoma", "correct": false},
      {"text": "Spindle cell carcinoma", "correct": false},
      {"text": "Verrucous carcinoma", "correct": true},
      {"text": "Papillary squamous carcinoma", "correct": false},
      {"text": "Adenosquamous carcinoma", "correct": false}
    ],
    "explanation": "Verrucous carcinoma is a slow-growing, wart-like lesion with excellent prognosis and rare metastasis."
  },
// 348
  {
    "question": "A patient undergoes bilateral neck dissections for a midline oral cancer. Preservation of at least one internal jugular vein is essential to prevent:",
    "answers": [
      {"text": "Carotid artery rupture", "correct": false},
      {"text": "Air embolism", "correct": false},
      {"text": "Superior vena cava syndrome", "correct": true},
      {"text": "Facial nerve palsy", "correct": false},
      {"text": "Mandibular necrosis", "correct": false}
    ],
    "explanation": "Preserving at least one internal jugular vein during bilateral neck dissection prevents superior vena cava syndrome."
  },
// 349
  {
    "question": "A patient with oral SCC is planned for radiotherapy. Several teeth are periodontally compromised and nonrestorable. What is the best management?",
    "answers": [
      {"text": "Retain teeth and monitor", "correct": false},
      {"text": "Extract after radiotherapy", "correct": false},
      {"text": "Extract before radiotherapy", "correct": true},
      {"text": "Perform endodontic therapy only", "correct": false},
      {"text": "Delay cancer treatment", "correct": false}
    ],
    "explanation": "Nonrestorable teeth should be extracted before radiotherapy to reduce complications."
  },
// 350
  {
    "question": "A radiotherapy plan aims to spare the parotid gland and uninvolved oral tissues while maximizing tumor dose using variable beam intensity. Which modality is described?",
    "answers": [
      {"text": "Conventional EBRT", "correct": false},
      {"text": "IMRT", "correct": true},
      {"text": "Brachytherapy", "correct": false},
      {"text": "Proton beam therapy", "correct": false},
      {"text": "Stereotactic radiosurgery", "correct": false}
    ],
    "explanation": "Intensity-modulated radiotherapy (IMRT) allows sparing of normal tissues while delivering high tumor doses."
  },
// 351
  {
    "question": "A tumor measures 3 cm in greatest dimension with no nodal or distant metastasis. What is the TNM classification?",
    "answers": [
      {"text": "T1 N0 M0", "correct": false},
      {"text": "T2 N0 M0", "correct": true},
      {"text": "T3 N0 M0", "correct": false},
      {"text": "T2 N1 M0", "correct": false},
      {"text": "T4 N0 M0", "correct": false}
    ],
    "explanation": "A 3 cm tumor without nodal or distant metastasis corresponds to T2 N0 M0 classification."
  },
// ==================================================
// ULCERATIVE LESION - CARCINOMA OF THE MAXILLA SINUS
// ==================================================
// 352
  {
    "question": "The etiology of carcinoma of the maxillary sinus is:",
    "answers": [
      {"text": "Viral infection", "correct": false},
      {"text": "Occupational dust exposure", "correct": false},
      {"text": "Chronic fungal infection", "correct": false},
      {"text": "Unknown", "correct": true},
      {"text": "Tobacco-specific carcinogens", "correct": false}
    ],
    "explanation": "The exact etiology of carcinoma of the maxillary sinus remains unknown."
  },
// 353
  {
    "question": "Carcinoma of the maxillary sinus most commonly affects:",
    "answers": [
      {"text": "Children under 10 years", "correct": false},
      {"text": "Adolescents", "correct": false},
      {"text": "Adults under 30 years", "correct": false},
      {"text": "Patients older than 40 years", "correct": true},
      {"text": "Elderly patients older than 80 years only", "correct": false}
    ],
    "explanation": "Maxillary sinus carcinoma most commonly affects patients older than 40 years."
  },
// 354
  {
    "question": "Which histopathologic type is most common in maxillary sinus carcinoma?",
    "answers": [
      {"text": "Adenocarcinoma", "correct": false},
      {"text": "Lymphoma", "correct": false},
      {"text": "Squamous cell carcinoma", "correct": true},
      {"text": "Mucoepidermoid carcinoma", "correct": false},
      {"text": "Sarcoma", "correct": false}
    ],
    "explanation": "Squamous cell carcinoma is the most common histopathologic type in maxillary sinus carcinoma."
  },
// 355
  {
    "question": "Toothache associated with maxillary sinus malignancy most commonly results from involvement of the:",
    "answers": [
      {"text": "Inferior alveolar nerve", "correct": false},
      {"text": "Mental nerve", "correct": false},
      {"text": "Nasopalatine nerve", "correct": false},
      {"text": "Superior alveolar nerve", "correct": true},
      {"text": "Lingual nerve", "correct": false}
    ],
    "explanation": "Toothache in maxillary sinus malignancy is commonly due to involvement of the superior alveolar nerve."
  },
// 356
  {
    "question": "Which dental finding is MOST suggestive of alveolar invasion by maxillary sinus carcinoma?",
    "answers": [
      {"text": "Generalized gingivitis", "correct": false},
      {"text": "Tooth discoloration", "correct": false},
      {"text": "Vertical tooth mobility", "correct": true},
      {"text": "Enamel hypoplasia", "correct": false},
      {"text": "Attrition", "correct": false}
    ],
    "explanation": "Vertical tooth mobility is a key dental sign suggestive of alveolar invasion by maxillary sinus carcinoma."
  },
// 357
  {
    "question": "Failure of a tooth socket to heal following extraction should raise suspicion for:",
    "answers": [
      {"text": "Dry socket", "correct": false},
      {"text": "Chronic osteomyelitis", "correct": false},
      {"text": "Poor oral hygiene", "correct": false},
      {"text": "Tumor involvement", "correct": true},
      {"text": "Alveolar bone fracture", "correct": false}
    ],
    "explanation": "Non-healing extraction sockets may indicate tumor involvement in the maxillary region."
  },
// 358
  {
    "question": "Paresthesia in the maxillary region should be considered:",
    "answers": [
      {"text": "A common benign neuralgia", "correct": false},
      {"text": "A sign of sinus infection", "correct": false},
      {"text": "A temporary anesthetic complication", "correct": false},
      {"text": "An ominous sign of possible malignancy", "correct": true},
      {"text": "A symptom of TMJ disorder", "correct": false}
    ],
    "explanation": "Paresthesia in the maxillary region is an ominous sign that may indicate malignancy."
  },
// 359
  {
    "question": "The primary treatment approach for maxillary sinus carcinoma typically involves:",
    "answers": [
      {"text": "Surgery alone", "correct": false},
      {"text": "Chemotherapy alone", "correct": false},
      {"text": "Radiation alone", "correct": false},
      {"text": "Radiation followed by surgery", "correct": true},
      {"text": "Immunotherapy only", "correct": false}
    ],
    "explanation": "The standard treatment for maxillary sinus carcinoma usually involves radiation therapy followed by surgery."
  },
// 360
  {
    "question": "A 58-year-old man with a history of chronic sinusitis reports dull facial pain that has progressed to severe pain. He complains of persistent maxillary toothache, but dental examination reveals no odontogenic cause. What is the most likely explanation?",
    "answers": [
      {"text": "Trigeminal neuralgia", "correct": false},
      {"text": "Referred pain from temporomandibular disorder", "correct": false},
      {"text": "Neoplastic involvement of the superior alveolar nerve", "correct": true},
      {"text": "Acute pulpitis of posterior teeth", "correct": false},
      {"text": "Psychogenic pain", "correct": false}
    ],
    "explanation": "Persistent maxillary toothache without dental cause in a patient with sinusitis may indicate neoplastic involvement of the superior alveolar nerve."
  },
// 361
  {
    "question": "A patient presents with newly developed malocclusion, displacement of maxillary posterior teeth, and vertical mobility of several teeth. Which condition should be most strongly suspected?",
    "answers": [
      {"text": "Advanced periodontitis", "correct": false},
      {"text": "Bruxism-related trauma", "correct": false},
      {"text": "Maxillary sinus carcinoma with alveolar invasion", "correct": true},
      {"text": "Osteoporosis", "correct": false},
      {"text": "Periapical abscess", "correct": false}
    ],
    "explanation": "Malocclusion, tooth displacement, and mobility suggest alveolar invasion by maxillary sinus carcinoma."
  },
// 362
  {
    "question": "A nonhealing extraction site in the maxillary posterior region persists for several weeks despite appropriate care. Which underlying condition must be ruled out?",
    "answers": [
      {"text": "Alveolar osteitis", "correct": false},
      {"text": "Fungal sinusitis", "correct": false},
      {"text": "Osteoradionecrosis", "correct": false},
      {"text": "Maxillary sinus malignancy", "correct": true},
      {"text": "Chronic periapical granuloma", "correct": false}
    ],
    "explanation": "Persistent nonhealing extraction sites in the maxillary posterior region may indicate underlying maxillary sinus malignancy."
  },
// 363
  {
    "question": "A palatal mass is detected in a patient suspected of having an antral malignancy. Which additional diagnosis should be strongly considered?",
    "answers": [
      {"text": "Pleomorphic adenoma", "correct": false},
      {"text": "Minor salivary gland adenocarcinoma", "correct": true},
      {"text": "Odontoma", "correct": false},
      {"text": "Ameloblastoma", "correct": false},
      {"text": "Torus palatinus", "correct": false}
    ],
    "explanation": "Minor salivary gland adenocarcinoma should be considered in the differential diagnosis of a palatal mass in suspected antral malignancy."
  },
// 364
  {
    "question": "Before confirming a diagnosis of antral carcinoma presenting with oral symptoms, the clinician must first:",
    "answers": [
      {"text": "Order PET imaging", "correct": false},
      {"text": "Begin empirical antibiotics", "correct": false},
      {"text": "Rule out dental origin", "correct": true},
      {"text": "Perform sinus surgery", "correct": false},
      {"text": "Start radiotherapy", "correct": false}
    ],
    "explanation": "Dental causes must be ruled out before confirming antral carcinoma diagnosis in patients with oral symptoms."
  },
// 365
  {
    "question": "A 65-year-old man is diagnosed with carcinoma of the maxillary sinus. What is the general prognosis?",
    "answers": [
      {"text": "Excellent", "correct": false},
      {"text": "Very favorable", "correct": false},
      {"text": "Fair at best", "correct": true},
      {"text": "Uniformly fatal within 1 year", "correct": false},
      {"text": "Excellent with antibiotics", "correct": false}
    ],
    "explanation": "The prognosis for maxillary sinus carcinoma is generally fair at best."
  },
// =========================================
// ULCERATIVE LESION - BASAL CELL CARCINOMA 
// =========================================
// 366
  {
    "question": "Basal cell carcinoma is best described as:",
    "answers": [
      {"text": "The most common malignancy of mucosal epithelium", "correct": false},
      {"text": "The most prevalent cancer of the skin and head & neck", "correct": true},
      {"text": "A highly metastatic cutaneous sarcoma", "correct": false},
      {"text": "A tumor of melanocytic origin", "correct": false},
      {"text": "A malignancy primarily affecting adolescents", "correct": false}
    ],
    "explanation": "Basal cell carcinoma is the most prevalent cancer of the skin and head & neck region."
  },
// 367
  {
    "question": "Basal cell carcinoma most commonly arises from:",
    "answers": [
      {"text": "Melanocytes", "correct": false},
      {"text": "Langerhans cells", "correct": false},
      {"text": "Dermal fibroblasts", "correct": false},
      {"text": "Epidermal basal cells", "correct": true},
      {"text": "Sebaceous glands", "correct": false}
    ],
    "explanation": "Basal cell carcinoma originates from epidermal basal cells."
  },
// 368
  {
    "question": "Basal cell carcinoma most frequently occurs on:",
    "answers": [
      {"text": "Hair-bearing scalp", "correct": false},
      {"text": "Mucous membranes", "correct": false},
      {"text": "Sun-exposed, non–hair bearing skin", "correct": true},
      {"text": "Palmar and plantar skin", "correct": false},
      {"text": "Nail beds", "correct": false}
    ],
    "explanation": "Basal cell carcinoma most commonly occurs on sun-exposed, non–hair bearing skin."
  },
// 369
  {
    "question": "Which clinical description is MOST characteristic of classic basal cell carcinoma?",
    "answers": [
      {"text": "Rapidly enlarging hemorrhagic mass", "correct": false},
      {"text": "Indurated pearly papule with surface telangiectasia", "correct": true},
      {"text": "Diffuse erythematous vesiculobullous eruption", "correct": false},
      {"text": "Painful ulcer with rolled erythematous margins", "correct": false},
      {"text": "Pigmented macule with irregular borders", "correct": false}
    ],
    "explanation": "Classic basal cell carcinoma presents as an indurated pearly papule with surface telangiectasia."
  },
// 370
  {
    "question": "The form of basal cell carcinoma that appears as a scaly erythematous lesion flush with the skin is the:",
    "answers": [
      {"text": "Noduloulcerative form", "correct": false},
      {"text": "Pigmented form", "correct": false},
      {"text": "Superficial form", "correct": true},
      {"text": "Fibrosing form", "correct": false},
      {"text": "Infiltrative form", "correct": false}
    ],
    "explanation": "The superficial form of basal cell carcinoma appears as a scaly erythematous lesion flush with the skin."
  },
// 371
  {
    "question": "A yellowish indurated plaque resembling a slowly enlarging scar without prior trauma is characteristic of which subtype?",
    "answers": [
      {"text": "Pigmented basal cell carcinoma", "correct": false},
      {"text": "Noduloulcerative basal cell carcinoma", "correct": false},
      {"text": "Superficial basal cell carcinoma", "correct": false},
      {"text": "Fibrosing basal cell carcinoma", "correct": true},
      {"text": "Metatypical basal cell carcinoma", "correct": false}
    ],
    "explanation": "Fibrosing basal cell carcinoma presents as a yellowish indurated plaque resembling a scar."
  },
// 372
  {
    "question": "Which statement regarding basal cell carcinoma behavior is MOST accurate?",
    "answers": [
      {"text": "Rapid growth with early metastasis", "correct": false},
      {"text": "Frequently spreads via lymphatics", "correct": false},
      {"text": "Slow-growing and locally destructive", "correct": true},
      {"text": "Spontaneously regresses in most cases", "correct": false},
      {"text": "Primarily invades bone marrow", "correct": false}
    ],
    "explanation": "Basal cell carcinoma is typically slow-growing and locally destructive but rarely metastasizes."
  },
// 373
  {
    "question": "Histopathologically, basal cell carcinoma is characterized by:",
    "answers": [
      {"text": "Sheets of pleomorphic keratinocytes", "correct": false},
      {"text": "Nests and cords of cuboidal cells from basal epidermis", "correct": true},
      {"text": "Malignant spindle cells in fascicles", "correct": false},
      {"text": "Atypical melanocytes along dermoepidermal junction", "correct": false},
      {"text": "Keratin pearl formation", "correct": false}
    ],
    "explanation": "Basal cell carcinoma shows nests and cords of cuboidal cells originating from the basal epidermis."
  },
// 374
  {
    "question": "Which condition is associated with multiple basal cell carcinomas, odontogenic keratocysts, and skeletal abnormalities?",
    "answers": [
      {"text": "Peutz–Jeghers syndrome", "correct": false},
      {"text": "Xeroderma pigmentosum", "correct": false},
      {"text": "Nevoid basal cell carcinoma syndrome", "correct": true},
      {"text": "Cowden syndrome", "correct": false},
      {"text": "Gardner syndrome", "correct": false}
    ],
    "explanation": "Nevoid basal cell carcinoma syndrome is characterized by multiple basal cell carcinomas, odontogenic keratocysts, and skeletal abnormalities."
  },
// 375
  {
    "question": "Which treatment modality is specifically designed for microscopically guided tumor margin control?",
    "answers": [
      {"text": "Cryosurgery", "correct": false},
      {"text": "Electrosurgery", "correct": false},
      {"text": "Conventional scalpel excision", "correct": false},
      {"text": "Mohs’ microscopically guided surgery", "correct": true},
      {"text": "Laser ablation", "correct": false}
    ],
    "explanation": "Mohs’ microscopically guided surgery is designed for precise tumor margin control."
  },
// 376
  {
    "question": "A 72-year-old man presents with a slowly enlarging pearly nodule on the lateral nose. Fine telangiectatic vessels are visible on its surface. The center shows ulceration with crusting. What is the most likely diagnosis?",
    "answers": [
      {"text": "Malignant melanoma", "correct": false},
      {"text": "Squamous cell carcinoma", "correct": false},
      {"text": "Basal cell carcinoma", "correct": true},
      {"text": "Keratoacanthoma", "correct": false},
      {"text": "Sebaceous carcinoma", "correct": false}
    ],
    "explanation": "The described lesion is characteristic of basal cell carcinoma."
  },
// 377
  {
    "question": "A darkly pigmented lesion on the cheek resembles a noduloulcerative skin tumor but shows melanin deposition at the periphery. Which variant is most consistent with this presentation?",
    "answers": [
      {"text": "Superficial basal cell carcinoma", "correct": false},
      {"text": "Fibrosing basal cell carcinoma", "correct": false},
      {"text": "Pigmented basal cell carcinoma", "correct": true},
      {"text": "Infiltrative squamous carcinoma", "correct": false},
      {"text": "Lentigo maligna", "correct": false}
    ],
    "explanation": "Pigmented basal cell carcinoma shows melanin deposition and can resemble noduloulcerative tumors."
  },
// 378
  {
    "question": "A patient presents with a flat, scaly, erythematous patch on sun-exposed facial skin that resembles an atrophic scar. Which subtype of basal cell carcinoma is most likely?",
    "answers": [
      {"text": "Noduloulcerative", "correct": false},
      {"text": "Pigmented", "correct": false},
      {"text": "Superficial", "correct": true},
      {"text": "Fibrosing", "correct": false},
      {"text": "Keratotic", "correct": false}
    ],
    "explanation": "The superficial subtype of basal cell carcinoma presents as a flat, scaly erythematous patch."
  },
// 379
  {
    "question": "A slow-growing, locally destructive skin tumor is diagnosed. The patient asks about spread to distant organs. What is the most appropriate response?",
    "answers": [
      {"text": "High risk of distant metastasis", "correct": false},
      {"text": "Common lymph node spread", "correct": false},
      {"text": "Rarely metastatic with excellent prognosis", "correct": true},
      {"text": "Requires immediate chemotherapy", "correct": false},
      {"text": "Frequently fatal within 1 year", "correct": false}
    ],
    "explanation": "Basal cell carcinoma rarely metastasizes and generally has an excellent prognosis."
  },
// 380
  {
    "question": "A young adult presents with multiple basal cell carcinomas along with jaw cysts and skeletal anomalies. Which additional finding is most likely?",
    "answers": [
      {"text": "Multiple odontogenic keratocysts", "correct": true},
      {"text": "Recurrent aphthous ulcers", "correct": false},
      {"text": "Salivary gland enlargement", "correct": false},
      {"text": "Diffuse mucosal pigmentation", "correct": false},
      {"text": "Early tooth exfoliation", "correct": false}
    ],
    "explanation": "Multiple odontogenic keratocysts are a common feature in nevoid basal cell carcinoma syndrome."
  },
// ==============================================================================
// RED-BLUE LESION - Congenital Hemangiomas and Congenital Vascular Malformations 
// ==============================================================================
// 381
  {
    "question": "Congenital hemangiomas are best defined as:",
    "answers": [
      {"text": "Reactive inflammatory vascular lesions", "correct": false},
      {"text": "Benign neoplasms of proliferating endothelial cells", "correct": true},
      {"text": "Malignant vascular tumors", "correct": false},
      {"text": "Developmental epithelial malformations", "correct": false},
      {"text": "Lymphatic drainage disorders", "correct": false}
    ],
    "explanation": "Congenital hemangiomas are benign neoplasms characterized by proliferating endothelial cells."
  },
// 382
  {
    "question": "Congenital vascular malformations primarily result from:",
    "answers": [
      {"text": "Endothelial cell hyperplasia", "correct": false},
      {"text": "Chronic vascular inflammation", "correct": false},
      {"text": "Abnormal blood vessel morphogenesis", "correct": true},
      {"text": "Postnatal vascular trauma", "correct": false},
      {"text": "Viral endothelial transformation", "correct": false}
    ],
    "explanation": "Congenital vascular malformations arise due to abnormal blood vessel morphogenesis during development."
  },
// 383
  {
    "question": "The traditional microscopic subtypes of congenital hemangiomas are based on differences in:",
    "answers": [
      {"text": "Cellular atypia", "correct": false},
      {"text": "Vessel diameter", "correct": true},
      {"text": "Mitotic activity", "correct": false},
      {"text": "Degree of pigmentation", "correct": false},
      {"text": "Lymphatic involvement", "correct": false}
    ],
    "explanation": "Microscopic subtypes of congenital hemangiomas are classified based on vessel diameter."
  },
// 384
  {
    "question": "Which feature most strongly distinguishes vascular malformations from hemangiomas?",
    "answers": [
      {"text": "Female predominance", "correct": false},
      {"text": "Red-to-blue coloration", "correct": false},
      {"text": "Presence at birth", "correct": false},
      {"text": "Growth with the patient and lack of involution", "correct": true},
      {"text": "Occurrence on oral mucosa", "correct": false}
    ],
    "explanation": "Vascular malformations grow proportionally with the patient and do not involute, unlike hemangiomas."
  },
// 385
  {
    "question": "A bruit or thrill on auscultation is most characteristic of:",
    "answers": [
      {"text": "Capillary hemangioma", "correct": false},
      {"text": "Cavernous hemangioma", "correct": false},
      {"text": "Vascular malformation with arteriovenous shunt", "correct": true},
      {"text": "Pyogenic granuloma", "correct": false},
      {"text": "Lymphangioma", "correct": false}
    ],
    "explanation": "A bruit or thrill indicates turbulent blood flow, characteristic of vascular malformations with arteriovenous shunts."
  },
// 386
  {
    "question": "Lesions involving bone are more likely to represent:",
    "answers": [
      {"text": "Capillary hemangiomas", "correct": false},
      {"text": "Cavernous hemangiomas", "correct": false},
      {"text": "Congenital vascular malformations", "correct": true},
      {"text": "Reactive vascular hyperplasia", "correct": false},
      {"text": "Peripheral giant cell granulomas", "correct": false}
    ],
    "explanation": "Congenital vascular malformations are more likely to involve bone compared to hemangiomas."
  },
// 387
  {
    "question": "The most common intraoral sites for congenital vascular lesions include the:",
    "answers": [
      {"text": "Hard palate and gingiva", "correct": false},
      {"text": "Lips, tongue, and buccal mucosa", "correct": true},
      {"text": "Floor of mouth and retromolar pad", "correct": false},
      {"text": "Soft palate and tonsillar pillars", "correct": false},
      {"text": "Alveolar ridge only", "correct": false}
    ],
    "explanation": "Lips, tongue, and buccal mucosa are the most common intraoral sites for congenital vascular lesions."
  },
// 388
  {
    "question": "Radiographically, vascular lesions of the jaws most commonly present as:",
    "answers": [
      {"text": "Mixed radiopaque–radiolucent lesion", "correct": false},
      {"text": "Ill-defined radiopacity", "correct": false},
      {"text": "Radiolucency with honeycomb pattern and distinct margins", "correct": true},
      {"text": "Sunburst periosteal reaction", "correct": false},
      {"text": "Ground-glass appearance", "correct": false}
    ],
    "explanation": "Vascular lesions of the jaws often show a radiolucent honeycomb pattern with distinct margins on radiographs."
  },
// 389
  {
    "question": "Which syndrome is associated with segmental facial hemangiomas and anomalies of the eye, heart, and posterior cranial fossa?",
    "answers": [
      {"text": "Sturge–Weber syndrome", "correct": false},
      {"text": "Osler–Weber–Rendu syndrome", "correct": false},
      {"text": "PHACE syndrome", "correct": true},
      {"text": "Gorlin syndrome", "correct": false},
      {"text": "Klippel–Trénaunay syndrome", "correct": false}
    ],
    "explanation": "PHACE syndrome includes segmental facial hemangiomas and anomalies of the eye, heart, and posterior cranial fossa."
  },
// 390
  {
    "question": "A nonselective beta-adrenergic blocker shown to be effective in treatment of congenital hemangiomas is:",
    "answers": [
      {"text": "Atenolol", "correct": false},
      {"text": "Propranolol", "correct": true},
      {"text": "Metoprolol", "correct": false},
      {"text": "Labetalol", "correct": false},
      {"text": "Carvedilol", "correct": false}
    ],
    "explanation": "Propranolol, a nonselective beta-blocker, is effective in treating congenital hemangiomas."
  },
// 391
  {
    "question": "A newborn female presents with a bright red vascular lesion on the lip that enlarges rapidly during infancy. The lesion later regresses spontaneously. What is the most likely diagnosis?",
    "answers": [
      {"text": "Vascular malformation", "correct": false},
      {"text": "Capillary hemangioma", "correct": true},
      {"text": "Arteriovenous malformation", "correct": false},
      {"text": "Lymphangioma", "correct": false},
      {"text": "Pyogenic granuloma", "correct": false}
    ],
    "explanation": "Capillary hemangiomas typically enlarge rapidly in infancy and regress spontaneously."
  },
// 392
  {
    "question": "A child presents with a persistent bluish lesion of the tongue that enlarges proportionally with growth. Auscultation reveals a bruit. Which diagnosis is most consistent?",
    "answers": [
      {"text": "Cavernous hemangioma", "correct": false},
      {"text": "Capillary hemangioma", "correct": false},
      {"text": "Vascular malformation", "correct": true},
      {"text": "Hematoma", "correct": false},
      {"text": "Mucocele", "correct": false}
    ],
    "explanation": "Vascular malformations grow proportionally with the patient and may present with bruit due to arteriovenous shunting."
  },
// 393
  {
    "question": "A compressible red-blue nodular lesion on the buccal mucosa blanches with pressure. This clinical response occurs because:",
    "answers": [
      {"text": "The lesion contains lymphatic fluid", "correct": false},
      {"text": "Blood is displaced from vascular spaces", "correct": true},
      {"text": "Surface epithelium becomes ischemic", "correct": false},
      {"text": "The lesion is keratinized", "correct": false},
      {"text": "Capillaries undergo vasospasm", "correct": false}
    ],
    "explanation": "Blanching occurs because blood is displaced from the vascular spaces when pressure is applied."
  },
// 394
  {
    "question": "A mandibular radiograph shows a well-defined radiolucent lesion with a honeycomb pattern. Which underlying condition is most likely?",
    "answers": [
      {"text": "Odontogenic keratocyst", "correct": false},
      {"text": "Central giant cell granuloma", "correct": false},
      {"text": "Congenital vascular malformation", "correct": true},
      {"text": "Ameloblastoma", "correct": false},
      {"text": "Traumatic bone cyst", "correct": false}
    ],
    "explanation": "Congenital vascular malformations often present as well-defined radiolucent lesions with a honeycomb pattern."
  },
// 395
  {
    "question": "A patient presents with multiple cavernous hemangiomas on the skin and throughout the gastrointestinal tract, including oral mucosa. Which condition is most consistent with these findings?",
    "answers": [
      {"text": "PHACE syndrome", "correct": false},
      {"text": "Gorlin syndrome", "correct": false},
      {"text": "Blue rubber bleb nevus syndrome", "correct": true},
      {"text": "Sturge–Weber syndrome", "correct": false},
      {"text": "Ehlers–Danlos syndrome", "correct": false}
    ],
    "explanation": "Blue rubber bleb nevus syndrome is characterized by multiple cavernous hemangiomas in skin and GI tract."
  },
// 396
  {
    "question": "During surgical planning, a vascular lesion is noted to be poorly circumscribed, difficult to resect, and prone to significant hemorrhage. Which diagnosis is most likely?",
    "answers": [
      {"text": "Capillary hemangioma", "correct": false},
      {"text": "Cavernous hemangioma", "correct": false},
      {"text": "Congenital vascular malformation", "correct": true},
      {"text": "Pyogenic granuloma", "correct": false},
      {"text": "Peripheral ossifying fibroma", "correct": false}
    ],
    "explanation": "Congenital vascular malformations are often poorly circumscribed and prone to significant bleeding during surgery."
  },
// ==============================================================================
// RED-BLUE LESION - Encephalotrigeminal Angiomatosis (Sturge-Weber Syndrome) 
// ==============================================================================
// 397
  {
    "question": "Sturge–Weber syndrome is best classified as a:",
    "answers": [
      {"text": "Hereditary metabolic disorder", "correct": false},
      {"text": "Inherited chromosomal anomaly", "correct": false},
      {"text": "Noninherited neurocutaneous syndrome", "correct": true},
      {"text": "Autoimmune vasculitis", "correct": false},
      {"text": "Congenital epithelial dysplasia", "correct": false}
    ],
    "explanation": "Sturge–Weber syndrome is a noninherited neurocutaneous syndrome characterized by vascular malformations."
  },
// 398
  {
    "question": "The intracranial vascular malformations in Sturge–Weber syndrome most commonly involve the:",
    "answers": [
      {"text": "Dura mater", "correct": false},
      {"text": "Cerebellum", "correct": false},
      {"text": "Leptomeninges of the cerebral cortex", "correct": true},
      {"text": "Circle of Willis", "correct": false},
      {"text": "Cavernous sinus", "correct": false}
    ],
    "explanation": "Intracranial vascular malformations in Sturge–Weber syndrome typically involve the leptomeninges of the cerebral cortex."
  },
// 399
  {
    "question": "The characteristic facial lesion in Sturge–Weber syndrome is commonly known as:",
    "answers": [
      {"text": "Strawberry nevus", "correct": false},
      {"text": "Spider angioma", "correct": false},
      {"text": "Port-wine stain (nevus flammeus)", "correct": true},
      {"text": "Café-au-lait spot", "correct": false},
      {"text": "Pyogenic granuloma", "correct": false}
    ],
    "explanation": "The facial lesion in Sturge–Weber syndrome is a port-wine stain, also called nevus flammeus."
  },
// 400
  {
    "question": "Facial port-wine stains in Sturge–Weber syndrome typically follow the distribution of the:",
    "answers": [
      {"text": "Facial nerve", "correct": false},
      {"text": "Glossopharyngeal nerve", "correct": false},
      {"text": "Vagus nerve", "correct": false},
      {"text": "Trigeminal nerve", "correct": true},
      {"text": "Hypoglossal nerve", "correct": false}
    ],
    "explanation": "Port-wine stains in Sturge–Weber syndrome usually follow the trigeminal nerve distribution."
  },
// 401
  {
    "question": "Neurologic manifestations of Sturge–Weber syndrome may include all of the following EXCEPT:",
    "answers": [
      {"text": "Seizure disorders", "correct": false},
      {"text": "Hemiparesis", "correct": false},
      {"text": "Cognitive impairment", "correct": false},
      {"text": "Peripheral neuropathy", "correct": true},
      {"text": "Developmental delay", "correct": false}
    ],
    "explanation": "Peripheral neuropathy is not typically associated with Sturge–Weber syndrome."
  },
// 402
  {
    "question": "Which condition is characterized by facial port-wine stains, varices, and limb hypertrophy involving bone and soft tissues?",
    "answers": [
      {"text": "Parkes Weber syndrome", "correct": false},
      {"text": "Klippel–Trénaunay syndrome", "correct": true},
      {"text": "Sturge–Weber syndrome", "correct": false},
      {"text": "PHACE syndrome", "correct": false},
      {"text": "Blue rubber bleb nevus syndrome", "correct": false}
    ],
    "explanation": "Klippel–Trénaunay syndrome features port-wine stains, varices, and limb hypertrophy."
  },
// 403
  {
    "question": "When jaw bones are involved in angio-osteohypertrophy, expected dental findings include:",
    "answers": [
      {"text": "Enamel hypoplasia and pulp stones", "correct": false},
      {"text": "Delayed tooth eruption only", "correct": false},
      {"text": "Asymmetry, malocclusion, and altered eruption pattern", "correct": true},
      {"text": "Generalized root resorption", "correct": false},
      {"text": "Multiple odontomas", "correct": false}
    ],
    "explanation": "Jaw involvement in angio-osteohypertrophy leads to asymmetry, malocclusion, and altered eruption."
  },
// 404
  {
    "question": "A child presents with a unilateral facial port-wine stain involving the ophthalmic and maxillary divisions of the trigeminal nerve. Brain imaging reveals leptomeningeal vascular malformations. Which diagnosis is most likely?",
    "answers": [
      {"text": "Klippel–Trénaunay syndrome", "correct": false},
      {"text": "Parkes Weber syndrome", "correct": false},
      {"text": "Sturge–Weber syndrome", "correct": true},
      {"text": "PHACE syndrome", "correct": false},
      {"text": "Neurofibromatosis type 1", "correct": false}
    ],
    "explanation": "This presentation is classic for Sturge–Weber syndrome."
  },
// 405
  {
    "question": "A patient with a facial port-wine stain develops recurrent seizures and contralateral hemiparesis. These neurologic findings are most consistent with:",
    "answers": [
      {"text": "Isolated cutaneous vascular malformation", "correct": false},
      {"text": "Sturge–Weber syndrome", "correct": true},
      {"text": "Parkes Weber syndrome", "correct": false},
      {"text": "Cavernous hemangioma", "correct": false},
      {"text": "Arteriovenous fistula", "correct": false}
    ],
    "explanation": "Neurologic symptoms with facial port-wine stain suggest Sturge–Weber syndrome."
  },
// 406
  {
    "question": "A teenager presents with facial vascular stains, prominent varicose veins, and hypertrophy of one lower limb. Radiographs show overgrowth of long bones. Which condition is most likely?",
    "answers": [
      {"text": "Sturge–Weber syndrome", "correct": false},
      {"text": "PHACE syndrome", "correct": false},
      {"text": "Klippel–Trénaunay syndrome", "correct": true},
      {"text": "Parkes Weber syndrome", "correct": false},
      {"text": "Blue rubber bleb nevus syndrome", "correct": false}
    ],
    "explanation": "This presentation is typical of Klippel–Trénaunay syndrome."
  },
// 407
  {
    "question": "A dental examination reveals unilateral mandibular enlargement with malocclusion and abnormal eruption pattern in a patient with vascular facial lesions and limb hypertrophy. These findings most strongly suggest:",
    "answers": [
      {"text": "Isolated port-wine stain", "correct": false},
      {"text": "Sturge–Weber syndrome", "correct": false},
      {"text": "Klippel–Trénaunay syndrome", "correct": true},
      {"text": "Central giant cell granuloma", "correct": false},
      {"text": "Fibrous dysplasia", "correct": false}
    ],
    "explanation": "These dental findings are consistent with Klippel–Trénaunay syndrome."
  },
// 408
  {
    "question": "A newborn presents with a facial port-wine stain but no neurologic or systemic abnormalities. Which statement is most accurate?",
    "answers": [
      {"text": "This confirms Sturge–Weber syndrome", "correct": false},
      {"text": "The lesion represents metastatic disease", "correct": false},
      {"text": "Port-wine stains may occur as isolated cutaneous lesions", "correct": true},
      {"text": "The condition is inherited in an autosomal dominant pattern", "correct": false},
      {"text": "Immediate neurosurgical intervention is required", "correct": false}
    ],
    "explanation": "Port-wine stains can occur as isolated skin lesions without systemic involvement."
  },
// ====================================================================================
// RED-BLUE LESION - Hereditary Hemorrhagic Telangiectasia (Rendu-Osler-Weber Syndrome) 
// ====================================================================================
// 409
  {
    "question": "Hereditary hemorrhagic telangiectasia is inherited in which pattern?",
    "answers": [
      {"text": "Autosomal recessive", "correct": false},
      {"text": "X-linked recessive", "correct": false},
      {"text": "Autosomal dominant", "correct": true},
      {"text": "Mitochondrial", "correct": false},
      {"text": "Sporadic only", "correct": false}
    ],
    "explanation": "Hereditary hemorrhagic telangiectasia (HHT) is inherited in an autosomal dominant pattern."
  },
// 410
  {
    "question": "Most cases of Hereditary hemorrhagic telangiectasia are caused by mutations in which genes?",
    "answers": [
      {"text": "BRCA1 and BRCA2", "correct": false},
      {"text": "p53 and Rb", "correct": false},
      {"text": "Endoglin and ALK-1", "correct": true},
      {"text": "NF1 and NF2", "correct": false},
      {"text": "PTCH1 and SMO", "correct": false}
    ],
    "explanation": "Mutations in the endoglin and ALK-1 genes are most commonly responsible for HHT."
  },
// 411
  {
    "question": "The most common presenting sign of Hereditary hemorrhagic telangiectasia is:",
    "answers": [
      {"text": "Gingival hyperplasia", "correct": false},
      {"text": "Epistaxis", "correct": true},
      {"text": "Hematemesis", "correct": false},
      {"text": "Hematuria", "correct": false},
      {"text": "Cutaneous ulceration", "correct": false}
    ],
    "explanation": "Epistaxis (nosebleeds) is the most common initial symptom of HHT."
  },
// 412
  {
    "question": "Telangiectatic vessels in Hereditary hemorrhagic telangiectasia most commonly appear clinically as:",
    "answers": [
      {"text": "White keratotic plaques", "correct": false},
      {"text": "Vesiculobullous lesions", "correct": false},
      {"text": "Red macules or papules", "correct": true},
      {"text": "Pigmented nodules", "correct": false},
      {"text": "Yellow pustules", "correct": false}
    ],
    "explanation": "Telangiectasias in HHT typically present as red macules or papules on the skin and mucosa."
  },
// 413
  {
    "question": "Arteriovenous malformations in Hereditary hemorrhagic telangiectasia most commonly involve which internal organs?",
    "answers": [
      {"text": "Heart, spleen, pancreas", "correct": false},
      {"text": "Lungs, brain, liver", "correct": true},
      {"text": "Kidneys, bladder, prostate", "correct": false},
      {"text": "Stomach, intestines, colon", "correct": false},
      {"text": "Thyroid, thymus, adrenal glands", "correct": false}
    ],
    "explanation": "AV malformations in HHT most commonly affect the lungs, brain, and liver."
  },
// 414
  {
    "question": "Chronic low-grade bleeding in Hereditary hemorrhagic telangiectasia may result in:",
    "answers": [
      {"text": "Polycythemia", "correct": false},
      {"text": "Iron deficiency anemia", "correct": true},
      {"text": "Megaloblastic anemia", "correct": false},
      {"text": "Hemolytic anemia", "correct": false},
      {"text": "Aplastic anemia", "correct": false}
    ],
    "explanation": "Chronic bleeding in HHT often leads to iron deficiency anemia."
  },
// 415
  {
    "question": "Which condition is an important differential diagnosis for Hereditary hemorrhagic telangiectasia and includes calcinosis cutis, Raynaud’s phenomenon, esophageal dysfunction, sclerodactyly, and telangiectasia?",
    "answers": [
      {"text": "Sturge–Weber syndrome", "correct": false},
      {"text": "Klippel–Trénaunay syndrome", "correct": false},
      {"text": "CREST syndrome", "correct": true},
      {"text": "Ehlers–Danlos syndrome", "correct": false},
      {"text": "Osler–Weber–Rendu disease", "correct": false}
    ],
    "explanation": "CREST syndrome shares features such as telangiectasia and is an important differential diagnosis."
  },
// 416
  {
    "question": "A 22-year-old patient presents with recurrent spontaneous nosebleeds since adolescence. Examination reveals multiple red macules on the lips, tongue, and facial skin. Family history reveals similar findings in the patient’s father. What is the most likely diagnosis?",
    "answers": [
      {"text": "CREST syndrome", "correct": false},
      {"text": "Hereditary hemorrhagic telangiectasia", "correct": true},
      {"text": "Sturge–Weber syndrome", "correct": false},
      {"text": "Blue rubber bleb nevus syndrome", "correct": false},
      {"text": "Kaposi sarcoma", "correct": false}
    ],
    "explanation": "The clinical presentation and family history are consistent with hereditary hemorrhagic telangiectasia."
  },
// 417
  {
    "question": "A patient with recurrent epistaxis is found to have pulmonary and cerebral arteriovenous malformations. Which additional finding would further support the diagnosis of Hereditary hemorrhagic telangiectasia?",
    "answers": [
      {"text": "Café-au-lait macules", "correct": false},
      {"text": "Gingival fibromatosis", "correct": false},
      {"text": "Telangiectasias of the oral mucosa", "correct": true},
      {"text": "Multiple odontogenic keratocysts", "correct": false},
      {"text": "Mandibular tori", "correct": false}
    ],
    "explanation": "Oral mucosal telangiectasias are a common feature supporting HHT diagnosis."
  },
// 418
  {
    "question": "A patient with fragile mucocutaneous telangiectasias develops fatigue and pallor. Laboratory tests reveal microcytic hypochromic anemia. The most likely cause is:",
    "answers": [
      {"text": "Vitamin B12 deficiency", "correct": false},
      {"text": "Acute hemolysis", "correct": false},
      {"text": "Chronic blood loss", "correct": true},
      {"text": "Bone marrow failure", "correct": false},
      {"text": "Thalassemia major", "correct": false}
    ],
    "explanation": "Chronic blood loss from fragile vessels leads to microcytic hypochromic anemia in HHT."
  },
// 419
  {
    "question": "A clinician suspects Hereditary hemorrhagic telangiectasia. Which combination best supports the diagnosis?",
    "answers": [
      {"text": "Photosensitivity, oral ulcers, arthritis", "correct": false},
      {"text": "Epistaxis, telangiectasias, AV malformations, positive family history", "correct": true},
      {"text": "Limb hypertrophy, varices, port-wine stain", "correct": false},
      {"text": "Seizures, leptomeningeal angiomas, facial nevus", "correct": false},
      {"text": "Calcinosis, Raynaud’s, sclerodactyly", "correct": false}
    ],
    "explanation": "The combination of epistaxis, telangiectasias, AV malformations, and family history is diagnostic for HHT."
  },
// 420
  {
    "question": "A patient with frequent spontaneous epistaxis due to Hereditary hemorrhagic telangiectasia is best managed with:",
    "answers": [
      {"text": "High-dose corticosteroids", "correct": false},
      {"text": "Broad-spectrum antibiotics", "correct": false},
      {"text": "Antifibrinolytic therapy and periodic follow-up", "correct": true},
      {"text": "Immediate surgical excision of nasal mucosa", "correct": false},
      {"text": "Radiation therapy", "correct": false}
    ],
    "explanation": "Management of epistaxis in HHT includes antifibrinolytic therapy and regular monitoring."
  },
// =====================================
// RED-BLUE LESION - PYOGENIC GRANULOMA 
// =====================================
// 421
  {
    "question": "Pyogenic granuloma represents:",
    "answers": [
      {"text": "A true infectious granulomatous disease", "correct": false},
      {"text": "A malignant vascular neoplasm", "correct": false},
      {"text": "An exuberant connective tissue proliferation to injury", "correct": true},
      {"text": "An autoimmune mucocutaneous disorder", "correct": false},
      {"text": "A developmental vascular malformation", "correct": false}
    ],
    "explanation": "Pyogenic granuloma is an exuberant connective tissue proliferation in response to injury."
  },
// 422
  {
    "question": "The red coloration of Pyogenic granuloma is primarily due to:",
    "answers": [
      {"text": "Hemosiderin deposition", "correct": false},
      {"text": "Dense lymphocytic infiltrate", "correct": false},
      {"text": "Prominent capillaries in hyperplastic granulation tissue", "correct": true},
      {"text": "Surface epithelial keratinization", "correct": false},
      {"text": "Melanin pigmentation", "correct": false}
    ],
    "explanation": "The red color is due to prominent capillaries in the hyperplastic granulation tissue."
  },
// 423
  {
    "question": "The most common intraoral site of Pyogenic granuloma is the:",
    "answers": [
      {"text": "Hard palate", "correct": false},
      {"text": "Floor of mouth", "correct": false},
      {"text": "Attached gingiva", "correct": true},
      {"text": "Soft palate", "correct": false},
      {"text": "Retromolar pad", "correct": false}
    ],
    "explanation": "Attached gingiva is the most common intraoral site for pyogenic granuloma."
  },
// 424
  {
    "question": "Pyogenic granuloma most frequently occurs during which period of life?",
    "answers": [
      {"text": "First decade", "correct": false},
      {"text": "Second decade", "correct": true},
      {"text": "Third decade", "correct": false},
      {"text": "Fifth decade", "correct": false},
      {"text": "Elderly years", "correct": false}
    ],
    "explanation": "Pyogenic granuloma most commonly occurs during the second decade of life."
  },
// 425
  {
    "question": "Hormonal influences that exaggerate gingival response and may produce multiple lesions are most associated with:",
    "answers": [
      {"text": "Menopause", "correct": false},
      {"text": "Thyroid disease", "correct": false},
      {"text": "Puberty and pregnancy", "correct": true},
      {"text": "Diabetes mellitus", "correct": false},
      {"text": "Corticosteroid therapy", "correct": false}
    ],
    "explanation": "Hormonal changes during puberty and pregnancy can exaggerate gingival responses leading to multiple lesions."
  },
// 426
  {
    "question": "A pregnancy-associated form of Pyogenic granuloma was historically termed:",
    "answers": [
      {"text": "Epulis fissuratum", "correct": false},
      {"text": "Peripheral ossifying fibroma", "correct": false},
      {"text": "Pregnancy tumor", "correct": true},
      {"text": "Fibroma gravidarum", "correct": false},
      {"text": "Hormonal epulis", "correct": false}
    ],
    "explanation": "The pregnancy-associated pyogenic granuloma is historically called a pregnancy tumor."
  },
// 427
  {
    "question": "Histopathologically, Pyogenic granuloma is composed of:",
    "answers": [
      {"text": "Sheets of atypical epithelial cells", "correct": false},
      {"text": "Lobular masses of hyperplastic granulation tissue", "correct": true},
      {"text": "Multinucleated giant cell aggregates", "correct": false},
      {"text": "Dense collagen bundles with calcifications", "correct": false},
      {"text": "Spindle-cell sarcomatous tissue", "correct": false}
    ],
    "explanation": "Pyogenic granuloma shows lobular masses of hyperplastic granulation tissue histologically."
  },
// 428
  {
    "question": "Neutrophils in Pyogenic granuloma are most commonly found in:",
    "answers": [
      {"text": "Deep connective tissue core", "correct": false},
      {"text": "Perivascular smooth muscle", "correct": false},
      {"text": "Superficial zone of ulcerated lesions", "correct": true},
      {"text": "Basal epithelial layer", "correct": false},
      {"text": "Areas of fibrosis", "correct": false}
    ],
    "explanation": "Neutrophils are typically found in the superficial zone of ulcerated pyogenic granuloma lesions."
  },
// 429
  {
    "question": "Which lesion is most similar clinically, often presenting as a red gingival mass?",
    "answers": [
      {"text": "Peripheral giant cell granuloma", "correct": true},
      {"text": "Peripheral ossifying fibroma", "correct": false},
      {"text": "Irritation fibroma", "correct": false},
      {"text": "Mucocele", "correct": false},
      {"text": "Hemangioma", "correct": false}
    ],
    "explanation": "Peripheral giant cell granuloma clinically resembles pyogenic granuloma as a red gingival mass."
  },
// 430
  {
    "question": "The primary treatment for Pyogenic granuloma is:",
    "answers": [
      {"text": "Radiation therapy", "correct": false},
      {"text": "Observation only", "correct": false},
      {"text": "Surgical excision with removal of local irritants", "correct": true},
      {"text": "Systemic corticosteroids", "correct": false},
      {"text": "Chemotherapy", "correct": false}
    ],
    "explanation": "Treatment involves surgical excision and removal of local irritants to prevent recurrence."
  },
// 431
  {
    "question": "A 16-year-old patient presents with a rapidly growing red gingival mass that bleeds easily. The lesion is soft, compressible, and ulcerated with a yellow fibrinous surface. Which diagnosis is most likely?",
    "answers": [
      {"text": "Peripheral ossifying fibroma", "correct": false},
      {"text": "Pyogenic granuloma", "correct": true},
      {"text": "Peripheral giant cell granuloma", "correct": false},
      {"text": "Kaposi sarcoma", "correct": false},
      {"text": "Non-Hodgkin lymphoma", "correct": false}
    ],
    "explanation": "The clinical features are characteristic of pyogenic granuloma."
  },
// 432
  {
    "question": "A pregnant patient develops multiple erythematous gingival masses during the second trimester. They bleed on slight provocation. What is the most likely diagnosis?",
    "answers": [
      {"text": "Hormonal gingivitis", "correct": false},
      {"text": "Peripheral giant cell granuloma", "correct": false},
      {"text": "Pyogenic granuloma", "correct": true},
      {"text": "Hemangioma", "correct": false},
      {"text": "Drug-induced gingival hyperplasia", "correct": false}
    ],
    "explanation": "Pregnancy-associated pyogenic granuloma presents as multiple bleeding gingival masses."
  },
// 433
  {
    "question": "A clinician notes a pedunculated gingival lesion arising from an area with heavy calculus deposits. Which etiologic factor most likely contributed to this lesion?",
    "answers": [
      {"text": "Viral infection", "correct": false},
      {"text": "Genetic mutation", "correct": false},
      {"text": "Chronic local irritation", "correct": true},
      {"text": "Autoimmune vasculitis", "correct": false},
      {"text": "Nutritional deficiency", "correct": false}
    ],
    "explanation": "Chronic local irritation from calculus is a common etiologic factor for pyogenic granuloma."
  },
// 434
  {
    "question": "A gingival mass excised from a young adult shows lobular capillary proliferation with granulation tissue and scattered chronic inflammatory cells. What is the most likely diagnosis?",
    "answers": [
      {"text": "Peripheral ossifying fibroma", "correct": false},
      {"text": "Peripheral giant cell granuloma", "correct": false},
      {"text": "Pyogenic granuloma", "correct": true},
      {"text": "Kaposi sarcoma", "correct": false},
      {"text": "Hemangioma", "correct": false}
    ],
    "explanation": "Histopathology is consistent with pyogenic granuloma."
  },
// 435
  {
    "question": "A pyogenic granuloma recurs three months after excision. The most likely reason is:",
    "answers": [
      {"text": "Malignant transformation", "correct": false},
      {"text": "Hematogenous spread", "correct": false},
      {"text": "Incomplete excision or persistent local irritants", "correct": true},
      {"text": "Drug resistance", "correct": false},
      {"text": "Viral reinfection", "correct": false}
    ],
    "explanation": "Recurrence is usually due to incomplete excision or failure to remove local irritants."
  },
// =================================================
// RED-BLUE LESION - PERIPHERAL GIANT CELL GRANULOMA 
// =================================================
// 436
  {
    "question": "Peripheral giant cell granuloma represents:",
    "answers": [
      {"text": "A malignant tumor of gingiva", "correct": false},
      {"text": "A reactive hyperplasia due to local trauma or irritation", "correct": true},
      {"text": "An infectious granulomatous lesion", "correct": false},
      {"text": "A developmental cyst", "correct": false},
      {"text": "A vascular malformation", "correct": false}
    ],
    "explanation": "Peripheral giant cell granuloma is a reactive hyperplasia caused by local trauma or irritation."
  },
// 437
  {
    "question": "The usual location of Peripheral giant cell granuloma is:",
    "answers": [
      {"text": "Floor of the mouth", "correct": false},
      {"text": "Attached gingiva between the first molars and incisors", "correct": true},
      {"text": "Soft palate", "correct": false},
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Tongue", "correct": false}
    ],
    "explanation": "Peripheral giant cell granuloma typically occurs on the attached gingiva between the first molars and incisors."
  },
// 438
  {
    "question": "Peripheral giant cell granulomas may arise from which tissue?",
    "answers": [
      {"text": "Salivary gland tissue", "correct": false},
      {"text": "Periodontal ligament or periosteum", "correct": true},
      {"text": "Lamina propria of the palate", "correct": false},
      {"text": "Mucosal epithelium", "correct": false},
      {"text": "Alveolar nerve sheath", "correct": false}
    ],
    "explanation": "These lesions arise from the periodontal ligament or periosteum."
  },
// 439
  {
    "question": "Which demographic is more commonly affected by Peripheral giant cell granuloma?",
    "answers": [
      {"text": "Children under 10 years, male", "correct": false},
      {"text": "Elderly men", "correct": false},
      {"text": "Females at any age", "correct": true},
      {"text": "Infants", "correct": false},
      {"text": "Middle-aged males", "correct": false}
    ],
    "explanation": "Peripheral giant cell granuloma is more common in females at any age."
  },
// 450
  {
    "question": "The color of a typical Peripheral giant cell granuloma is usually:",
    "answers": [
      {"text": "White or pale", "correct": false},
      {"text": "Red to blue", "correct": true},
      {"text": "Yellowish", "correct": false},
      {"text": "Brown", "correct": false},
      {"text": "Gray", "correct": false}
    ],
    "explanation": "These lesions typically appear red to blue in color."
  },
// 451
  {
    "question": "Histologically, the basic cell type of Peripheral giant cell granuloma is:",
    "answers": [
      {"text": "Squamous epithelial cells", "correct": false},
      {"text": "Fibroblasts", "correct": true},
      {"text": "Lymphocytes", "correct": false},
      {"text": "Osteoblasts", "correct": false},
      {"text": "Endothelial cells", "correct": false}
    ],
    "explanation": "Fibroblasts are the basic cell type found in peripheral giant cell granuloma."
  },
// 452
  {
    "question": "Microscopically, peripheral giant cell granuloma is identical to:",
    "answers": [
      {"text": "Pyogenic granuloma", "correct": false},
      {"text": "Central/intraosseous giant cell granuloma", "correct": true},
      {"text": "Peripheral ossifying fibroma", "correct": false},
      {"text": "Hemangioma", "correct": false},
      {"text": "Fibroma", "correct": false}
    ],
    "explanation": "Peripheral giant cell granuloma is microscopically identical to central/intraosseous giant cell granuloma."
  },
// 453
  {
    "question": "A peripheral giant cell granuloma on an edentulous ridge may produce:",
    "answers": [
      {"text": "Radiopaque lesion", "correct": false},
      {"text": "Superficial cup-shaped radiolucency", "correct": true},
      {"text": "Tooth mobility", "correct": false},
      {"text": "Ulceration with pus", "correct": false},
      {"text": "Hyperpigmentation", "correct": false}
    ],
    "explanation": "On an edentulous ridge, it may cause a superficial cup-shaped radiolucency."
  },
// 454
  {
    "question": "The preferred treatment of Peripheral giant cell granuloma is:",
    "answers": [
      {"text": "Radiation therapy", "correct": false},
      {"text": "Surgical excision with removal of local irritants", "correct": true},
      {"text": "Observation only", "correct": false},
      {"text": "Topical steroids", "correct": false},
      {"text": "Cryotherapy", "correct": false}
    ],
    "explanation": "Treatment involves surgical excision and removal of local irritants."
  },
// 455
  {
    "question": "Peripheral giant cell granuloma is clinically indistinguishable from:",
    "answers": [
      {"text": "Hemangioma", "correct": false},
      {"text": "Pyogenic granuloma", "correct": true},
      {"text": "Peripheral ossifying fibroma", "correct": false},
      {"text": "Kaposi sarcoma", "correct": false},
      {"text": "Non-Hodgkin lymphoma", "correct": false}
    ],
    "explanation": "Clinically, it is indistinguishable from pyogenic granuloma."
  },
// 456
  {
    "question": "A 35-year-old woman presents with a broad-based, red-blue gingival mass between her lower left first molar and canine. It measures approximately 1 cm in diameter. Radiographs show no bony involvement. The lesion bleeds easily on probing. What is the most likely diagnosis?",
    "answers": [
      {"text": "Peripheral ossifying fibroma", "correct": false},
      {"text": "Peripheral giant cell granuloma", "correct": true},
      {"text": "Pyogenic granuloma", "correct": false},
      {"text": "Fibroma", "correct": false},
      {"text": "Hemangioma", "correct": false}
    ],
    "explanation": "The clinical presentation is consistent with peripheral giant cell granuloma."
  },
// 457
  {
    "question": "A peripheral gingival lesion biopsy reveals numerous multinucleated giant cells within a fibroblastic stroma. Which clinical feature would help differentiate it from a pyogenic granuloma?",
    "answers": [
      {"text": "Occurrence exclusively on gingiva", "correct": true},
      {"text": "Red to blue color", "correct": false},
      {"text": "Association with hormonal changes", "correct": false},
      {"text": "Lobular arrangement of granulation tissue", "correct": false},
      {"text": "Pedunculated base", "correct": false}
    ],
    "explanation": "Peripheral giant cell granuloma occurs exclusively on gingiva, unlike pyogenic granuloma."
  },
// 458
  {
    "question": "A patient presents with a 1 cm gingival mass that recurs after incomplete excision. Which factor most likely contributed to recurrence?",
    "answers": [
      {"text": "Malignant transformation", "correct": false},
      {"text": "Failure to remove local irritants", "correct": true},
      {"text": "Systemic infection", "correct": false},
      {"text": "Hormonal influence", "correct": false},
      {"text": "Genetic mutation", "correct": false}
    ],
    "explanation": "Recurrence is usually due to failure to remove local irritants."
  },
// 459
  {
    "question": "Peripheral giant cell granulomas may occasionally cause:",
    "answers": [
      {"text": "Resorption of alveolar bone", "correct": true},
      {"text": "Metastasis to regional lymph nodes", "correct": false},
      {"text": "Tooth enamel hypoplasia", "correct": false},
      {"text": "Systemic anemia", "correct": false},
      {"text": "Ulcerative colitis", "correct": false}
    ],
    "explanation": "These lesions may cause resorption of alveolar bone."
  },
// 460
  {
    "question": "Which statement is true regarding peripheral giant cell granulomas?",
    "answers": [
      {"text": "They frequently metastasize", "correct": false},
      {"text": "They occur mainly on the palate", "correct": false},
      {"text": "They are a reactive lesion associated with trauma", "correct": true},
      {"text": "They are predominantly vascular tumors", "correct": false},
      {"text": "They only occur in edentulous patients", "correct": false}
    ],
    "explanation": "Peripheral giant cell granulomas are reactive lesions associated with trauma."
  },
  // =============================
// RED-BLUE LESION - Scarlet Fever 
// ===============================
// 461
  {
    "question": "A 6-year-old child presents with fever, sore throat, and a diffuse red rash. The pediatrician suspects scarlet fever. The condition is primarily caused by exotoxin-producing strains of which organism?",
    "answers": [
      {"text": "Staphylococcus aureus", "correct": false},
      {"text": "Group A Streptococcus", "correct": true},
      {"text": "Streptococcus pneumoniae", "correct": false},
      {"text": "Corynebacterium diphtheriae", "correct": false},
      {"text": "Neisseria meningitidis", "correct": false}
    ],
    "explanation": "Scarlet fever is caused by erythrogenic toxin–producing strains of group A streptococci, leading to systemic manifestations and rash."
  },
  //  462
  {
    "question": "A dentist is reviewing the medical history of pediatric patients. Scarlet fever is most commonly seen in which age group?",
    "answers": [
      {"text": "Neonates (0–1 month)", "correct": false},
      {"text": "Infants (1–12 months)", "correct": false},
      {"text": "Children (1–10 years)", "correct": true},
      {"text": "Adolescents (11–18 years)", "correct": false},
      {"text": "Adults (>18 years)", "correct": false}
    ],
    "explanation": "Scarlet fever most commonly affects children between 1 and 10 years old."
  },
  // 463
  {
    "question": "A 7-year-old child presents with fever and a red rash. Intraoral examination reveals a white-coated tongue with prominent, reddened papillae. What is this oral manifestation called?",
    "answers": [
      {"text": "Geographic tongue", "correct": false},
      {"text": "Fissured tongue", "correct": false},
      {"text": "Hairy tongue", "correct": false},
      {"text": "Strawberry tongue", "correct": true},
      {"text": "Atrophic glossitis", "correct": false}
    ],
    "explanation": "The classic “strawberry tongue” appearance results from a white coating with enlarged, erythematous fungiform papillae."
  },
  // 464
  {
    "question": "A child diagnosed with scarlet fever presents with a flushed face but a pale area around the mouth. What is this clinical feature called?",
    "answers": [
      {"text": "Butterfly rash", "correct": false},
      {"text": "Circumoral pallor", "correct": true},
      {"text": "Malar flush", "correct": false},
      {"text": "Cyanotic halo", "correct": false},
      {"text": "Perioral erythema", "correct": false}
    ],
    "explanation": "Scarlet fever characteristically presents with flushed face and circumoral pallor, a key diagnostic feature."
  },
  // 465
  {
    "question": "A child diagnosed with scarlet fever requires antibiotic therapy. Which is the drug of choice?",
    "answers": [
      {"text": "Tetracycline", "correct": false},
      {"text": "Amoxicillin-clavulanate", "correct": false},
      {"text": "Penicillin", "correct": true},
      {"text": "Ciprofloxacin", "correct": false},
      {"text": "Clindamycin", "correct": false}
    ],
    "explanation": "Penicillin is the drug of choice for treating group A streptococcal infections. Erythromycin is used for penicillin-allergic patients."
  },
  // =============================
// RED-BLUE LESION - ERYTHROPLAKIA
// ===============================
// 466
  {
    "question": "A 62-year-old male with a long history of tobacco and alcohol use presents with a well-demarcated velvety red patch on the floor of the mouth. The dentist is concerned due to the lesion’s high risk of malignancy. Why is erythroplakia considered more serious than leukoplakia?",
    "answers": [
      {"text": "It is more painful", "correct": false},
      {"text": "It has a higher rate of spontaneous regression", "correct": false},
      {"text": "It has a significantly higher rate of malignant transformation", "correct": true},
      {"text": "It commonly affects younger individuals", "correct": false},
      {"text": "It is associated with viral infections", "correct": false}
    ],
    "explanation": "Erythroplakia carries a much higher risk of malignancy compared to leukoplakia, with many lesions already showing carcinoma or severe dysplasia at diagnosis."
  },
  // 467
  {
    "question": "A patient presents with a suspicious red lesion on the oral mucosa. Which of the following is the most significant contributing factor in the development of erythroplakia?",
    "answers": [
      {"text": "Viral infection", "correct": false},
      {"text": "Mechanical trauma", "correct": false},
      {"text": "Tobacco use", "correct": true},
      {"text": "Autoimmune disease", "correct": false},
      {"text": "Genetic mutation alone", "correct": false}
    ],
    "explanation": "Tobacco use is a major etiologic factor, along with heavy alcohol consumption, contributing to the development of erythroplakia."
  },
  // 468
  {
    "question": "A 55-year-old patient presents with an asymptomatic oral lesion. Examination reveals a red, velvety patch with well-defined margins on the soft palate. What is the most likely diagnosis?",
    "answers": [
      {"text": "Leukoplakia", "correct": false},
      {"text": "Erythroplakia", "correct": true},
      {"text": "Lichen planus", "correct": false},
      {"text": "Aphthous ulcer", "correct": false},
      {"text": "Traumatic ulcer", "correct": false}
    ],
    "explanation": "Erythroplakia classically presents as a velvety red patch with well-defined borders, often asymptomatic but highly suspicious."
  },
  // 469
  {
    "question": "A clinician suspects erythroplakia during an oral exam. Which of the following is the most common site of involvement?",
    "answers": [
      {"text": "Hard palate", "correct": false},
      {"text": "Gingiva", "correct": false},
      {"text": "Floor of the mouth", "correct": true},
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Lips", "correct": false}
    ],
    "explanation": "Common sites include the floor of the mouth, tongue, retromolar area, and soft palate—areas considered high-risk for oral cancer."
  },
  // 470
  {
    "question": "A biopsy of a red oral lesion reveals squamous cell carcinoma. What percentage of erythroplakia lesions are found to be squamous cell carcinoma on histopathologic examination?",
    "answers": [
      {"text": "10%", "correct": false},
      {"text": "25%", "correct": false},
      {"text": "50%", "correct": true},
      {"text": "75%", "correct": false},
      {"text": "90%", "correct": false}
    ],
    "explanation": "Approximately 50% of erythroplakia lesions are already squamous cell carcinoma, with most of the remainder showing severe dysplasia or carcinoma in situ."
  },
  // 471
  {
    "question": "A 58-year-old patient presents with a persistent red lesion on the lateral tongue. What is the most appropriate next step in management?",
    "answers": [
      {"text": "Prescribe antibiotics", "correct": false},
      {"text": "Observe for 2 weeks", "correct": false},
      {"text": "Perform biopsy", "correct": true},
      {"text": "Apply topical steroids", "correct": false},
      {"text": "Recommend mouthwash", "correct": false}
    ],
    "explanation": "A biopsy is mandatory for any suspected erythroplakia to determine the degree of dysplasia or malignancy."
  },
  // 472
  {
    "question": "A red lesion on the oral mucosa is being evaluated. Which of the following should be included in the differential diagnosis of erythroplakia?",
    "answers": [
      {"text": "Ameloblastoma", "correct": false},
      {"text": "Kaposi sarcoma", "correct": true},
      {"text": "Odontoma", "correct": false},
      {"text": "Dentigerous cyst", "correct": false},
      {"text": "Periapical granuloma", "correct": false}
    ],
    "explanation": "Differential diagnoses include Kaposi sarcoma, ecchymosis, vascular malformations, allergic reactions, and psoriasis."
  },
  // 473
  {
    "question": "A patient diagnosed with erythroplakia with severe dysplasia undergoes surgery. What is the most important surgical principle?",
    "answers": [
      {"text": "Excise deeply rather than widely", "correct": false},
      {"text": "Perform radiation therapy first", "correct": false},
      {"text": "Excise widely rather than deeply", "correct": true},
      {"text": "Delay treatment until symptoms appear", "correct": false},
      {"text": "Use only medical management", "correct": false}
    ],
    "explanation": "Dysplastic cells often extend beyond visible margins, so wide excision is more critical than deep excision."
  },
  // 474
  {
    "question": "A patient treated for erythroplakia is advised regular follow-up visits. What is the primary reason?",
    "answers": [
      {"text": "Pain management", "correct": false},
      {"text": "Risk of infection", "correct": false},
      {"text": "Field cancerization effect", "correct": true},
      {"text": "Drug side effects", "correct": false},
      {"text": "Nutritional monitoring", "correct": false}
    ],
    "explanation": "Due to field cancerization, surrounding tissues may have genetic alterations, increasing the risk of recurrence or new lesions."
  },
  // =================================
// RED-BLUE LESION - KAPOSI'S SARCOMA
// ===================================
//  475
  {
    "question": "A 35-year-old HIV-positive male presents with multiple purplish lesions on the palate. Kaposi sarcoma is suspected. Which of the following is the primary etiologic agent?",
    "answers": [
      {"text": "Epstein-Barr virus", "correct": false},
      {"text": "Human papillomavirus", "correct": false},
      {"text": "Human herpesvirus 8", "correct": true},
      {"text": "Cytomegalovirus", "correct": false},
      {"text": "Herpes simplex virus", "correct": false}
    ],
    "explanation": "Kaposi sarcoma is strongly associated with HHV-8 (Kaposi sarcoma herpesvirus), which drives endothelial cell proliferation."
  },
  // 476
  {
    "question": "A dentist examining an immunocompromised patient notes a bluish lesion on the oral mucosa. Which is the most common intraoral site for Kaposi sarcoma?",
    "answers": [
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Tongue dorsum", "correct": false},
      {"text": "Hard palate", "correct": true},
      {"text": "Floor of the mouth", "correct": false},
      {"text": "Lips", "correct": false}
    ],
    "explanation": "The palate (especially posterior hard palate) and gingiva are the most common oral sites."
  },
  // 477
  {
    "question": "A patient with early Kaposi sarcoma presents with subtle oral findings. What is the typical early clinical presentation?",
    "answers": [
      {"text": "White plaque", "correct": false},
      {"text": "Ulcerated lesion", "correct": false},
      {"text": "Blue macule", "correct": true},
      {"text": "Yellow nodule", "correct": false},
      {"text": "Vesicular lesion", "correct": false}
    ],
    "explanation": "Early lesions appear as flat blue or purplish macules, which may later progress to nodular masses."
  },
  // 478
  {
    "question": "A lesion initially appearing as a flat blue macule on the gingiva becomes raised and nodular over time. What is the typical appearance of advanced Kaposi sarcoma?",
    "answers": [
      {"text": "White keratotic plaque", "correct": false},
      {"text": "Nodular red-blue mass", "correct": true},
      {"text": "Yellow ulcer with necrosis", "correct": false},
      {"text": "Pigmented brown patch", "correct": false},
      {"text": "Verrucous lesion", "correct": false}
    ],
    "explanation": "Advanced lesions become nodular, red-blue masses due to vascular proliferation."
  },
  // 479
  {
    "question": "A 28-year-old male with untreated HIV presents with rapidly progressing oral lesions consistent with Kaposi sarcoma. Which type of Kaposi sarcoma is most likely?",
    "answers": [
      {"text": "Classic type", "correct": false},
      {"text": "Endemic type", "correct": false},
      {"text": "Immunodeficiency type", "correct": true},
      {"text": "Sporadic type", "correct": false},
      {"text": "Congenital type", "correct": false}
    ],
    "explanation": "The immunodeficiency-associated type occurs in HIV/AIDS patients and tends to be aggressive with poor prognosis."
  },
  // 480
  {
    "question": "A biopsy of a suspected Kaposi sarcoma lesion reveals spindle cells and vascular proliferation. Which additional feature is characteristic?",
    "answers": [
      {"text": "Keratin pearl formation", "correct": false},
      {"text": "Extravasated red blood cells", "correct": true},
      {"text": "Caseous necrosis", "correct": false},
      {"text": "Giant cells with nuclei", "correct": false},
      {"text": "Calcifications", "correct": false}
    ],
    "explanation": "Kaposi sarcoma histology includes spindle cells, vascular channels, and extravasated RBCs, often with hemosiderin."
  },
  // 481
  {
    "question": "A clinician is evaluating a red-blue lesion on the palate. Which condition is a known clinical and microscopic mimic of Kaposi sarcoma?",
    "answers": [
      {"text": "Fibroma", "correct": false},
      {"text": "Bacillary angiomatosis", "correct": true},
      {"text": "Leukoplakia", "correct": false},
      {"text": "Lichen planus", "correct": false},
      {"text": "Mucocele", "correct": false}
    ],
    "explanation": "Bacillary angiomatosis, caused by Bartonella, closely mimics Kaposi sarcoma but is treatable with antibiotics."
  },
  // 482
  {
    "question": "A lesion suspected to be Kaposi sarcoma is later diagnosed as bacillary angiomatosis. What is the appropriate treatment?",
    "answers": [
      {"text": "Penicillin", "correct": false},
      {"text": "Acyclovir", "correct": false},
      {"text": "Erythromycin", "correct": true},
      {"text": "Methotrexate", "correct": false},
      {"text": "Radiation therapy", "correct": false}
    ],
    "explanation": "Bacillary angiomatosis is treated effectively with erythromycin or tetracycline, unlike Kaposi sarcoma."
  },
  // 483
  {
    "question": "A patient with Kaposi sarcoma associated with HIV is started on therapy. What is the primary treatment modality?",
    "answers": [
      {"text": "Surgical excision only", "correct": false},
      {"text": "Radiation therapy alone", "correct": false},
      {"text": "Highly active antiretroviral therapy (HAART)", "correct": true},
      {"text": "Topical corticosteroids", "correct": false},
      {"text": "Observation only", "correct": false}
    ],
    "explanation": "HAART is the cornerstone of treatment in HIV-associated Kaposi sarcoma, often leading to lesion regression."
  },
  // 484
  {
    "question": "Which type of Kaposi sarcoma has the poorest prognosis?",
    "answers": [
      {"text": "Classic type", "correct": false},
      {"text": "Endemic type", "correct": false},
      {"text": "Immunodeficiency type", "correct": true},
      {"text": "Localized type", "correct": false},
      {"text": "Cutaneous type", "correct": false}
    ],
    "explanation": "The immunodeficiency-associated type is aggressive and has a poor prognosis, especially without treatment."
  },
  // 485
  {
    "question": "Kaposi sarcoma development involves not only viral infection but also cellular signaling. Which of the following contributes to lesion perpetuation?",
    "answers": [
      {"text": "Keratinocyte apoptosis", "correct": false},
      {"text": "Cytokines and growth factors", "correct": true},
      {"text": "Calcium deposition", "correct": false},
      {"text": "Neural degeneration", "correct": false},
      {"text": "Autoantibody formation", "correct": false}
    ],
    "explanation": "Cytokines and growth factors released by inflammatory cells promote angiogenesis and tumor growth."
  },
  // 486
  {
    "question": "A clinician notes a decreased incidence of Kaposi sarcoma in HIV patients over recent years. What is the most likely reason?",
    "answers": [
      {"text": "Improved nutrition", "correct": false},
      {"text": "Increased vaccination", "correct": false},
      {"text": "Use of antiretroviral therapy", "correct": true},
      {"text": "Reduced viral mutation", "correct": false},
      {"text": "Better oral hygiene", "correct": false}
    ],
    "explanation": "The incidence has declined significantly due to effective antiretroviral therapy (HAART)."
  },
  // ======================================
// RED-BLUE LESION - VITAMIN B DEFICIENCIES
// ========================================
// 487
  {
    "question": "A 45-year-old male with chronic alcoholism presents with burning tongue and cracked lips. Which is the most likely underlying cause of his vitamin B deficiency?",
    "answers": [
      {"text": "Excess vitamin intake", "correct": false},
      {"text": "Increased renal excretion", "correct": false},
      {"text": "Decreased dietary intake", "correct": true},
      {"text": "Genetic mutation", "correct": false},
      {"text": "Viral infection", "correct": false}
    ],
    "explanation": "Malnutrition associated with alcoholism commonly leads to inadequate intake of vitamin B complex, resulting in deficiency."
  },
  //  488
  {
    "question": "A patient presents with a painful, red tongue and loss of papillae. What is the most likely diagnosis?",
    "answers": [
      {"text": "Geographic tongue", "correct": false},
      {"text": "Atrophic glossitis", "correct": true},
      {"text": "Fissured tongue", "correct": false},
      {"text": "Hairy tongue", "correct": false},
      {"text": "Median rhomboid glossitis", "correct": false}
    ],
    "explanation": "Vitamin B deficiency commonly causes atrophic glossitis, characterized by a smooth, red, painful tongue due to papillary atrophy."
  },
  // 489
  {
    "question": "A patient complains of painful cracks at the corners of the mouth. Clinical exam reveals fissuring at the commissures. What is this condition called?",
    "answers": [
      {"text": "Exfoliative cheilitis", "correct": false},
      {"text": "Actinic cheilitis", "correct": false},
      {"text": "Angular cheilitis", "correct": true},
      {"text": "Contact cheilitis", "correct": false},
      {"text": "Granulomatous cheilitis", "correct": false}
    ],
    "explanation": "Angular cheilitis refers to cracking and fissuring at the corners of the mouth, commonly associated with vitamin B deficiencies."
  },
  // 490
  {
    "question": "A patient with vitamin B deficiency presents with eye inflammation and scaly dermatitis around the nose. Which vitamin deficiency is most likely?",
    "answers": [
      {"text": "Vitamin B1 (Thiamine)", "correct": false},
      {"text": "Vitamin B2 (Riboflavin)", "correct": true},
      {"text": "Vitamin B3 (Niacin)", "correct": false},
      {"text": "Vitamin B9 (Folate)", "correct": false},
      {"text": "Vitamin B12 (Cobalamin)", "correct": false}
    ],
    "explanation": "Riboflavin deficiency is associated with keratitis and scaly dermatitis in the nasolabial area."
  },
  // 491
  {
    "question": "A malnourished patient presents with dermatitis, diarrhea, and confusion. What is the most likely deficiency?",
    "answers": [
      {"text": "Riboflavin", "correct": false},
      {"text": "Thiamine", "correct": false},
      {"text": "Niacin", "correct": true},
      {"text": "Folate", "correct": false},
      {"text": "Vitamin B12", "correct": false}
    ],
    "explanation": "Niacin deficiency (pellagra) is characterized by the “4 Ds”: dermatitis, diarrhea, dementia, and death."
  },
  // 492
  {
    "question": "A patient with vitamin B deficiency is found to have enlarged red blood cells and megaloblastic bone marrow. Which deficiency is most likely?",
    "answers": [
      {"text": "Vitamin B1", "correct": false},
      {"text": "Vitamin B2", "correct": false},
      {"text": "Vitamin B6", "correct": false},
      {"text": "Folic acid", "correct": true},
      {"text": "Vitamin C", "correct": false}
    ],
    "explanation": "Folic acid deficiency causes megaloblastic anemia and macrocytic RBCs, along with GI and oral manifestations."
  },
  // 493
  {
    "question": "Which of the following conditions may increase the body’s demand for vitamin B and lead to deficiency?",
    "answers": [
      {"text": "Hypothyroidism", "correct": false},
      {"text": "Hyperparathyroidism", "correct": true},
      {"text": "Diabetes mellitus", "correct": false},
      {"text": "Hypertension", "correct": false},
      {"text": "Asthma", "correct": false}
    ],
    "explanation": "Increased metabolic demand, such as in hyperparathyroidism, can contribute to vitamin B deficiency."
  },
  // 494
  {
    "question": "A clinician suspects vitamin B deficiency in a patient with oral lesions. What is the best approach to confirm the diagnosis?",
    "answers": [
      {"text": "Radiographic examination", "correct": false},
      {"text": "Clinical exam only", "correct": false},
      {"text": "Biopsy", "correct": false},
      {"text": "History, clinical findings, and laboratory data", "correct": true},
      {"text": "Culture and sensitivity", "correct": false}
    ],
    "explanation": "Diagnosis requires correlation of history, clinical features, and lab investigations."
  },
  // 495
  {
    "question": "A patient diagnosed with vitamin B deficiency is treated appropriately. What is the expected outcome with proper therapy?",
    "answers": [
      {"text": "Condition becomes chronic", "correct": false},
      {"text": "Only partial improvement", "correct": false},
      {"text": "Replacement therapy is curative", "correct": true},
      {"text": "Requires surgical treatment", "correct": false},
      {"text": "Requires lifelong antibiotics", "correct": false}
    ],
    "explanation": "Vitamin B replacement therapy typically results in complete resolution of symptoms."
  },
  // 496
  {
    "question": "A 50-year-old malnourished patient presents with burning mouth, red tongue, and cracked lips. Which combination of findings is most consistent with vitamin B deficiency?",
    "answers": [
      {"text": "Leukoplakia and ulceration", "correct": false},
      {"text": "Glossitis and cheilitis", "correct": true},
      {"text": "Vesicles and bullae", "correct": false},
      {"text": "Pigmentation and nodules", "correct": false},
      {"text": "Fibrosis and plaques", "correct": false}
    ],
    "explanation": "The hallmark oral findings include glossitis (red, painful tongue) and cheilitis (lip inflammation/cracking)."
  },
  // 497
  {
    "question": "A patient with chronic gastrointestinal disease develops signs of vitamin B deficiency. What is the primary mechanism?",
    "answers": [
      {"text": "Increased excretion", "correct": false},
      {"text": "Decreased absorption", "correct": true},
      {"text": "Increased synthesis", "correct": false},
      {"text": "Autoimmune destruction", "correct": false},
      {"text": "Enzyme deficiency", "correct": false}
    ],
    "explanation": "GI disorders can impair absorption of vitamin B, leading to deficiency despite adequate intake."
  },
  // 498
  {
    "question": "A patient presents with symmetrical dermatitis that becomes thickened and pigmented over time. Which deficiency is most likely?",
    "answers": [
      {"text": "Riboflavin", "correct": false},
      {"text": "Niacin", "correct": true},
      {"text": "Folate", "correct": false},
      {"text": "Vitamin B12", "correct": false},
      {"text": "Thiamine", "correct": false}
    ],
    "explanation": "Niacin deficiency causes symmetrical dermatitis with thickening and pigmentation, a hallmark of pellagra."
  },
  // ======================================
// RED-BLUE LESION - PERNICIOUS ANEMIA
// ========================================
// 499
  {
    "question": "A 60-year-old female presents with fatigue and a burning sensation of the tongue. Laboratory tests reveal macrocytic anemia. Which is the primary defect in pernicious anemia?",
    "answers": [
      {"text": "Iron deficiency", "correct": false},
      {"text": "Folate deficiency", "correct": false},
      {"text": "Lack of intrinsic factor", "correct": true},
      {"text": "Decreased erythropoietin", "correct": false},
      {"text": "Bone marrow aplasia", "correct": false}
    ],
    "explanation": "Pernicious anemia results from deficiency of intrinsic factor, preventing absorption of vitamin B12 in the intestine."
  },
  // 500
  {
    "question": "Which of the following best explains the pathogenesis of pernicious anemia?",
    "answers": [
      {"text": "Viral destruction of RBCs", "correct": false},
      {"text": "Autoimmune destruction of parietal cells", "correct": true},
      {"text": "Increased RBC production", "correct": false},
      {"text": "Excess iron deposition", "correct": false},
      {"text": "Decreased hemoglobin synthesis", "correct": false}
    ],
    "explanation": "An autoimmune response against gastric parietal cells leads to decreased intrinsic factor and impaired vitamin B12 absorption."
  },
  // 501
  {
    "question": "A patient complains of a painful, smooth, red tongue. Clinical exam shows loss of papillae. What is this condition called?",
    "answers": [
      {"text": "Geographic tongue", "correct": false},
      {"text": "Fissured tongue", "correct": false},
      {"text": "Hunter’s glossitis", "correct": true},
      {"text": "Hairy tongue", "correct": false},
      {"text": "Median rhomboid glossitis", "correct": false}
    ],
    "explanation": "Hunter’s (Moeller’s) glossitis is a hallmark oral manifestation of pernicious anemia, presenting as a smooth, erythematous tongue."
  },
  // 502
  {
    "question": "A blood test in a suspected case of pernicious anemia will most likely show:",
    "answers": [
      {"text": "Microcytic anemia", "correct": false},
      {"text": "Normocytic anemia", "correct": false},
      {"text": "Macrocytic anemia", "correct": true},
      {"text": "Hemolytic anemia", "correct": false},
      {"text": "Aplastic anemia", "correct": false}
    ],
    "explanation": "Vitamin B12 deficiency leads to macrocytic (megaloblastic) anemia due to impaired DNA synthesis."
  },
  // 503
  {
    "question": "A patient with advanced pernicious anemia presents with neurologic symptoms. Which of the following is most likely?",
    "answers": [
      {"text": "Seizures", "correct": false},
      {"text": "Memory loss and dizziness", "correct": true},
      {"text": "Paralysis of facial nerve", "correct": false},
      {"text": "Tremors only", "correct": false},
      {"text": "Visual blindness", "correct": false}
    ],
    "explanation": "Neurologic manifestations include dizziness, headache, tinnitus, and cognitive disturbances."
  },
  // 504
  {
    "question": "Which gastrointestinal finding is associated with pernicious anemia?",
    "answers": [
      {"text": "Hyperchlorhydria", "correct": false},
      {"text": "Achlorhydria", "correct": true},
      {"text": "Increased motility", "correct": false},
      {"text": "Ulcer formation only", "correct": false},
      {"text": "Increased enzyme secretion", "correct": false}
    ],
    "explanation": "Pernicious anemia is associated with achlorhydria due to atrophic gastritis."
  },
  // 505
  {
    "question": "Which of the following oral findings may also be seen in pernicious anemia?",
    "answers": [
      {"text": "Leukoplakia", "correct": false},
      {"text": "Oral candidiasis", "correct": true},
      {"text": "Amelogenesis imperfecta", "correct": false},
      {"text": "Torus palatinus", "correct": false},
      {"text": "Supernumerary teeth", "correct": false}
    ],
    "explanation": "Patients may present with oral candidiasis, angular cheilitis, and mucositis."
  },
  // 506
  {
    "question": "What is the most definitive basis for diagnosing pernicious anemia?",
    "answers": [
      {"text": "Clinical appearance only", "correct": false},
      {"text": "Radiographic findings", "correct": false},
      {"text": "Laboratory evidence of macrocytic anemia", "correct": true},
      {"text": "Biopsy of tongue", "correct": false},
      {"text": "Salivary analysis", "correct": false}
    ],
    "explanation": "Diagnosis relies on lab findings of megaloblastic, macrocytic anemia."
  },
  // 507
  {
    "question": "What is the treatment of choice for pernicious anemia?",
    "answers": [
      {"text": "Oral iron supplementation", "correct": false},
      {"text": "Folic acid tablets", "correct": false},
      {"text": "Parenteral vitamin B12", "correct": true},
      {"text": "Antibiotics", "correct": false},
      {"text": "Blood transfusion only", "correct": false}
    ],
    "explanation": "Because absorption is impaired, vitamin B12 must be given parenterally."
  },
  // 508
  {
    "question": "Vitamin B12 is essential for which of the following processes?",
    "answers": [
      {"text": "Protein digestion", "correct": false},
      {"text": "Lipid metabolism", "correct": false},
      {"text": "DNA synthesis", "correct": true},
      {"text": "Calcium absorption", "correct": false},
      {"text": "Collagen formation", "correct": false}
    ],
    "explanation": "Vitamin B12 is crucial for DNA synthesis, especially in rapidly dividing cells like bone marrow."
  },
  // 509
  {
    "question": "Patients with pernicious anemia have an increased risk of developing:",
    "answers": [
      {"text": "Lung cancer", "correct": false},
      {"text": "Liver cancer", "correct": false},
      {"text": "Gastric carcinoma", "correct": true},
      {"text": "Colon cancer", "correct": false},
      {"text": "Pancreatic cancer", "correct": false}
    ],
    "explanation": "Chronic atrophic gastritis increases the risk of gastric carcinoma."
  },
  // 510
  {
    "question": "A 65-year-old patient presents with fatigue, pallor, burning tongue, and shortness of breath. Oral exam reveals a smooth red tongue and angular cheilitis. Lab results show macrocytic anemia. What is the most likely diagnosis?",
    "answers": [
      {"text": "Iron deficiency anemia", "correct": false},
      {"text": "Aplastic anemia", "correct": false},
      {"text": "Pernicious anemia", "correct": true},
      {"text": "Thalassemia", "correct": false},
      {"text": "Hemolytic anemia", "correct": false}
    ],
    "explanation": "The combination of macrocytic anemia, glossitis, and systemic symptoms strongly indicates pernicious anemia."
  },
  // ======================================
// RED-BLUE LESION - IRON DEFICIENCY ANEMIA
// ========================================
// 511
  {
    "question": "A 30-year-old female presents with fatigue and pallor. She reports heavy menstrual bleeding. Which is the most likely cause of her anemia?",
    "answers": [
      {"text": "Vitamin B12 deficiency", "correct": false},
      {"text": "Chronic blood loss", "correct": true},
      {"text": "Genetic mutation", "correct": false},
      {"text": "Autoimmune disease", "correct": false},
      {"text": "Acute infection", "correct": false}
    ],
    "explanation": "Chronic blood loss, such as excessive menstrual flow, is a common cause of iron deficiency anemia."
  },
  // 512
  {
    "question": "A patient is diagnosed with iron deficiency anemia. What is the characteristic appearance of red blood cells?",
    "answers": [
      {"text": "Macrocytic and hyperchromic", "correct": false},
      {"text": "Normocytic and normochromic", "correct": false},
      {"text": "Microcytic and hypochromic", "correct": true},
      {"text": "Megaloblastic", "correct": false},
      {"text": "Spherocytic", "correct": false}
    ],
    "explanation": "Iron deficiency leads to small (microcytic), pale (hypochromic) RBCs due to decreased hemoglobin."
  },
  // 513
  {
    "question": "A patient complains of a painful, smooth tongue. Clinical exam shows loss of papillae. Which condition is most likely?",
    "answers": [
      {"text": "Leukoplakia", "correct": false},
      {"text": "Atrophic glossitis", "correct": true},
      {"text": "Geographic tongue", "correct": false},
      {"text": "Hairy tongue", "correct": false},
      {"text": "Median rhomboid glossitis", "correct": false}
    ],
    "explanation": "Iron deficiency anemia commonly causes atrophic glossitis, presenting as a smooth, red, painful tongue."
  },
  // 514
  {
    "question": "A patient with iron deficiency anemia presents with spoon-shaped nails. What is this condition called?",
    "answers": [
      {"text": "Onycholysis", "correct": false},
      {"text": "Koilonychia", "correct": true},
      {"text": "Leukonychia", "correct": false},
      {"text": "Paronychia", "correct": false},
      {"text": "Clubbing", "correct": false}
    ],
    "explanation": "Koilonychia (spoon-shaped nails) is a classic sign of iron deficiency anemia."
  },
  // 515
  {
    "question": "Iron deficiency anemia most commonly affects which group?",
    "answers": [
      {"text": "Elderly men", "correct": false},
      {"text": "Adolescent males", "correct": false},
      {"text": "Women of reproductive age", "correct": true},
      {"text": "Neonates", "correct": false},
      {"text": "Athletes", "correct": false}
    ],
    "explanation": "Due to menstruation and pregnancy, women are more prone to iron deficiency."
  },
  // 516
  {
    "question": "Which of the following laboratory findings is most consistent with iron deficiency anemia?",
    "answers": [
      {"text": "Increased serum iron", "correct": false},
      {"text": "Decreased TIBC", "correct": false},
      {"text": "Increased hemoglobin", "correct": false},
      {"text": "Low serum iron with elevated TIBC", "correct": true},
      {"text": "Macrocytosis", "correct": false}
    ],
    "explanation": "Iron deficiency shows low serum iron and elevated TIBC as the body attempts to bind more iron."
  },
  // 517
  {
    "question": "A patient presents with dysphagia, glossitis, and iron deficiency anemia. Which syndrome is most likely?",
    "answers": [
      {"text": "Sjögren syndrome", "correct": false},
      {"text": "Plummer-Vinson syndrome", "correct": true},
      {"text": "Down syndrome", "correct": false},
      {"text": "Cushing syndrome", "correct": false},
      {"text": "Behçet syndrome", "correct": false}
    ],
    "explanation": "Plummer-Vinson syndrome includes iron deficiency anemia, dysphagia, and mucosal atrophy, with increased cancer risk."
  },
  // 518
  {
    "question": "Which condition associated with iron deficiency anemia increases the risk of oral cancer?",
    "answers": [
      {"text": "Koilonychia", "correct": false},
      {"text": "Angular cheilitis", "correct": false},
      {"text": "Plummer-Vinson syndrome", "correct": true},
      {"text": "Glossitis", "correct": false},
      {"text": "Pallor", "correct": false}
    ],
    "explanation": "This syndrome is associated with a predisposition to oral and esophageal cancer."
  },
  // 519
  {
    "question": "Which condition may increase the body's demand for iron and lead to deficiency?",
    "answers": [
      {"text": "Hypothyroidism", "correct": false},
      {"text": "Pregnancy", "correct": true},
      {"text": "Hypertension", "correct": false},
      {"text": "Asthma", "correct": false},
      {"text": "Arthritis", "correct": false}
    ],
    "explanation": "Pregnancy increases iron requirements, predisposing to deficiency."
  },
  // 520
  {
    "question": "What is the primary treatment for iron deficiency anemia?",
    "answers": [
      {"text": "Vitamin B12 injections", "correct": false},
      {"text": "Blood transfusion", "correct": false},
      {"text": "Iron supplementation", "correct": true},
      {"text": "Antibiotics", "correct": false},
      {"text": "Steroids", "correct": false}
    ],
    "explanation": "Treatment involves iron supplementation after identifying and managing the underlying cause."
  },
  // 521
  {
    "question": "Which of the following may also be seen in iron deficiency anemia?",
    "answers": [
      {"text": "Vesicles", "correct": false},
      {"text": "Angular cheilitis", "correct": true},
      {"text": "Hyperkeratosis", "correct": false},
      {"text": "Pigmented lesions", "correct": false},
      {"text": "Fibroma", "correct": false}
    ],
    "explanation": "Angular cheilitis is commonly associated with iron deficiency anemia."
  },
  // 522
  {
    "question": "A 35-year-old female presents with fatigue, spoon-shaped nails, and a burning tongue. Lab tests reveal microcytic hypochromic anemia with low serum iron. What is the most likely diagnosis?",
    "answers": [
      {"text": "Pernicious anemia", "correct": false},
      {"text": "Aplastic anemia", "correct": false},
      {"text": "Iron deficiency anemia", "correct": true},
      {"text": "Hemolytic anemia", "correct": false},
      {"text": "Thalassemia", "correct": false}
    ],
    "explanation": "The combination of koilonychia, glossitis, and microcytic hypochromic anemia is classic for iron deficiency anemia."
  },
   // ======================================
// RED-BLUE LESION - BURNING MOUTH SYNDROME
// =========================================
// 523
  {
    "question": "A 55-year-old woman presents with a burning sensation of the tongue for several months. Clinical examination reveals normal-appearing oral mucosa with no visible lesions. What is the most likely diagnosis?",
    "answers": [
      {"text": "Oral candidiasis", "correct": false},
      {"text": "Atrophic glossitis", "correct": false},
      {"text": "Burning mouth syndrome", "correct": true},
      {"text": "Lichen planus", "correct": false},
      {"text": "Leukoplakia", "correct": false}
    ],
    "explanation": "BMS is characterized by intense burning pain without clinically detectable lesions."
  },
  // 524
  {
    "question": "A patient with burning mouth syndrome reports persistent discomfort. Which oral site is most commonly involved?",
    "answers": [
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Hard palate", "correct": false},
      {"text": "Gingiva", "correct": false},
      {"text": "Tongue", "correct": true},
      {"text": "Floor of the mouth", "correct": false}
    ],
    "explanation": "The tongue is the most commonly affected site in BMS."
  },
  // 525
  {
    "question": "Which of the following patients is most likely to develop burning mouth syndrome?",
    "answers": [
      {"text": "10-year-old male", "correct": false},
      {"text": "25-year-old female", "correct": false},
      {"text": "45-year-old male", "correct": false},
      {"text": "55-year-old female", "correct": true},
      {"text": "30-year-old male", "correct": false}
    ],
    "explanation": "BMS commonly affects middle-aged and older women, especially those over 40 years old."
  },
  // 526
  {
    "question": "A patient with BMS reports burning sensation along with another common symptom. Which is most likely?",
    "answers": [
      {"text": "Bleeding gums", "correct": false},
      {"text": "Tooth mobility", "correct": false},
      {"text": "Altered taste", "correct": true},
      {"text": "Tooth fracture", "correct": false},
      {"text": "Swelling", "correct": false}
    ],
    "explanation": "Patients often experience dysgeusia (altered taste) and xerostomia along with burning."
  },
  // 527
  {
    "question": "Which microorganism is most commonly implicated as a possible etiologic factor in burning mouth syndrome?",
    "answers": [
      {"text": "Streptococcus mutans", "correct": false},
      {"text": "Candida albicans", "correct": true},
      {"text": "Lactobacillus", "correct": false},
      {"text": "Actinomyces", "correct": false},
      {"text": "Herpes simplex virus", "correct": false}
    ],
    "explanation": "Candida albicans is frequently cited as a contributing factor, even when lesions are not clinically visible."
  },
  // 528
  {
    "question": "Which systemic condition is associated with burning mouth syndrome?",
    "answers": [
      {"text": "Hypertension", "correct": false},
      {"text": "Diabetes mellitus", "correct": true},
      {"text": "Asthma", "correct": false},
      {"text": "Osteoporosis", "correct": false},
      {"text": "Hyperthyroidism", "correct": false}
    ],
    "explanation": "Diabetes mellitus is one of the systemic conditions linked to BMS."
  },
  // 529
  {
    "question": "Which deficiency is commonly associated with burning mouth syndrome?",
    "answers": [
      {"text": "Vitamin C deficiency", "correct": false},
      {"text": "Vitamin D deficiency", "correct": false},
      {"text": "Vitamin B complex deficiency", "correct": true},
      {"text": "Vitamin K deficiency", "correct": false},
      {"text": "Vitamin A excess", "correct": false}
    ],
    "explanation": "Deficiencies in vitamin B complex, iron, and zinc may contribute to BMS."
  },
  // 530
  {
    "question": "A biopsy is performed on a patient with suspected burning mouth syndrome. What is the most likely finding?",
    "answers": [
      {"text": "Dysplasia", "correct": false},
      {"text": "Hyperkeratosis", "correct": false},
      {"text": "Inflammation", "correct": false},
      {"text": "Normal tissue", "correct": true},
      {"text": "Malignancy", "correct": false}
    ],
    "explanation": "Histopathology is typically within normal limits in BMS."
  },
  // 531
  {
    "question": "What is the most appropriate method to diagnose burning mouth syndrome?",
    "answers": [
      {"text": "Radiographic examination", "correct": false},
      {"text": "Biopsy alone", "correct": false},
      {"text": "Clinical exam only", "correct": false},
      {"text": "Diagnosis of exclusion", "correct": true},
      {"text": "Culture test only", "correct": false}
    ],
    "explanation": "BMS is diagnosed by excluding all other possible causes, along with history and lab evaluation."
  },
  // 532
  {
    "question": "A patient with BMS is prescribed medication for symptom relief. Which of the following has been shown to be beneficial?",
    "answers": [
      {"text": "Penicillin", "correct": false},
      {"text": "Ibuprofen", "correct": false},
      {"text": "Doxepin", "correct": true},
      {"text": "Insulin", "correct": false},
      {"text": "Warfarin", "correct": false}
    ],
    "explanation": "Tricyclic antidepressants (e.g., doxepin) can help due to anxiolytic and analgesic effects."
  },
  // 533
  {
    "question": "A patient cannot tolerate tricyclic antidepressants due to side effects. Which is an appropriate alternative?",
    "answers": [
      {"text": "Beta-blockers", "correct": false},
      {"text": "SSRIs", "correct": true},
      {"text": "Antihistamines", "correct": false},
      {"text": "Antacids", "correct": false},
      {"text": "Antivirals", "correct": false}
    ],
    "explanation": "SSRIs (e.g., fluoxetine, paroxetine) are alternatives with fewer side effects."
  },
  // 534
  {
    "question": "Why might antifungal agents be prescribed in burning mouth syndrome even without clear infection?",
    "answers": [
      {"text": "To prevent viral infection", "correct": false},
      {"text": "Empirical symptom relief", "correct": true},
      {"text": "To reduce inflammation", "correct": false},
      {"text": "To treat bacterial infection", "correct": false},
      {"text": "To enhance immunity", "correct": false}
    ],
    "explanation": "Even without clear candidiasis, antifungals (nystatin, clotrimazole) may help reduce symptoms."
  },
  // 535
  {
    "question": "Which condition associated with xerostomia may contribute to burning mouth syndrome?",
    "answers": [
      {"text": "Sjögren’s syndrome", "correct": true},
      {"text": "Down syndrome", "correct": false},
      {"text": "Turner syndrome", "correct": false},
      {"text": "Marfan syndrome", "correct": false},
      {"text": "Klinefelter syndrome", "correct": false}
    ],
    "explanation": "Xerostomia, especially from Sjögren’s syndrome, is a known contributing factor."
  },
  // 536
  {
    "question": "During oral examination of a patient with BMS, which finding is expected?",
    "answers": [
      {"text": "Ulcerations", "correct": false},
      {"text": "White plaques", "correct": false},
      {"text": "Red lesions", "correct": false},
      {"text": "Normal mucosa", "correct": true},
      {"text": "Vesicles", "correct": false}
    ],
    "explanation": "Despite symptoms, oral tissues appear clinically normal in BMS."
  },
  // 537
  {
    "question": "Which hormonal change is commonly associated with burning mouth syndrome?",
    "answers": [
      {"text": "Hyperthyroidism", "correct": false},
      {"text": "Hypoestrogenemia", "correct": true},
      {"text": "Hypercortisolism", "correct": false},
      {"text": "Hyperprolactinemia", "correct": false},
      {"text": "Hypoparathyroidism", "correct": false}
    ],
    "explanation": "Postmenopausal hypoestrogenemia is a significant contributing factor."
  },
  // ======================================
// RED-BLUE LESION - TRIGEMINAL NEURALGIA
// =========================================
// 538
  {
    "question": "Which branch of the trigeminal nerve is most commonly affected in trigeminal neuralgia?",
    "answers": [
      {"text": "V1 (ophthalmic)", "correct": false},
      {"text": "V2 (maxillary)", "correct": true},
      {"text": "V3 (mandibular)", "correct": false},
      {"text": "All branches equally", "correct": false},
      {"text": "Cervical nerves", "correct": false}
    ],
    "explanation": "The maxillary branch (V2) of the trigeminal nerve is most commonly affected in trigeminal neuralgia."
  },
  // 539
  {
    "question": "The typical duration of a trigeminal neuralgia pain episode is:",
    "answers": [
      {"text": "Several hours", "correct": false},
      {"text": "A few minutes", "correct": false},
      {"text": "A few seconds", "correct": true},
      {"text": "Several days", "correct": false},
      {"text": "Continuous", "correct": false}
    ],
    "explanation": "Trigeminal neuralgia pain episodes typically last a few seconds."
  },
  // 540
  {
    "question": "Which of the following is considered the first-line pharmacologic treatment for trigeminal neuralgia?",
    "answers": [
      {"text": "Gabapentin", "correct": false},
      {"text": "Baclofen", "correct": false},
      {"text": "Carbamazepine", "correct": true},
      {"text": "Duloxetine", "correct": false},
      {"text": "Sodium valproate", "correct": false}
    ],
    "explanation": "Carbamazepine is the first-line pharmacologic treatment for trigeminal neuralgia."
  },
  // 541
  {
    "question": "Trigeminal neuralgia is more commonly found in:",
    "answers": [
      {"text": "Children under 10 years", "correct": false},
      {"text": "Young adults aged 20–30", "correct": false},
      {"text": "Older adults in the sixth and seventh decades", "correct": true},
      {"text": "Men only", "correct": false},
      {"text": "Both sexes equally at any age", "correct": false}
    ],
    "explanation": "Trigeminal neuralgia is more common in older adults, especially in their sixth and seventh decades."
  },
  // 542
  {
    "question": "Which of the following is a proposed cause of trigeminal neuralgia?",
    "answers": [
      {"text": "Viral infection of the trigeminal nerve", "correct": false},
      {"text": "Demyelination along the trigeminal nerve distribution", "correct": true},
      {"text": "Dental caries", "correct": false},
      {"text": "Sinus infection", "correct": false},
      {"text": "Vitamin deficiency", "correct": false}
    ],
    "explanation": "Demyelination along the trigeminal nerve distribution is a proposed cause of trigeminal neuralgia."
  },
  // 543
  {
    "question": "A 65-year-old woman presents with sudden, sharp, electric shock–like pain on the right side of her face, lasting a few seconds at a time. The pain is triggered by brushing her teeth. Which of the following is the most likely diagnosis?",
    "answers": [
      {"text": "Bell’s palsy", "correct": false},
      {"text": "Trigeminal neuralgia", "correct": true},
      {"text": "Migraine", "correct": false},
      {"text": "Temporomandibular joint disorder", "correct": false},
      {"text": "Cluster headache", "correct": false}
    ],
    "explanation": "The presentation is classic for trigeminal neuralgia, characterized by sudden, sharp, electric shock–like facial pain triggered by stimuli."
  },
  // 544
  {
    "question": "A patient with multiple sclerosis reports unilateral lancinating facial pain that occurs when washing her face. Which statement about the prevalence of trigeminal neuralgia in MS patients is correct?",
    "answers": [
      {"text": "It is extremely rare (<0.1%)", "correct": false},
      {"text": "It occurs in 1–4% of patients", "correct": true},
      {"text": "It occurs in 10–15% of patients", "correct": false},
      {"text": "MS patients are not at risk", "correct": false},
      {"text": "It occurs in over 50% of patients", "correct": false}
    ],
    "explanation": "Trigeminal neuralgia occurs in approximately 1–4% of patients with multiple sclerosis."
  },
  // 545
  {
    "question": "A patient with trigeminal neuralgia has failed pharmacologic therapy with carbamazepine. Which of the following surgical options has the highest likelihood of long-term success?",
    "answers": [
      {"text": "Cryotherapy", "correct": false},
      {"text": "Microvascular decompression", "correct": true},
      {"text": "Radiofrequency ablation", "correct": false},
      {"text": "Stereotactic gamma knife radiosurgery", "correct": false},
      {"text": "Alcohol rhizotomy", "correct": false}
    ],
    "explanation": "Microvascular decompression offers the highest likelihood of long-term success in trigeminal neuralgia refractory to medication."
  },
  // 546
  {
    "question": "A 70-year-old man describes stabbing pain along the mandibular nerve distribution that is precipitated by eating. Which branch of the trigeminal nerve is involved?",
    "answers": [
      {"text": "V1 (ophthalmic)", "correct": false},
      {"text": "V2 (maxillary)", "correct": false},
      {"text": "V3 (mandibular)", "correct": true},
      {"text": "Cervical nerve", "correct": false},
      {"text": "Facial nerve", "correct": false}
    ],
    "explanation": "The mandibular branch (V3) of the trigeminal nerve is involved in pain precipitated by eating."
  },
  // 547
  {
    "question": "A patient reports trigger points on the buccal mucosa that bring on sharp facial pain. Which feature is most characteristic of trigeminal neuralgia?",
    "answers": [
      {"text": "Bilateral pain", "correct": false},
      {"text": "Pain lasting hours", "correct": false},
      {"text": "Pain triggered by minor tactile stimulation", "correct": true},
      {"text": "Pain associated with fever", "correct": false},
      {"text": "Constant dull ache", "correct": false}
    ],
    "explanation": "Trigeminal neuralgia is characterized by pain triggered by minor tactile stimulation."
  },
  // =======================================
// RED-BLUE LESION - PLASMA CELL GINGIVITIS
// =========================================
// 548
  {
    "question": "The most characteristic histopathologic feature of plasma cell gingivitis is:",
    "answers": [
      {"text": "Fibrous hyperplasia", "correct": false},
      {"text": "Plasma cell infiltrate in the lamina propria", "correct": true},
      {"text": "Necrotizing ulceration", "correct": false},
      {"text": "Granulomatous inflammation", "correct": false},
      {"text": "Abscess formation", "correct": false}
    ],
    "explanation": "Plasma cell gingivitis is characterized histologically by a dense plasma cell infiltrate in the lamina propria."
  },
  // 549
  {
    "question": "Plasma cell gingivitis is often associated with an allergic reaction to:",
    "answers": [
      {"text": "Dairy products", "correct": false},
      {"text": "Chewing gum and cinnamic aldehyde–containing toothpastes", "correct": true},
      {"text": "Gluten", "correct": false},
      {"text": "Citrus fruits", "correct": false},
      {"text": "Nuts", "correct": false}
    ],
    "explanation": "Allergic reactions to chewing gum and cinnamic aldehyde–containing toothpastes are commonly linked to plasma cell gingivitis."
  },
  // 550
  {
    "question": "Which of the following is NOT a common clinical feature of plasma cell gingivitis?",
    "answers": [
      {"text": "Fiery red, edematous attached gingiva", "correct": false},
      {"text": "Burning sensation of mouth, tongue, or lips", "correct": false},
      {"text": "Ulcerated gingival lesions", "correct": true},
      {"text": "Fissured and reddened commissures", "correct": false},
      {"text": "Atrophic, red tongue mucosa", "correct": false}
    ],
    "explanation": "Ulcerated gingival lesions are not typical of plasma cell gingivitis, which usually presents with erythema and edema without ulceration."
  },
  // 551
  {
    "question": "Plasma cell gingivitis usually affects:",
    "answers": [
      {"text": "Only children", "correct": false},
      {"text": "Only adults", "correct": false},
      {"text": "Adults and occasionally children of either gender", "correct": true},
      {"text": "Elderly males exclusively", "correct": false},
      {"text": "Only females", "correct": false}
    ],
    "explanation": "Plasma cell gingivitis affects adults and occasionally children of either gender."
  },
  // 552
  {
    "question": "The onset of plasma cell gingivitis is typically:",
    "answers": [
      {"text": "Gradual over years", "correct": false},
      {"text": "Sudden, with discomfort that may wax and wane", "correct": true},
      {"text": "Always chronic and persistent", "correct": false},
      {"text": "Asymptomatic", "correct": false},
      {"text": "Associated with fever and malaise", "correct": false}
    ],
    "explanation": "The onset is usually sudden, with discomfort that may wax and wane."
  },
  // 553
  {
    "question": "A 32-year-old woman complains of a burning sensation in her mouth and lips. On examination, her attached gingiva appears fiery red and edematous, her tongue is atrophic and red, and her lip commissures are fissured. There is no cervical lymphadenopathy or systemic complaint. She reports chewing flavored gum daily. What is the most likely diagnosis?",
    "answers": [
      {"text": "Lichen planus", "correct": false},
      {"text": "Plasma cell gingivitis", "correct": true},
      {"text": "Aphthous ulcer", "correct": false},
      {"text": "Herpetic gingivostomatitis", "correct": false},
      {"text": "Gingival carcinoma", "correct": false}
    ],
    "explanation": "The clinical presentation and history are characteristic of plasma cell gingivitis."
  },
  // 554
  {
    "question": "A patient with plasma cell gingivitis is advised to discontinue the use of which of the following to achieve symptom relief?",
    "answers": [
      {"text": "Antiseptic mouthwash", "correct": false},
      {"text": "Chewing gum and cinnamic aldehyde–containing toothpaste", "correct": true},
      {"text": "Soft diet", "correct": false},
      {"text": "Alcoholic beverages", "correct": false},
      {"text": "High-sugar snacks", "correct": false}
    ],
    "explanation": "Discontinuing chewing gum and cinnamic aldehyde–containing toothpaste often leads to symptom improvement."
  },
  // 555
  {
    "question": "Histologically, a biopsy from the gingiva of a patient with plasma cell gingivitis would MOST likely show:",
    "answers": [
      {"text": "Necrotizing epithelium with neutrophilic infiltrate", "correct": false},
      {"text": "Spongiotic epithelium with plasma cell infiltration in the lamina propria", "correct": true},
      {"text": "Fibrous overgrowth without inflammation", "correct": false},
      {"text": "Granulomatous inflammation with multinucleated giant cells", "correct": false},
      {"text": "Hyperkeratotic epithelium with no inflammatory cells", "correct": false}
    ],
    "explanation": "Biopsy typically shows spongiotic epithelium with dense plasma cell infiltration in the lamina propria."
  },
  // 556
  {
    "question": "Which of the following is a distinguishing clinical feature of plasma cell gingivitis compared to other gingival diseases?",
    "answers": [
      {"text": "Presence of cervical lymphadenopathy", "correct": false},
      {"text": "Systemic symptoms like fever", "correct": false},
      {"text": "Bright red, edematous gingiva without ulceration", "correct": true},
      {"text": "Chronic, painless gingival swelling", "correct": false},
      {"text": "Ulceration and necrosis", "correct": false}
    ],
    "explanation": "Plasma cell gingivitis presents with bright red, edematous gingiva without ulceration, distinguishing it from other gingival diseases."
  },
  // 557
  {
    "question": "A 25-year-old male patient presents with sudden onset burning of the mouth and lips after using a new cinnamon-flavored toothpaste. On exam, the gingiva is intensely red and edematous, tongue is atrophic, and commissures are fissured. What is the first-line management?",
    "answers": [
      {"text": "Topical corticosteroids", "correct": false},
      {"text": "Antiviral therapy", "correct": false},
      {"text": "Discontinuation of the triggering product", "correct": true},
      {"text": "Antibiotics", "correct": false},
      {"text": "Surgical excision", "correct": false}
    ],
    "explanation": "The first step is to discontinue the triggering product to alleviate symptoms."
  },
  // ========================
// WHITE LESION - LEUKOEDEMA
// ==========================
// 558
  {
    "question": "Leukoedema is best described as:",
    "answers": [
      {"text": "A malignant lesion of the buccal mucosa", "correct": false},
      {"text": "A generalized mild opacification of the buccal mucosa, considered a variation of normal", "correct": true},
      {"text": "A bacterial infection of the oral mucosa", "correct": false},
      {"text": "A chronic ulcerative condition", "correct": false},
      {"text": "A painful inflammatory lesion", "correct": false}
    ],
    "explanation": "Leukoedema is a generalized mild opacification of the buccal mucosa and is considered a variation of normal."
  },
  // 559
  {
    "question": "Which of the following statements about leukoedema is TRUE?",
    "answers": [
      {"text": "It usually presents with severe pain", "correct": false},
      {"text": "It is asymptomatic and symmetrically distributed in the buccal mucosa", "correct": true},
      {"text": "It has a high risk of malignant transformation", "correct": false},
      {"text": "It always requires surgical removal", "correct": false},
      {"text": "It is most common in elderly males exclusively", "correct": false}
    ],
    "explanation": "Leukoedema is asymptomatic and symmetrically distributed in the buccal mucosa."
  },
  // 560
  {
    "question": "Which factor has been implicated but not proven as a cause of leukoedema?",
    "answers": [
      {"text": "Smoking", "correct": false},
      {"text": "Alcohol ingestion", "correct": false},
      {"text": "Chewing tobacco", "correct": false},
      {"text": "Cannabis use", "correct": false},
      {"text": "All of the above", "correct": true}
    ],
    "explanation": "Smoking, alcohol ingestion, chewing tobacco, and cannabis use have all been implicated but not proven as causes of leukoedema."
  },
  // 561
  {
    "question": "A characteristic histopathologic feature of leukoedema is:",
    "answers": [
      {"text": "Necrotizing epithelium with neutrophils", "correct": false},
      {"text": "Parakeratosis with intracellular edema of spinous cells", "correct": true},
      {"text": "Fibrous hyperplasia with plasma cells", "correct": false},
      {"text": "Granulomatous inflammation with multinucleated giant cells", "correct": false},
      {"text": "Hyperkeratosis without cellular changes", "correct": false}
    ],
    "explanation": "Leukoedema shows parakeratosis with intracellular edema of spinous cells histologically."
  },
  // 562
  {
    "question": "What is the recommended treatment for leukoedema?",
    "answers": [
      {"text": "Topical corticosteroids", "correct": false},
      {"text": "Antibiotics", "correct": false},
      {"text": "Surgical excision", "correct": false},
      {"text": "No treatment is necessary", "correct": true},
      {"text": "Antiviral therapy", "correct": false}
    ],
    "explanation": "No treatment is necessary for leukoedema as it is a benign condition."
  },
  // 563
  {
    "question": "A 40-year-old African American man presents for a routine dental check-up. Examination reveals gray-white, filmy, diffuse changes on the buccal mucosa. The patient reports no symptoms. When the buccal mucosa is stretched, the opaque changes disappear. What is the most likely diagnosis?",
    "answers": [
      {"text": "Oral lichen planus", "correct": false},
      {"text": "Leukoedema", "correct": true},
      {"text": "White sponge nevus", "correct": false},
      {"text": "Chronic cheek biting lesion", "correct": false},
      {"text": "Hereditary benign intraepithelial dyskeratosis", "correct": false}
    ],
    "explanation": "The disappearance of opacification upon stretching the buccal mucosa is characteristic of leukoedema."
  },
 // 564
  {
    "question": "Which clinical feature distinguishes leukoedema from white sponge nevus?",
    "answers": [
      {"text": "Symmetrical distribution in the buccal mucosa", "correct": false},
      {"text": "Gray-white, filmy appearance", "correct": false},
      {"text": "Dissipation of opacification upon stretching of the mucosa", "correct": true},
      {"text": "Presence in nonwhite individuals", "correct": false},
      {"text": "No associated symptoms", "correct": false}
    ],
    "explanation": "Leukoedema shows dissipation of opacification upon stretching, unlike white sponge nevus."
  },
  // 565
  {
    "question": "A patient presents with diffuse gray-white opacification of the buccal mucosa. He is a smoker and occasional cannabis user. Histology shows parakeratosis and intracellular edema of spinous cells. Which statement is correct?",
    "answers": [
      {"text": "The lesion has malignant potential and must be excised", "correct": false},
      {"text": "The lesion is symptomatic and requires pain management", "correct": false},
      {"text": "The lesion is innocuous, and no treatment is required", "correct": true},
      {"text": "Antibiotics are indicated", "correct": false},
      {"text": "Antifungal therapy is recommended", "correct": false}
    ],
    "explanation": "Leukoedema is a benign lesion with no malignant potential and requires no treatment."
  },
  // 566
  {
    "question": "A dentist is unsure whether a buccal mucosa lesion is leukoedema or another white lesion. What is the next best step?",
    "answers": [
      {"text": "Immediate surgical excision", "correct": false},
      {"text": "Biopsy for histopathologic confirmation", "correct": true},
      {"text": "Prescribe corticosteroids", "correct": false},
      {"text": "Prescribe antibiotics", "correct": false},
      {"text": "Observe without any examination", "correct": false}
    ],
    "explanation": "Biopsy is the next best step to confirm diagnosis when clinical features are uncertain."
  },
  // 567
  {
    "question": "Leukoedema most commonly shows which histologic feature in the spinous layer?",
    "answers": [
      {"text": "Necrosis", "correct": false},
      {"text": "Intracellular edema with pyknotic nuclei", "correct": true},
      {"text": "Fibrosis", "correct": false},
      {"text": "Plasma cell infiltration", "correct": false},
      {"text": "Granuloma formation", "correct": false}
    ],
    "explanation": "Intracellular edema with pyknotic nuclei in the spinous layer is characteristic of leukoedema."
  },
  // ===============================
// WHITE LESION - WHITE SPONGE NEVUS 
// =================================
// 568
  {
    "question": "White Sponge Nevus (WSN) is inherited in which pattern?",
    "answers": [
      {"text": "Autosomal recessive", "correct": false},
      {"text": "X-linked recessive", "correct": false},
      {"text": "Autosomal dominant", "correct": true},
      {"text": "Mitochondrial inheritance", "correct": false},
      {"text": "Polygenic inheritance", "correct": false}
    ],
    "explanation": "White Sponge Nevus is inherited in an autosomal dominant pattern."
  },
  // 569
  {
    "question": "The genetic mutations responsible for WSN affect which keratins?",
    "answers": [
      {"text": "Keratin 1 and 10", "correct": false},
      {"text": "Keratin 4 and 13", "correct": true},
      {"text": "Keratin 5 and 14", "correct": false},
      {"text": "Keratin 8 and 18", "correct": false},
      {"text": "Keratin 2 and 6", "correct": false}
    ],
    "explanation": "Mutations in keratin 4 and 13 genes are responsible for White Sponge Nevus."
  },
  // 570
  {
    "question": "Which of the following is TRUE about the clinical features of WSN?",
    "answers": [
      {"text": "It is painful and ulcerated", "correct": false},
      {"text": "It affects the skin but spares oral mucosa", "correct": false},
      {"text": "It presents as thickened, folded, spongy, white lesions, usually bilateral and symmetric", "correct": true},
      {"text": "It typically appears in late adulthood", "correct": false},
      {"text": "It is commonly associated with fever and systemic symptoms", "correct": false}
    ],
    "explanation": "WSN presents as thickened, folded, spongy, white lesions, usually bilateral and symmetric."
  },
  // 571
  {
    "question": "Which mucosal sites are most commonly involved in WSN?",
    "answers": [
      {"text": "Buccal mucosa, tongue, and vestibular mucosa", "correct": true},
      {"text": "Conjunctiva and cornea", "correct": false},
      {"text": "Skin and scalp", "correct": false},
      {"text": "Palate only", "correct": false},
      {"text": "Gingiva exclusively", "correct": false}
    ],
    "explanation": "The buccal mucosa, tongue, and vestibular mucosa are most commonly involved in WSN."
  },
  // 572
  {
    "question": "The histopathologic hallmark of WSN is:",
    "answers": [
      {"text": "Necrosis and ulceration", "correct": false},
      {"text": "Hydropic/clear cell change in the stratum spinosum with perinuclear eosinophilic condensation", "correct": true},
      {"text": "Fibrous hyperplasia with inflammatory infiltrate", "correct": false},
      {"text": "Granulomatous inflammation with multinucleated giant cells", "correct": false},
      {"text": "Hyperkeratosis without cellular changes", "correct": false}
    ],
    "explanation": "The hallmark is hydropic/clear cell change in the stratum spinosum with perinuclear eosinophilic condensation."
  },
  // 573
  {
    "question": "A 10-year-old child presents with asymptomatic, thickened, white, folded lesions on the buccal mucosa. Lesions are bilateral and symmetric, present since early childhood. There is no involvement of the skin or conjunctiva. What is the most likely diagnosis?",
    "answers": [
      {"text": "Leukoedema", "correct": false},
      {"text": "White Sponge Nevus", "correct": true},
      {"text": "Plasma cell gingivitis", "correct": false},
      {"text": "Lichen planus", "correct": false},
      {"text": "Candidiasis", "correct": false}
    ],
    "explanation": "The presentation is characteristic of White Sponge Nevus."
  },
  // 574
  {
    "question": "Histologic examination of a biopsy from a patient with WSN would MOST likely reveal:",
    "answers": [
      {"text": "Necrotizing ulcerative epithelium with neutrophils", "correct": false},
      {"text": "Marked spongiosis and acanthosis with parakeratosis and perinuclear eosinophilic condensation in prickle cells", "correct": true},
      {"text": "Fibrous hyperplasia with plasma cells", "correct": false},
      {"text": "Granulomatous inflammation", "correct": false},
      {"text": "Hyperkeratosis only with no cellular changes", "correct": false}
    ],
    "explanation": "Histology shows marked spongiosis and acanthosis with parakeratosis and perinuclear eosinophilic condensation."
  },
  // 575
  {
    "question": "Which of the following sites is usually spared in WSN?",
    "answers": [
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Vestibular mucosa", "correct": false},
      {"text": "Tongue", "correct": false},
      {"text": "Conjunctival mucosa", "correct": true},
      {"text": "Esophagus", "correct": false}
    ],
    "explanation": "Conjunctival mucosa is usually spared in White Sponge Nevus."
  },
  // 576
  {
    "question": "Which of the following conditions is NOT a usual differential diagnosis of WSN?",
    "answers": [
      {"text": "Hereditary benign epithelial dyskeratosis", "correct": false},
      {"text": "Lichen planus", "correct": false},
      {"text": "Cheek chewing", "correct": false},
      {"text": "Candidiasis", "correct": false},
      {"text": "Plasma cell gingivitis", "correct": true}
    ],
    "explanation": "Plasma cell gingivitis is not a usual differential diagnosis of WSN."
  },
  // 577
  {
    "question": "What is the recommended treatment for White Sponge Nevus?",
    "answers": [
      {"text": "Topical corticosteroids", "correct": false},
      {"text": "Systemic antibiotics", "correct": false},
      {"text": "Surgical excision", "correct": false},
      {"text": "No treatment, as it is benign and asymptomatic", "correct": true},
      {"text": "Antifungal therapy", "correct": false}
    ],
    "explanation": "No treatment is recommended as WSN is benign and asymptomatic."
  },
  // ===============================================================
// WHITE LESION - Hereditary Benign Intraepithelial Dyskeratosis  
// ================================================================
// 578
  {
    "question": "Hereditary Benign Intraepithelial Dyskeratosis (HBID) is inherited in which pattern?",
    "answers": [
      {"text": "Autosomal recessive", "correct": false},
      {"text": "Autosomal dominant", "correct": true},
      {"text": "X-linked recessive", "correct": false},
      {"text": "Mitochondrial inheritance", "correct": false},
      {"text": "Polygenic inheritance", "correct": false}
    ],
    "explanation": "HBID is inherited in an autosomal dominant pattern."
  },
  // 579
  {
    "question": "Which of the following ocular features is characteristic of HBID?",
    "answers": [
      {"text": "Cataracts", "correct": false},
      {"text": "Bulbar conjunctivitis and conjunctival plaques at the corneal limbus", "correct": true},
      {"text": "Glaucoma", "correct": false},
      {"text": "Retinal detachment", "correct": false},
      {"text": "Macular degeneration", "correct": false}
    ],
    "explanation": "Bulbar conjunctivitis and conjunctival plaques at the corneal limbus are characteristic ocular features of HBID."
  },
  // 580
  {
    "question": "The oral lesions in HBID are usually:",
    "answers": [
      {"text": "Painful and ulcerated", "correct": false},
      {"text": "Soft, spongy, asymptomatic white folds and plaques", "correct": true},
      {"text": "Necrotizing and hemorrhagic", "correct": false},
      {"text": "Red and inflamed", "correct": false},
      {"text": "Pigmented brown patches", "correct": false}
    ],
    "explanation": "Oral lesions in HBID are typically soft, spongy, asymptomatic white folds and plaques."
  },
  // 581
  {
    "question": "Common sites of oral involvement in HBID include:",
    "answers": [
      {"text": "Buccal and labial mucosa, labial commissures, floor of mouth, lateral tongue, gingiva, palate", "correct": true},
      {"text": "Dorsum of tongue exclusively", "correct": false},
      {"text": "Gingiva only", "correct": false},
      {"text": "Palate only", "correct": false},
      {"text": "Conjunctiva only", "correct": false}
    ],
    "explanation": "HBID commonly involves buccal and labial mucosa, labial commissures, floor of mouth, lateral tongue, gingiva, and palate."
  },
  // 582
  {
    "question": "HBID typically manifests clinically:",
    "answers": [
      {"text": "In late adulthood", "correct": false},
      {"text": "In early life, usually within the first year", "correct": true},
      {"text": "During teenage years", "correct": false},
      {"text": "Only after trauma or irritation", "correct": false},
      {"text": "Only in males", "correct": false}
    ],
    "explanation": "HBID usually manifests early in life, often within the first year."
  },
  // 583
  {
    "question": "Histologically, which of the following is a hallmark of HBID?",
    "answers": [
      {"text": "Necrotizing ulceration", "correct": false},
      {"text": "Enlarged hyaline keratinocytes (dyskeratotic elements) in the superficial half of the epithelium", "correct": true},
      {"text": "Granulomatous inflammation", "correct": false},
      {"text": "Plasma cell infiltration", "correct": false},
      {"text": "Fibrous hyperplasia only", "correct": false}
    ],
    "explanation": "A hallmark of HBID is enlarged hyaline keratinocytes (dyskeratotic elements) in the superficial half of the epithelium."
  },
  // 584
  {
    "question": "What is the recommended treatment for HBID?",
    "answers": [
      {"text": "Topical corticosteroids", "correct": false},
      {"text": "Systemic antibiotics", "correct": false},
      {"text": "Surgical excision", "correct": false},
      {"text": "No treatment; self-limiting and benign", "correct": true},
      {"text": "Antifungal therapy", "correct": false}
    ],
    "explanation": "HBID is self-limiting and benign, requiring no treatment."
  },
  // 585
  {
    "question": "A 6-month-old infant presents with photophobia and conjunctival plaques at the corneal limbus. Oral examination reveals soft, spongy, white folds on the buccal mucosa and labial commissures. The dorsum of the tongue is spared. What is the most likely diagnosis?",
    "answers": [
      {"text": "White Sponge Nevus", "correct": false},
      {"text": "Hereditary Benign Intraepithelial Dyskeratosis", "correct": true},
      {"text": "Plasma Cell Gingivitis", "correct": false},
      {"text": "Leukoedema", "correct": false},
      {"text": "Candidiasis", "correct": false}
    ],
    "explanation": "The clinical presentation is characteristic of Hereditary Benign Intraepithelial Dyskeratosis."
  },
  // 586
  {
    "question": "A biopsy from the oral mucosa of a patient with suspected HBID shows epithelial hyperplasia, acanthosis, minimal lamina propria inflammation, and enlarged hyaline keratinocytes in the superficial epithelium. Which feature differentiates HBID from White Sponge Nevus?",
    "answers": [
      {"text": "Autosomal dominant inheritance", "correct": false},
      {"text": "Presence of ocular involvement such as conjunctival plaques", "correct": true},
      {"text": "Spongy white oral mucosa", "correct": false},
      {"text": "Bilateral distribution", "correct": false},
      {"text": "Benign course", "correct": false}
    ],
    "explanation": "Ocular involvement such as conjunctival plaques differentiates HBID from White Sponge Nevus."
  },
  // 587
  {
    "question": "Which of the following statements regarding the prognosis of HBID is correct?",
    "answers": [
      {"text": "It is premalignant and requires long-term surveillance", "correct": false},
      {"text": "It is self-limiting and poses no risk of malignant transformation", "correct": true},
      {"text": "It often progresses to squamous cell carcinoma", "correct": false},
      {"text": "It requires systemic immunosuppressive therapy", "correct": false},
      {"text": "Oral lesions must always be surgically removed", "correct": false}
    ],
    "explanation": "HBID is self-limiting and poses no risk of malignant transformation."
  },
  // 588
  {
    "question": "A pediatric patient with white, spongy oral lesions and early-onset photophobia is being evaluated. What other system should the clinician examine?",
    "answers": [
      {"text": "Cardiovascular system", "correct": false},
      {"text": "Ocular system", "correct": true},
      {"text": "Renal system", "correct": false},
      {"text": "Gastrointestinal system", "correct": false},
      {"text": "Skeletal system", "correct": false}
    ],
    "explanation": "The ocular system should be examined due to the association of HBID with ocular lesions."
  },
  // 589
  {
    "question": "HBID lesions increase in extent until:",
    "answers": [
      {"text": "First year of life only", "correct": false},
      {"text": "Early childhood", "correct": false},
      {"text": "Midadolescence", "correct": true},
      {"text": "Adulthood", "correct": false},
      {"text": "They remain static throughout life", "correct": false}
    ],
    "explanation": "HBID lesions increase in extent until midadolescence."
  },
// ====================================
// WHITE LESION - FOLICULLAR KERATOSIS  
// ====================================
// 590
  {
    "question": "Darier's disease is inherited in which pattern?",
    "answers": [
      {"text": "Autosomal recessive", "correct": false},
      {"text": "Autosomal dominant", "correct": true},
      {"text": "X-linked recessive", "correct": false},
      {"text": "Polygenic inheritance", "correct": false},
      {"text": "Mitochondrial inheritance", "correct": false}
    ],
    "explanation": "Darier's disease is inherited in an autosomal dominant pattern."
  },
  // 591
  {
    "question": "Mutations in which gene are responsible for Dariers disease?",
    "answers": [
      {"text": "KRT4 and KRT13", "correct": false},
      {"text": "ATP2A2 on chromosome 12q23-24", "correct": true},
      {"text": "TP53", "correct": false},
      {"text": "FBN1", "correct": false},
      {"text": "COL7A1", "correct": false}
    ],
    "explanation": "Mutations in the ATP2A2 gene on chromosome 12q23-24 cause Darier's disease."
  },
  // 592
  {
    "question": "Which cellular defect underlies Dariers disease?",
    "answers": [
      {"text": "Desmosomal defects causing altered epithelial cell adhesion", "correct": true},
      {"text": "Keratin 4/13 mutations", "correct": false},
      {"text": "Hyperproliferation of plasma cells", "correct": false},
      {"text": "Basal membrane breakdown", "correct": false},
      {"text": "Mitochondrial DNA mutation", "correct": false}
    ],
    "explanation": "Darier's disease results from desmosomal defects causing altered epithelial cell adhesion."
  },
  // 593
  {
    "question": "What percentage of patients with Dariers disease demonstrate oral lesions?",
    "answers": [
      {"text": "5%", "correct": false},
      {"text": "13%", "correct": true},
      {"text": "25%", "correct": false},
      {"text": "50%", "correct": false},
      {"text": "75%", "correct": false}
    ],
    "explanation": "Approximately 13% of patients with Darier's disease have oral lesions."
  },
  // 594
  {
    "question": "Common oral sites affected in Dariers disease include:",
    "answers": [
      {"text": "Buccal mucosa and floor of mouth", "correct": false},
      {"text": "Attached gingiva and hard palate", "correct": true},
      {"text": "Tongue dorsum exclusively", "correct": false},
      {"text": "Labial mucosa only", "correct": false},
      {"text": "Soft palate only", "correct": false}
    ],
    "explanation": "The attached gingiva and hard palate are common oral sites affected in Darier's disease."
  },
  // 595
  {
    "question": "Which nail changes are associated with Darier's disease?",
    "answers": [
      {"text": "Beau's lines", "correct": false},
      {"text": "Fragility, splintering, and subungual keratosis", "correct": true},
      {"text": "Clubbing", "correct": false},
      {"text": "Pitting only", "correct": false},
      {"text": "Onychomycosis", "correct": false}
    ],
    "explanation": "Darier's disease is associated with nail fragility, splintering, and subungual keratosis."
  },
  // 596
  {
    "question": "The histopathologic hallmark of Darier's disease includes:",
    "answers": [
      {"text": "Plasma cell infiltration in lamina propria", "correct": false},
      {"text": "Suprabasal lacunae (clefts) with acantholytic epithelial cells, and dyskeratotic corps ronds and grains", "correct": true},
      {"text": "Necrotizing ulceration", "correct": false},
      {"text": "Granulomatous inflammation", "correct": false},
      {"text": "Fibrous hyperplasia without cellular changes", "correct": false}
    ],
    "explanation": "The hallmark histopathology includes suprabasal lacunae with acantholytic epithelial cells and dyskeratotic corps ronds and grains."
  },
  // 597
  {
    "question": "Which of the following is a key cytologic feature of Darier's disease?",
    "answers": [
      {"text": "Corps ronds – large keratinized squamous cells with round, basophilic nuclei and intensely eosinophilic cytoplasm", "correct": true},
      {"text": "Multinucleated giant cells", "correct": false},
      {"text": "Plasma cell predominance", "correct": false},
      {"text": "Dysplastic basal keratinocytes only", "correct": false},
      {"text": "Granuloma formation", "correct": false}
    ],
    "explanation": "Corps ronds are large keratinized squamous cells with round, basophilic nuclei and intensely eosinophilic cytoplasm, characteristic of Darier’s disease."
  },
  // 598
  {
    "question": "The primary goal of treatment in Darier's disease is:",
    "answers": [
      {"text": "Complete cure", "correct": false},
      {"text": "Improve appearance, reduce symptoms, prevent infections", "correct": true},
      {"text": "Malignant transformation prevention", "correct": false},
      {"text": "Antibiotic prophylaxis only", "correct": false},
      {"text": "No treatment is necessary", "correct": false}
    ],
    "explanation": "Treatment aims to improve appearance, reduce symptoms, and prevent infections."
  },
  // 599
  {
    "question": "Topical therapies that may be used in Darier's disease include:",
    "answers": [
      {"text": "Corticosteroids and retinoic acid", "correct": true},
      {"text": "Antibiotics and antifungals", "correct": false},
      {"text": "Antivirals only", "correct": false},
      {"text": "NSAIDs", "correct": false},
      {"text": "No therapy is effective", "correct": false}
    ],
    "explanation": "Topical corticosteroids and retinoic acid may be used in treatment."
  },
  // 600
  {
    "question": "A 15-year-old patient presents with small, skin-colored papular lesions over the face, trunk, and intertriginous areas. The lesions feel greasy and coalesce into verrucous patches. Oral examination reveals whitish papules on the hard palate and attached gingiva, giving a cobblestone appearance. Which of the following is the most likely diagnosis?",
    "answers": [
      {"text": "White Sponge Nevus", "correct": false},
      {"text": "Follicular Keratosis (Darier’s disease)", "correct": true},
      {"text": "Leukoedema", "correct": false},
      {"text": "Plasma Cell Gingivitis", "correct": false},
      {"text": "Hereditary Benign Intraepithelial Dyskeratosis", "correct": false}
    ],
    "explanation": "The clinical presentation is characteristic of Follicular Keratosis (Darier's disease)."
  },
  // 601
  {
    "question": "Histologic examination of a biopsy from the oral mucosa of this patient would MOST likely reveal:",
    "answers": [
      {"text": "Suprabasal clefts with acantholytic epithelial cells, parakeratosis, and dyskeratotic corps ronds and grains", "correct": true},
      {"text": "Plasma cell infiltration", "correct": false},
      {"text": "Necrotizing epithelium", "correct": false},
      {"text": "Fibrous hyperplasia only", "correct": false},
      {"text": "Granulomatous inflammation", "correct": false}
    ],
    "explanation": "Histology typically shows suprabasal clefts with acantholytic epithelial cells, parakeratosis, and dyskeratotic corps ronds and grains."
  },
  // 602
  {
    "question": "A patient with Dariers disease asks about long-term prognosis. Which statement is correct?",
    "answers": [
      {"text": "The disease is self-limiting and resolves completely in adulthood", "correct": false},
      {"text": "It is chronic, slowly progressive, but remissions may occur; long-term cosmetic management is the mainstay", "correct": true},
      {"text": "It frequently transforms into squamous cell carcinoma", "correct": false},
      {"text": "Untreated cases develop blindness", "correct": false},
      {"text": "Oral lesions always require surgical excision", "correct": false}
    ],
    "explanation": "Darier's disease is chronic and slowly progressive, with remissions; management focuses on cosmetic and symptom relief."
  },
  // 603
  {
    "question": "Which dermatologic pattern may be observed in Darier's disease?",
    "answers": [
      {"text": "Zosteriform (following a dermatome)", "correct": true},
      {"text": "Random patchy distribution only", "correct": false},
      {"text": "Linear exclusively on the hands", "correct": false},
      {"text": "Conjunctival plaques", "correct": false},
      {"text": "Symmetrical gingival swelling", "correct": false}
    ],
    "explanation": "Darier's disease may show a zosteriform pattern following a dermatome."
  },
  // 604
  {
    "question": "A patient presents with cobblestone-like oral papules and hyperkeratosis of the palms and soles. Which additional clinical feature would most likely support a diagnosis of Darier’s disease?",
    "answers": [
      {"text": "Fragile, splintered fingernails", "correct": true},
      {"text": "Ulcerative gingivitis", "correct": false},
      {"text": "Diffuse leukoplakia", "correct": false},
      {"text": "Conjunctival plaques", "correct": false},
      {"text": "Fever and malaise", "correct": false}
    ],
    "explanation": "Fragile, splintered fingernails are a common nail feature supporting Darier's disease diagnosis."
  },
  // ==============================================
// WHITE LESION - Focal (Frictional) Hyperkeratosis  
// ================================================
// 605
  {
    "question": "Focal (frictional) hyperkeratosis is primarily caused by:",
    "answers": [
      {"text": "Viral infection", "correct": false},
      {"text": "Chronic rubbing or friction against oral mucosa", "correct": true},
      {"text": "Autoimmune disease", "correct": false},
      {"text": "Genetic mutations in keratin 4/13", "correct": false},
      {"text": "Bacterial infection", "correct": false}
    ],
    "explanation": "Focal (frictional) hyperkeratosis is caused by chronic rubbing or friction against the oral mucosa."
  },
  // 606
  {
    "question": "Which of the following sites is most commonly affected by frictional hyperkeratosis?",
    "answers": [
      {"text": "Hard palate exclusively", "correct": false},
      {"text": "Buccal mucosa, lateral tongue, lips, and edentulous alveolar ridges", "correct": true},
      {"text": "Dorsum of tongue only", "correct": false},
      {"text": "Gingiva exclusively", "correct": false},
      {"text": "Conjunctiva", "correct": false}
    ],
    "explanation": "The buccal mucosa, lateral tongue, lips, and edentulous alveolar ridges are the most commonly affected sites."
  },
  {
    "question": "The microscopic hallmark of frictional hyperkeratosis is:",
    "answers": [
      {"text": "Dysplasia with atypical keratinocytes", "correct": false},
      {"text": "Hyperkeratosis without dysplastic change", "correct": true},
      {"text": "Granulomatous inflammation", "correct": false},
      {"text": "Plasma cell infiltration", "correct": false},
      {"text": "Suprabasal acantholysis", "correct": false}
    ],
    "explanation": "Frictional hyperkeratosis shows hyperkeratosis without dysplastic changes microscopically."
  },
  {
    "question": "Which of the following habits is commonly associated with focal hyperkeratosis?",
    "answers": [
      {"text": "Chronic cheek or lip chewing", "correct": false},
      {"text": "Tongue-thrusting", "correct": false},
      {"text": "Ill-fitting dentures", "correct": false},
      {"text": "Trauma from teeth", "correct": false},
      {"text": "All of the above", "correct": true}
    ],
    "explanation": "All these habits—chronic cheek or lip chewing, tongue-thrusting, ill-fitting dentures, and trauma from teeth—are associated with focal hyperkeratosis."
  },
  {
    "question": "What is the malignant potential of frictional hyperkeratosis?",
    "answers": [
      {"text": "High", "correct": false},
      {"text": "Moderate", "correct": false},
      {"text": "Low", "correct": false},
      {"text": "None", "correct": true},
      {"text": "Only if associated with HPV", "correct": false}
    ],
    "explanation": "Frictional hyperkeratosis has no malignant potential."
  },
  {
    "question": "The recommended management of frictional hyperkeratosis includes:",
    "answers": [
      {"text": "Observation and elimination of the causative habit", "correct": true},
      {"text": "Topical corticosteroids", "correct": false},
      {"text": "Systemic antibiotics", "correct": false},
      {"text": "Surgical excision in all cases", "correct": false},
      {"text": "Radiation therapy", "correct": false}
    ],
    "explanation": "Management involves observation and elimination of the causative habit."
  },
  {
    "question": "When should a biopsy be performed for a white lesion suspected to be frictional hyperkeratosis?",
    "answers": [
      {"text": "Always", "correct": false},
      {"text": "Only if the clinical diagnosis is in doubt", "correct": true},
      {"text": "Only if painful", "correct": false},
      {"text": "Only if associated with ulceration", "correct": false},
      {"text": "Never", "correct": false}
    ],
    "explanation": "Biopsy is indicated only if the clinical diagnosis is uncertain."
  },
  {
    "question": "A 45-year-old patient presents with a white, thickened lesion along the buccal mucosa adjacent to the occlusal line. The patient has a habit of chronic cheek chewing. The lesion is asymptomatic, and no dysplasia is noted on biopsy. What is the most likely diagnosis?",
    "answers": [
      {"text": "Oral leukoplakia", "correct": false},
      {"text": "Focal (frictional) hyperkeratosis", "correct": true},
      {"text": "White Sponge Nevus", "correct": false},
      {"text": "Lichen planus", "correct": false},
      {"text": "Candidiasis", "correct": false}
    ],
    "explanation": "The lesion is consistent with focal (frictional) hyperkeratosis caused by chronic cheek chewing."
  },
  {
    "question": "A patient with an ill-fitting lower denture develops a white lesion on the edentulous ridge. Which of the following is the best next step?",
    "answers": [
      {"text": "Immediate excision", "correct": false},
      {"text": "Advise the patient to smooth or adjust the denture and observe the lesion", "correct": true},
      {"text": "Prescribe systemic antibiotics", "correct": false},
      {"text": "Prescribe topical corticosteroids", "correct": false},
      {"text": "Refer for chemotherapy", "correct": false}
    ],
    "explanation": "Adjusting the denture and observing the lesion is the appropriate management."
  },
  {
    "question": "A patient presents with white, opacified lateral tongue mucosa. He reports tongue-thrusting habits. Histology shows hyperkeratosis without dysplasia. What is the most important component of management?",
    "answers": [
      {"text": "Eliminate the causative habit", "correct": true},
      {"text": "Prescribe antifungal therapy", "correct": false},
      {"text": "Refer for surgical excision", "correct": false},
      {"text": "Prescribe retinoic acid", "correct": false},
      {"text": "Biopsy all lesions regardless", "correct": false}
    ],
    "explanation": "Eliminating the causative habit is key to management."
  },
  {
    "question": "Which of the following statements regarding focal hyperkeratosis is correct?",
    "answers": [
      {"text": "It has significant malignant potential if left untreated", "correct": false},
      {"text": "Clinical improvement occurs after removal of the causative trauma", "correct": true},
      {"text": "It presents as painful ulcerative lesions", "correct": false},
      {"text": "Histology shows acantholysis and dyskeratosis", "correct": false},
      {"text": "Systemic therapy is always required", "correct": false}
    ],
    "explanation": "Clinical improvement occurs after removal of the causative trauma."
  },
  {
    "question": "A dentist notices a white lesion on the lateral tongue of a patient who recently switched to a new denture. The lesion is asymptomatic and biopsy shows only hyperkeratosis. What is the most appropriate advice?",
    "answers": [
      {"text": "Observe and correct the trauma from the denture", "correct": true},
      {"text": "Start systemic corticosteroids", "correct": false},
      {"text": "Prescribe antifungal mouthwash", "correct": false},
      {"text": "Immediate surgical excision", "correct": false},
      {"text": "No follow-up needed", "correct": false}
    ],
    "explanation": "Observation and correction of trauma from the denture is appropriate."
  },
   // =============================================================
// WHITE LESION - White Lesions Associated with Smokeless Tobacco  
// ===============================================================
// 605
  {
    "question": "Which demographic is most commonly associated with smokeless tobacco use in the United States?",
    "answers": [
      {"text": "White males", "correct": true},
      {"text": "White females", "correct": false},
      {"text": "African American males", "correct": false},
      {"text": "Asian males", "correct": false},
      {"text": "Hispanic females", "correct": false}
    ],
    "explanation": "White males are the demographic most commonly associated with smokeless tobacco use in the United States."
  },
  {
    "question": "What form of smokeless tobacco is used in Sweden that has lower concentrations of harmful nicotine and derivatives?",
    "answers": [
      {"text": "Chewing tobacco", "correct": false},
      {"text": "Snus", "correct": true},
      {"text": "Betel quid", "correct": false},
      {"text": "Moist snuff", "correct": false},
      {"text": "Cigarette tobacco", "correct": false}
    ],
    "explanation": "Snus is a form of smokeless tobacco used in Sweden with lower concentrations of harmful nicotine and derivatives."
  },
  {
    "question": "Which carcinogenic compound is commonly found in smokeless tobacco?",
    "answers": [
      {"text": "Polycyclic aromatic hydrocarbons", "correct": false},
      {"text": "N-nitrosonornicotine", "correct": true},
      {"text": "Tar", "correct": false},
      {"text": "Nicotine only", "correct": false},
      {"text": "Formaldehyde", "correct": false}
    ],
    "explanation": "N-nitrosonornicotine is a carcinogenic compound commonly found in smokeless tobacco."
  },
  {
    "question": "Oral mucosal lesions caused by smokeless tobacco are most likely to appear in:",
    "answers": [
      {"text": "Dorsum of the tongue", "correct": false},
      {"text": "Mucobuccal fold of the mandible in the incisor or molar region", "correct": true},
      {"text": "Hard palate", "correct": false},
      {"text": "Labial commissures", "correct": false},
      {"text": "Floor of the mouth", "correct": false}
    ],
    "explanation": "Lesions typically appear in the mucobuccal fold of the mandible in the incisor or molar region."
  },
  {
    "question": "Histopathologic features of smokeless tobacco–associated lesions may include all EXCEPT:",
    "answers": [
      {"text": "Parakeratosis in the form of spires or chevrons", "correct": false},
      {"text": "Vacuolization or edema in the superficial epithelium", "correct": false},
      {"text": "Chronic inflammatory cell infiltrate", "correct": false},
      {"text": "Dysplastic changes in some cases", "correct": false},
      {"text": "Complete absence of keratinization", "correct": true}
    ],
    "explanation": "Complete absence of keratinization is not a feature of smokeless tobacco–associated lesions."
  },
  {
    "question": "Which factor increases the likelihood of developing leukoplakia from smokeless tobacco?",
    "answers": [
      {"text": "Less than 1 tin of tobacco per week", "correct": false},
      {"text": "Habit duration of more than 2 years or use of ≥3 tins per week", "correct": true},
      {"text": "Only occasional exposure", "correct": false},
      {"text": "Use of cigarettes instead of smokeless tobacco", "correct": false},
      {"text": "Use limited to less than 6 months", "correct": false}
    ],
    "explanation": "Habit duration of more than 2 years or use of ≥3 tins per week increases the risk of leukoplakia."
  },
  {
    "question": "Which of the following statements regarding treatment of smokeless tobacco–associated lesions is correct?",
    "answers": [
      {"text": "Immediate surgical excision is required in all cases", "correct": false},
      {"text": "Discontinuation of tobacco use may allow lesions to regress", "correct": true},
      {"text": "Lesions are highly malignant and require chemotherapy", "correct": false},
      {"text": "Lesions do not require cessation of the habit", "correct": false},
      {"text": "Topical corticosteroids are first-line therapy", "correct": false}
    ],
    "explanation": "Discontinuation of tobacco use may allow lesions to regress."
  },
  {
    "question": "Long-term smokeless tobacco use can result in all of the following EXCEPT:",
    "answers": [
      {"text": "Slight risk of malignant transformation", "correct": false},
      {"text": "Dental abrasion and periodontal disease", "correct": false},
      {"text": "Alteration of taste", "correct": false},
      {"text": "Systemic autoimmune disease", "correct": true},
      {"text": "Oral mucosal white patches", "correct": false}
    ],
    "explanation": "Systemic autoimmune disease is not associated with long-term smokeless tobacco use."
  },
  {
    "question": "What is the approximate pH range of snuff that may contribute to mucosal alteration?",
    "answers": [
      {"text": "4.0–5.5", "correct": false},
      {"text": "6.0–7.0", "correct": false},
      {"text": "7.0–7.5", "correct": false},
      {"text": "8.2–9.3", "correct": true},
      {"text": "10.0–11.0", "correct": false}
    ],
    "explanation": "The pH range of snuff is approximately 8.2–9.3, which may contribute to mucosal changes."
  },
  {
    "question": "Which form of smokeless tobacco is more likely to induce oral lesions?",
    "answers": [
      {"text": "Chewing tobacco", "correct": false},
      {"text": "Snuff", "correct": true},
      {"text": "Cigarette tobacco", "correct": false},
      {"text": "Nicotine gum", "correct": false},
      {"text": "Betel nut alone", "correct": false}
    ],
    "explanation": "Snuff is more likely to induce oral lesions compared to other forms."
  },
  {
    "question": "A 35-year-old white male presents with an asymptomatic white patch in the mandibular vestibular mucosa, corresponding to the site where he holds his snuff. The adjacent teeth show signs of abrasion and mild periodontal disease. Biopsy shows mild parakeratosis with chronic inflammatory cell infiltrate. What is the most likely diagnosis?",
    "answers": [
      {"text": "Focal hyperkeratosis", "correct": false},
      {"text": "Smokeless tobacco–associated white lesion (snuff dipper’s lesion)", "correct": true},
      {"text": "Oral leukoplakia unrelated to tobacco", "correct": false},
      {"text": "White Sponge Nevus", "correct": false},
      {"text": "Candidiasis", "correct": false}
    ],
    "explanation": "The lesion is consistent with a smokeless tobacco–associated white lesion, also known as snuff dipper’s lesion."
  },
  {
    "question": "A patient has been using smokeless tobacco for 10 years. He develops a heavy, folded, hyperkeratotic lesion in the mandibular vestibule. Which of the following is TRUE regarding the lesion?",
    "answers": [
      {"text": "It is highly likely to transform into squamous cell carcinoma immediately", "correct": false},
      {"text": "The lesion is generally painless and asymptomatic", "correct": true},
      {"text": "Discontinuation of tobacco has no effect", "correct": false},
      {"text": "It is usually ulcerated and tender", "correct": false},
      {"text": "Topical antibiotics are required", "correct": false}
    ],
    "explanation": "The lesion is generally painless and asymptomatic."
  },
  {
    "question": "A long-term user of snuff has a white lesion in the mandibular vestibule. Which histopathologic feature might suggest an increased risk of malignant transformation?",
    "answers": [
      {"text": "Parakeratosis without dysplasia", "correct": false},
      {"text": "Vacuolization of superficial epithelium", "correct": false},
      {"text": "Chronic inflammatory infiltrate", "correct": false},
      {"text": "Epithelial dysplasia", "correct": true},
      {"text": "Edema of lamina propria", "correct": false}
    ],
    "explanation": "Epithelial dysplasia suggests an increased risk of malignant transformation."
  },
  {
    "question": "Which advice is most appropriate for a patient with a smokeless tobacco–associated lesion?",
    "answers": [
      {"text": "Continue the habit and monitor", "correct": false},
      {"text": "Discontinue use and biopsy if the lesion is ulcerated, indurated, or persistent", "correct": true},
      {"text": "Prescribe topical corticosteroids immediately", "correct": false},
      {"text": "Surgical excision in all cases", "correct": false},
      {"text": "No follow-up is necessary", "correct": false}
    ],
    "explanation": "Discontinuing tobacco use and biopsy if the lesion is suspicious is the appropriate advice."
  },
  {
    "question": "A dentist notices a granular, hyperkeratotic lesion in the mucobuccal fold of the mandible in a snuff user. Which additional clinical finding would support the diagnosis of a snuff dipper’s lesion?",
    "answers": [
      {"text": "Gingival recession and dental abrasion adjacent to the lesion", "correct": true},
      {"text": "Painful ulceration", "correct": false},
      {"text": "White patches on the hard palate", "correct": false},
      {"text": "Bilateral lesions on the tongue", "correct": false},
      {"text": "Conjunctival plaques", "correct": false}
    ],
    "explanation": "Gingival recession and dental abrasion adjacent to the lesion support the diagnosis of a snuff dipper’s lesion."
  },
  // ===============================
// WHITE LESION - HAIRY LEUKOPLAKIA  
// =================================
// 605
  {
    "question": "Hairy leukoplakia is most commonly associated with which virus?",
    "answers": [
      {"text": "Human papillomavirus (HPV)", "correct": false},
      {"text": "Epstein-Barr virus (EBV)", "correct": true},
      {"text": "Herpes simplex virus (HSV-1)", "correct": false},
      {"text": "Human herpesvirus 8 (HHV8)", "correct": false},
      {"text": "Cytomegalovirus (CMV)", "correct": false}
    ],
    "explanation": "Hairy leukoplakia is most commonly associated with Epstein-Barr virus (EBV)."
  },
  {
    "question": "The patient population most commonly affected by hairy leukoplakia is:",
    "answers": [
      {"text": "Healthy adults", "correct": false},
      {"text": "HIV-infected individuals or other immunosuppressed patients", "correct": true},
      {"text": "Children under 10", "correct": false},
      {"text": "Patients with diabetes only", "correct": false},
      {"text": "Smokeless tobacco users", "correct": false}
    ],
    "explanation": "Hairy leukoplakia most commonly affects HIV-infected individuals or other immunosuppressed patients."
  },
  {
    "question": "The most common intraoral site for hairy leukoplakia is:",
    "answers": [
      {"text": "Hard palate", "correct": false},
      {"text": "Lateral border of the tongue", "correct": true},
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Labial mucosa", "correct": false},
      {"text": "Gingiva", "correct": false}
    ],
    "explanation": "The lateral border of the tongue is the most common intraoral site for hairy leukoplakia."
  },
  {
    "question": "Which of the following best describes the appearance of hairy leukoplakia?",
    "answers": [
      {"text": "Ulcerated, painful red lesion", "correct": false},
      {"text": "Well-demarcated white lesion, flat, papillary/filiform, or corrugated", "correct": true},
      {"text": "Painless vesicles with erythematous base", "correct": false},
      {"text": "Smooth, shiny, red mucosa", "correct": false},
      {"text": "Diffuse gray-white mucosal opacification", "correct": false}
    ],
    "explanation": "Hairy leukoplakia appears as a well-demarcated white lesion that may be flat, papillary/filiform, or corrugated."
  },
  {
    "question": "Histopathologic features of hairy leukoplakia include all EXCEPT:",
    "answers": [
      {"text": "Ballooning degeneration of spinous cells", "correct": false},
      {"text": "Perinuclear clearing and viral inclusions", "correct": false},
      {"text": "Hyperparakeratosis with keratotic ridges", "correct": false},
      {"text": "Marked subepithelial inflammatory infiltrate", "correct": true},
      {"text": "Secondary Candida albicans infection may be present", "correct": false}
    ],
    "explanation": "Marked subepithelial inflammatory infiltrate is not a typical feature of hairy leukoplakia."
  },
  {
    "question": "Which of the following is part of the differential diagnosis of hairy leukoplakia?",
    "answers": [
      {"text": "Idiopathic leukoplakia", "correct": false},
      {"text": "Frictional hyperkeratosis", "correct": false},
      {"text": "Tobacco-associated leukoplakia", "correct": false},
      {"text": "Lichen planus and lupus erythematosus", "correct": false},
      {"text": "All of the above", "correct": true}
    ],
    "explanation": "The differential diagnosis of hairy leukoplakia includes idiopathic leukoplakia, frictional hyperkeratosis, tobacco-associated leukoplakia, lichen planus, and lupus erythematosus."
  },
  {
    "question": "What is the first recommended step if hairy leukoplakia is diagnosed in a patient whose immune status is unknown?",
    "answers": [
      {"text": "Prescribe topical corticosteroids", "correct": false},
      {"text": "Screen for HIV or other causes of immunosuppression", "correct": true},
      {"text": "Immediate surgical excision", "correct": false},
      {"text": "Prescribe antifungal therapy", "correct": false},
      {"text": "Observe without further testing", "correct": false}
    ],
    "explanation": "Screening for HIV or other immunosuppressive conditions is the first recommended step."
  },
  {
    "question": "Which of the following treatments may cause regression of hairy leukoplakia lesions?",
    "answers": [
      {"text": "Systemic antibiotics", "correct": false},
      {"text": "Antiviral or antiretroviral agents (e.g., acyclovir, ganciclovir)", "correct": true},
      {"text": "Surgical excision only", "correct": false},
      {"text": "Topical corticosteroids", "correct": false},
      {"text": "Chemotherapy", "correct": false}
    ],
    "explanation": "Antiviral or antiretroviral agents may cause regression of hairy leukoplakia lesions."
  },
  {
    "question": "Hairy leukoplakia may occur:",
    "answers": [
      {"text": "Exclusively before the diagnosis of AIDS", "correct": false},
      {"text": "Exclusively after the diagnosis of AIDS", "correct": false},
      {"text": "Either before or after the diagnosis of AIDS", "correct": true},
      {"text": "Only in organ transplant recipients", "correct": false},
      {"text": "Only in pediatric patients", "correct": false}
    ],
    "explanation": "Hairy leukoplakia may occur either before or after the diagnosis of AIDS."
  },
  {
    "question": "Which of the following statements about hairy leukoplakia is FALSE?",
    "answers": [
      {"text": "It is generally asymptomatic", "correct": false},
      {"text": "Lesions are usually bilateral on the lateral tongue", "correct": false},
      {"text": "Candida albicans may secondarily infect the lesion", "correct": false},
      {"text": "It is a premalignant condition with high malignant potential", "correct": true},
      {"text": "No specific treatment is required unless cosmetically objectionable", "correct": false}
    ],
    "explanation": "Hairy leukoplakia is not a premalignant condition and does not have high malignant potential."
  },
  {
    "question": "A 42-year-old HIV-positive patient presents with a well-demarcated, white, corrugated lesion on the lateral border of the tongue. The lesion is asymptomatic and appears papillary in some areas. Histology shows hyperparakeratosis, ballooning degeneration of spinous cells, and perinuclear clearing, with no significant subepithelial inflammation. What is the most likely diagnosis?",
    "answers": [
      {"text": "White Sponge Nevus", "correct": false},
      {"text": "Hairy leukoplakia", "correct": true},
      {"text": "Frictional hyperkeratosis", "correct": false},
      {"text": "Candidiasis", "correct": false},
      {"text": "Idiopathic leukoplakia", "correct": false}
    ],
    "explanation": "The clinical and histologic features are characteristic of hairy leukoplakia."
  },
  {
    "question": "A patient with a history of long-term systemic corticosteroid use presents with a bilateral, papillary white lesion on the lateral tongue. The patient reports no pain. Which virus is most likely involved in the pathogenesis of this lesion?",
    "answers": [
      {"text": "HSV-1", "correct": false},
      {"text": "EBV", "correct": true},
      {"text": "CMV", "correct": false},
      {"text": "HHV8", "correct": false},
      {"text": "HPV", "correct": false}
    ],
    "explanation": "EBV is the virus most likely involved in the pathogenesis of hairy leukoplakia."
  },
  {
    "question": "During a routine examination, a dentist notices an asymptomatic, filiform white plaque on the lateral tongue of a patient who is otherwise healthy. Biopsy confirms hairy leukoplakia. What is the most appropriate next step?",
    "answers": [
      {"text": "Immediate surgical excision", "correct": false},
      {"text": "Screen the patient for HIV infection", "correct": true},
      {"text": "Prescribe antifungal therapy", "correct": false},
      {"text": "Prescribe systemic corticosteroids", "correct": false},
      {"text": "No action is necessary", "correct": false}
    ],
    "explanation": "Screening for HIV infection is appropriate when hairy leukoplakia is diagnosed in an otherwise healthy patient."
  },
  {
    "question": "A 35-year-old organ transplant recipient develops a well-demarcated, papillary white lesion on the lateral tongue. The lesion is asymptomatic, and histology shows hyperparakeratosis with smudgy nuclei. Which of the following is TRUE?",
    "answers": [
      {"text": "Lesion is most likely premalignant and requires excision", "correct": false},
      {"text": "Lesion is likely hairy leukoplakia due to immunosuppression and EBV", "correct": true},
      {"text": "Lesion is candidiasis and requires antifungal therapy", "correct": false},
      {"text": "Lesion is frictional hyperkeratosis from cheek biting", "correct": false},
      {"text": "Lesion is White Sponge Nevus", "correct": false}
    ],
    "explanation": "The lesion is likely hairy leukoplakia related to immunosuppression and EBV infection."
  },
  {
    "question": "Which of the following treatments may cause regression of hairy leukoplakia lesions but is not curative?",
    "answers": [
      {"text": "Topical corticosteroids", "correct": false},
      {"text": "Antiviral therapy (e.g., acyclovir, ganciclovir)", "correct": true},
      {"text": "Surgical excision", "correct": false},
      {"text": "Observation only", "correct": false},
      {"text": "Chemotherapy", "correct": false}
    ],
    "explanation": "Antiviral therapy may cause regression but is not curative for hairy leukoplakia."
  },
  // ==============================================
// WHITE LESION - Hairy Tongue (Black hairy tongue)
// ================================================
// 605
  {
    "question": "Hairy tongue is characterized by:",
    "answers": [
      {"text": "Ulceration of the dorsal tongue", "correct": false},
      {"text": "Elongation and hypertrophy of filiform papillae", "correct": true},
      {"text": "Atrophy of fungiform papillae", "correct": false},
      {"text": "Red, inflamed tongue tip", "correct": false},
      {"text": "White coating only at the ventral tongue", "correct": false}
    ],
    "explanation": "Hairy tongue is characterized by elongation and hypertrophy of the filiform papillae."
  },
  {
    "question": "Which of the following factors is commonly implicated in the development of hairy tongue?",
    "answers": [
      {"text": "Broad-spectrum antibiotics and systemic corticosteroids", "correct": true},
      {"text": "Vitamin C deficiency", "correct": false},
      {"text": "HPV infection", "correct": false},
      {"text": "Trauma to the lateral tongue", "correct": false},
      {"text": "Chronic periodontal disease", "correct": false}
    ],
    "explanation": "Broad-spectrum antibiotics and systemic corticosteroids are commonly implicated in the development of hairy tongue."
  },
  {
    "question": "Which oral hygiene product has been associated with hairy tongue?",
    "answers": [
      {"text": "Fluoride toothpaste", "correct": false},
      {"text": "Oxygenating mouth rinses containing hydrogen peroxide, sodium perborate, or carbamide peroxide", "correct": true},
      {"text": "Chlorhexidine gluconate", "correct": false},
      {"text": "Alcohol-based mouthwash only", "correct": false},
      {"text": "Baking soda rinse", "correct": false}
    ],
    "explanation": "Oxygenating mouth rinses containing hydrogen peroxide, sodium perborate, or carbamide peroxide have been associated with hairy tongue."
  },
  {
    "question": "Patients with hairy tongue may present with which of the following sensations?",
    "answers": [
      {"text": "Painful burning", "correct": false},
      {"text": "Gagging or tickling sensation", "correct": true},
      {"text": "Severe ulceration", "correct": false},
      {"text": "Numbness of tongue tip", "correct": false},
      {"text": "Loss of taste only", "correct": false}
    ],
    "explanation": "Patients with hairy tongue may experience a gagging or tickling sensation."
  },
  {
    "question": "The color of a hairy tongue lesion depends on all EXCEPT:",
    "answers": [
      {"text": "Diet", "correct": false},
      {"text": "Oral hygiene", "correct": false},
      {"text": "Oral medications", "correct": false},
      {"text": "Composition of bacteria on papillae", "correct": false},
      {"text": "Salivary pH only", "correct": true}
    ],
    "explanation": "Salivary pH alone does not determine the color of a hairy tongue lesion."
  },
  {
    "question": "Which histopathologic finding is characteristic of hairy tongue?",
    "answers": [
      {"text": "Atrophy of filiform papillae with epithelial dysplasia", "correct": false},
      {"text": "Elongated filiform papillae with surface contamination by microorganisms and fungi", "correct": true},
      {"text": "Dense lymphocytic infiltration of lamina propria", "correct": false},
      {"text": "Ulceration with fibrin deposition", "correct": false},
      {"text": "Spongiosis of the epithelium", "correct": false}
    ],
    "explanation": "Hairy tongue is characterized histologically by elongated filiform papillae with surface contamination by microorganisms and fungi."
  },
  {
    "question": "The underlying lamina propria in hairy tongue usually shows:",
    "answers": [
      {"text": "Marked acute inflammation", "correct": false},
      {"text": "Granulomatous reaction", "correct": false},
      {"text": "Mild inflammation", "correct": true},
      {"text": "Dysplastic changes", "correct": false},
      {"text": "Necrosis", "correct": false}
    ],
    "explanation": "The lamina propria underlying hairy tongue usually shows mild inflammation."
  },
  {
    "question": "Hairy tongue is generally:",
    "answers": [
      {"text": "Malignant", "correct": false},
      {"text": "Premalignant", "correct": false},
      {"text": "Benign and self-limiting", "correct": true},
      {"text": "Autoimmune", "correct": false},
      {"text": "Contagious", "correct": false}
    ],
    "explanation": "Hairy tongue is a benign and self-limiting condition."
  },
  {
    "question": "Which of the following is a first-line management recommendation for hairy tongue?",
    "answers": [
      {"text": "Immediate biopsy", "correct": false},
      {"text": "Surgical excision", "correct": false},
      {"text": "Brushing or gentle scraping of the tongue, good oral hygiene", "correct": true},
      {"text": "Systemic antibiotics", "correct": false},
      {"text": "Corticosteroid therapy", "correct": false}
    ],
    "explanation": "First-line management includes brushing or gentle scraping of the tongue and maintaining good oral hygiene."
  },
  {
    "question": "Hairy tongue is most commonly found on:",
    "answers": [
      {"text": "Lateral border of tongue", "correct": false},
      {"text": "Ventral tongue", "correct": false},
      {"text": "Dorsal surface of the tongue", "correct": true},
      {"text": "Tip of the tongue only", "correct": false},
      {"text": "Palatal surface", "correct": false}
    ],
    "explanation": "Hairy tongue is most commonly found on the dorsal surface of the tongue."
  },
  {
    "question": "A 55-year-old male patient presents with a dense, black, hairlike mat on the dorsal surface of his tongue. He reports no pain but notices a gagging sensation when eating. His medical history includes a recent course of broad-spectrum antibiotics and use of hydrogen peroxide mouth rinses. What is the most likely diagnosis?",
    "answers": [
      {"text": "Hairy leukoplakia", "correct": false},
      {"text": "Black hairy tongue", "correct": true},
      {"text": "Oral candidiasis", "correct": false},
      {"text": "Focal hyperkeratosis", "correct": false},
      {"text": "Oral lichen planus", "correct": false}
    ],
    "explanation": "The clinical presentation is consistent with black hairy tongue."
  },
  {
    "question": "A patient undergoing head and neck radiotherapy develops an asymptomatic brown-black coating on the dorsal tongue. Microscopic examination shows elongated filiform papillae with bacterial contamination and mild lamina propria inflammation. What is the appropriate management?",
    "answers": [
      {"text": "Systemic antifungal therapy", "correct": false},
      {"text": "Surgical excision", "correct": false},
      {"text": "Gentle daily tongue brushing or scraping and improved oral hygiene", "correct": true},
      {"text": "Corticosteroid therapy", "correct": false},
      {"text": "No action required; malignant potential is high", "correct": false}
    ],
    "explanation": "Management includes gentle daily tongue brushing or scraping and improved oral hygiene."
  },
  {
    "question": "During a routine dental exam, a patient presents with elongated filiform papillae on the dorsum of the tongue, colored brown. The patient denies pain or bleeding. He is a smoker and uses oxygenating mouth rinses. What is the underlying pathophysiology of this condition?",
    "answers": [
      {"text": "Viral infection causing keratinocyte dysplasia", "correct": false},
      {"text": "Alteration in oral flora leading to hypertrophy of filiform papillae and delayed desquamation", "correct": true},
      {"text": "Autoimmune attack on papillae", "correct": false},
      {"text": "Chronic trauma to the tongue tip", "correct": false},
      {"text": "Vitamin deficiency", "correct": false}
    ],
    "explanation": "The condition results from alteration in oral flora leading to hypertrophy of filiform papillae and delayed desquamation."
  },
  {
    "question": "A patient asks why his tongue has turned black and hairlike after antibiotic therapy. Which of the following explanations is most accurate?",
    "answers": [
      {"text": "The lesion is premalignant and will progress to cancer if untreated", "correct": false},
      {"text": "Overgrowth of filiform papillae with secondary bacterial and fungal colonization due to slowed desquamation", "correct": true},
      {"text": "Candida albicans infection alone", "correct": false},
      {"text": "Trauma-induced hyperkeratosis", "correct": false},
      {"text": "EBV infection", "correct": false}
    ],
    "explanation": "The black hairy tongue results from overgrowth of filiform papillae with secondary bacterial and fungal colonization due to slowed desquamation."
  },
  {
    "question": "Which of the following patients is at highest risk for developing black hairy tongue?",
    "answers": [
      {"text": "A healthy 25-year-old with no medications", "correct": false},
      {"text": "A 40-year-old smoker who recently completed a course of broad-spectrum antibiotics", "correct": true},
      {"text": "A child with recent viral pharyngitis", "correct": false},
      {"text": "An elderly patient with controlled diabetes only", "correct": false},
      {"text": "A patient with untreated gingivitis", "correct": false}
    ],
    "explanation": "A 40-year-old smoker who recently completed a course of broad-spectrum antibiotics is at highest risk."
  },
  // ==============================================
// WHITE LESION - Idiopathic Leukoplakia
// ================================================

  {
    "question": "Leukoplakia is defined as:",
    "answers": [
      {"text": "Any removable white oral lesion", "correct": false},
      {"text": "A white patch or plaque that cannot be rubbed off and cannot be characterized clinically as any other disease", "correct": true},
      {"text": "A viral infection of the oral mucosa", "correct": false},
      {"text": "A type of candidiasis", "correct": false},
      {"text": "A traumatic ulcer", "correct": false}
    ],
    "explanation": "Leukoplakia is defined as a white patch or plaque that cannot be rubbed off and cannot be characterized clinically as any other disease."
  },
  {
    "question": "Which of the following is the most definitive method to diagnose leukoplakia?",
    "answers": [
      {"text": "Visual inspection only", "correct": false},
      {"text": "Biopsy and histopathologic examination", "correct": true},
      {"text": "Culture for Candida albicans", "correct": false},
      {"text": "Oral swab for HPV testing", "correct": false},
      {"text": "Blood tests for nutritional deficiencies", "correct": false}
    ],
    "explanation": "Biopsy and histopathologic examination are the most definitive methods to diagnose leukoplakia."
  },
  {
    "question": "Major risk factors for leukoplakia include all EXCEPT:",
    "answers": [
      {"text": "Tobacco use", "correct": false},
      {"text": "Alcohol consumption", "correct": false},
      {"text": "Nutritional deficiencies", "correct": false},
      {"text": "Trauma", "correct": false},
      {"text": "Viral infection with Epstein-Barr virus", "correct": true}
    ],
    "explanation": "Viral infection with Epstein-Barr virus is not a major risk factor for leukoplakia."
  },
  {
    "question": "The most common sites of leukoplakia include all EXCEPT:",
    "answers": [
      {"text": "Floor of mouth", "correct": false},
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Tongue", "correct": false},
      {"text": "Hard palate", "correct": false},
      {"text": "Gingival margin of the upper incisors only", "correct": true}
    ],
    "explanation": "The gingival margin of the upper incisors only is not a common site for leukoplakia."
  },
  {
    "question": "High-risk sites for malignant transformation of leukoplakia include:",
    "answers": [
      {"text": "Dorsum of tongue, lip, floor of mouth", "correct": false},
      {"text": "Buccal mucosa, vestibule, alveolar ridge", "correct": false},
      {"text": "Palate", "correct": false},
      {"text": "All of the above", "correct": true},
      {"text": "None of the above", "correct": false}
    ],
    "explanation": "All listed sites are considered high-risk for malignant transformation of leukoplakia."
  },
  {
    "question": "Histopathologically, the percentage of leukoplakias showing dysplasia is approximately:",
    "answers": [
      {"text": "3%", "correct": false},
      {"text": "5%", "correct": false},
      {"text": "12%", "correct": true},
      {"text": "80%", "correct": false},
      {"text": "50%", "correct": false}
    ],
    "explanation": "Approximately 12% of leukoplakias show dysplasia histopathologically."
  },
  {
    "question": "Which microscopic feature is NOT associated with dysplasia in leukoplakia?",
    "answers": [
      {"text": "Drop-shaped epithelial ridges", "correct": false},
      {"text": "Basal cell crowding", "correct": false},
      {"text": "Increased mitotic figures", "correct": false},
      {"text": "Presence of Langerhans cells", "correct": true},
      {"text": "Nuclear pleomorphism and hyperchromatism", "correct": false}
    ],
    "explanation": "Presence of Langerhans cells is not associated with dysplasia in leukoplakia."
  },
  {
    "question": "Carcinoma in situ is defined as:",
    "answers": [
      {"text": "Invasion of malignant epithelium into stroma", "correct": false},
      {"text": "Malignant transformation of epithelium without stromal invasion", "correct": true},
      {"text": "Mild epithelial hyperplasia", "correct": false},
      {"text": "Benign white plaque", "correct": false},
      {"text": "Oral candidiasis", "correct": false}
    ],
    "explanation": "Carcinoma in situ is malignant transformation of epithelium without stromal invasion."
  },
  {
    "question": "First-line management for small leukoplakia lesions without dysplasia includes:",
    "answers": [
      {"text": "Immediate excision", "correct": false},
      {"text": "Periodic examination and rebiopsy of new suspicious areas", "correct": true},
      {"text": "Systemic chemotherapy", "correct": false},
      {"text": "Radiation therapy", "correct": false},
      {"text": "Corticosteroid therapy", "correct": false}
    ],
    "explanation": "Periodic examination and rebiopsy of new suspicious areas is the first-line management for small leukoplakia lesions without dysplasia."
  },
  {
    "question": "If leukoplakia is diagnosed as moderate to severe dysplasia, the preferred treatment is:",
    "answers": [
      {"text": "Observation only", "correct": false},
      {"text": "Surgical excision or other physical ablation", "correct": true},
      {"text": "Antibiotic therapy", "correct": false},
      {"text": "Nutritional supplementation", "correct": false},
      {"text": "Topical antifungal therapy", "correct": false}
    ],
    "explanation": "Surgical excision or other physical ablation is preferred for moderate to severe dysplasia."
  },
  {
    "question": "A 55-year-old male smoker presents with a white patch on the floor of his mouth. The lesion cannot be wiped off, and he reports no pain. Biopsy shows moderate epithelial dysplasia. What is the most appropriate management?",
    "answers": [
      {"text": "Observation only", "correct": false},
      {"text": "Surgical excision or laser ablation", "correct": true},
      {"text": "Topical corticosteroid", "correct": false},
      {"text": "Systemic antifungal therapy", "correct": false},
      {"text": "Nutritional supplementation", "correct": false}
    ],
    "explanation": "Surgical excision or laser ablation is appropriate for moderate epithelial dysplasia."
  },
  {
    "question": "During a routine checkup, a 60-year-old woman is found to have a white, non-removable lesion on her buccal mucosa. She denies tobacco or alcohol use. What should be the next step?",
    "answers": [
      {"text": "Prescribe antifungal therapy", "correct": false},
      {"text": "Biopsy the lesion to rule out idiopathic leukoplakia and dysplasia", "correct": true},
      {"text": "Ignore it as it is likely harmless", "correct": false},
      {"text": "Prescribe topical corticosteroids", "correct": false},
      {"text": "Perform tongue scraping", "correct": false}
    ],
    "explanation": "Biopsy is necessary to rule out idiopathic leukoplakia and dysplasia."
  },
  {
    "question": "A patient with chronic smokeless tobacco use presents with a white patch on the mandibular vestibular mucosa. Histopathology reveals hyperkeratosis with no dysplasia. Which statement is correct?",
    "answers": [
      {"text": "The lesion is likely idiopathic leukoplakia and should be excised immediately", "correct": false},
      {"text": "Tobacco cessation may cause regression of the lesion", "correct": true},
      {"text": "Malignant transformation is inevitable", "correct": false},
      {"text": "Systemic chemotherapy is indicated", "correct": false},
      {"text": "The lesion is likely candidiasis", "correct": false}
    ],
    "explanation": "Tobacco cessation may cause regression of the lesion."
  },
  {
    "question": "A 50-year-old male presents with a white patch on his tongue that shows irregular stratification, basal cell crowding, nuclear pleomorphism, and increased mitotic figures on biopsy. What is the histopathologic classification of this lesion?",
    "answers": [
      {"text": "Hyperkeratosis", "correct": false},
      {"text": "Mild epithelial dysplasia", "correct": false},
      {"text": "Moderate to severe epithelial dysplasia", "correct": true},
      {"text": "Carcinoma in situ", "correct": false},
      {"text": "Invasive squamous cell carcinoma", "correct": false}
    ],
    "explanation": "The lesion is classified as moderate to severe epithelial dysplasia."
  },
  {
    "question": "A patient presents with bilateral white plaques on the buccal mucosa that cannot be wiped off. There is no history of trauma, tobacco, or alcohol use. Differential diagnosis should include all EXCEPT:",
    "answers": [
      {"text": "Idiopathic leukoplakia", "correct": false},
      {"text": "Lichen planus", "correct": false},
      {"text": "Lupus erythematosus", "correct": false},
      {"text": "Frictional keratosis from cheek biting", "correct": false},
      {"text": "Hairy leukoplakia", "correct": true}
    ],
    "explanation": "Hairy leukoplakia is not typically included in the differential diagnosis of bilateral white plaques without risk factors."
  },
  // ==============================================
// WHITE LESION - GEOGRAPHIC TONGUE (Benign migratory glossitis)
// ================================================
  {
    "question": "Geographic tongue is also known as:",
    "answers": [
      {"text": "Hairy tongue", "correct": false},
      {"text": "Erythema migrans", "correct": true},
      {"text": "Leukoplakia", "correct": false},
      {"text": "Lichen planus", "correct": false},
      {"text": "Black hairy tongue", "correct": false}
    ],
    "explanation": "Geographic tongue is also known as erythema migrans."
  },
  {
    "question": "Which of the following factors is inversely associated with geographic tongue?",
    "answers": [
      {"text": "Fissured tongue", "correct": false},
      {"text": "Psoriasis", "correct": false},
      {"text": "Cigarette smoking", "correct": true},
      {"text": "Atopy", "correct": false},
      {"text": "Seborrheic dermatitis", "correct": false}
    ],
    "explanation": "Cigarette smoking is inversely associated with geographic tongue."
  },
  {
    "question": "Geographic tongue is most commonly found on which part of the oral cavity?",
    "answers": [
      {"text": "Ventral tongue", "correct": false},
      {"text": "Buccal mucosa", "correct": false},
      {"text": "Dorsum and lateral surfaces of the tongue", "correct": true},
      {"text": "Soft palate", "correct": false},
      {"text": "Floor of the mouth", "correct": false}
    ],
    "explanation": "Geographic tongue is most commonly found on the dorsum and lateral surfaces of the tongue."
  },
  {
    "question": "Typical clinical features of geographic tongue include all EXCEPT:",
    "answers": [
      {"text": "Red atrophic patches with elevated keratotic margins", "correct": false},
      {"text": "Migratory pattern of lesions", "correct": false},
      {"text": "Usually asymptomatic", "correct": false},
      {"text": "Persistent ulceration", "correct": true},
      {"text": "Often associated with fissured tongue", "correct": false}
    ],
    "explanation": "Persistent ulceration is not a typical feature of geographic tongue."
  },
  {
    "question": "Histopathologic features of geographic tongue include:",
    "answers": [
      {"text": "Hyperkeratosis and acanthosis at lesion margins", "correct": false},
      {"text": "Atrophy of filiform papillae", "correct": false},
      {"text": "Intraepithelial neutrophils and lymphocytes in central areas", "correct": false},
      {"text": "Inflammatory infiltrate in lamina propria", "correct": false},
      {"text": "All of the above", "correct": true}
    ],
    "explanation": "Histopathologic features include hyperkeratosis, acanthosis, atrophy of filiform papillae, intraepithelial neutrophils and lymphocytes, and inflammatory infiltrate in lamina propria."
  },
  {
    "question": "The prevalence of geographic tongue in the U.S. population is approximately:",
    "answers": [
      {"text": "0.2%", "correct": false},
      {"text": "2%", "correct": true},
      {"text": "10%", "correct": false},
      {"text": "15%", "correct": false},
      {"text": "20%", "correct": false}
    ],
    "explanation": "The prevalence of geographic tongue in the U.S. population is approximately 2%."
  },
  {
    "question": "Geographic tongue is more prevalent in which group?",
    "answers": [
      {"text": "Men over 60", "correct": false},
      {"text": "Young, nonsmokers, and atopic individuals", "correct": true},
      {"text": "Heavy smokers", "correct": false},
      {"text": "Infants under 1 year", "correct": false},
      {"text": "Elderly men with systemic diseases", "correct": false}
    ],
    "explanation": "Geographic tongue is more prevalent in young, nonsmokers, and atopic individuals."
  },
  {
    "question": "Which conditions have been associated with geographic tongue?",
    "answers": [
      {"text": "Psoriasis and seborrheic dermatitis", "correct": false},
      {"text": "Reiter’s syndrome", "correct": false},
      {"text": "Atopy", "correct": false},
      {"text": "All of the above", "correct": true},
      {"text": "None of the above", "correct": false}
    ],
    "explanation": "Psoriasis, seborrheic dermatitis, Reiter’s syndrome, and atopy have all been associated with geographic tongue."
  },
  {
    "question": "Treatment is generally required for geographic tongue:",
    "answers": [
      {"text": "Always, using topical steroids", "correct": false},
      {"text": "Only if symptomatic", "correct": true},
      {"text": "Only with antifungal therapy", "correct": false},
      {"text": "Only in children", "correct": false},
      {"text": "Never", "correct": false}
    ],
    "explanation": "Treatment for geographic tongue is generally required only if symptomatic."
  },
  {
    "question": "A useful symptomatic treatment for geographic tongue includes:",
    "answers": [
      {"text": "Systemic antibiotics", "correct": false},
      {"text": "Mouth rinse with sodium bicarbonate in water", "correct": true},
      {"text": "Oral antifungal tablets only", "correct": false},
      {"text": "Surgical excision", "correct": false},
      {"text": "Radiation therapy", "correct": false}
    ],
    "explanation": "A mouth rinse with sodium bicarbonate in water is a useful symptomatic treatment for geographic tongue."
  },
  {
    "question": "A 25-year-old woman presents for a routine checkup. On examination, her tongue shows red, circinate atrophic patches surrounded by white margins. She reports mild tenderness at times but no other symptoms. She is a nonsmoker and has a history of atopy. What is the most likely diagnosis?",
    "answers": [
      {"text": "Hairy tongue", "correct": false},
      {"text": "Geographic tongue", "correct": true},
      {"text": "Leukoplakia", "correct": false},
      {"text": "Lichen planus", "correct": false},
      {"text": "Oral candidiasis", "correct": false}
    ],
    "explanation": "The clinical presentation is consistent with geographic tongue."
  },
  {
    "question": "A patient with migratory red and white lesions on the dorsum of the tongue is concerned about oral cancer. Biopsy shows atrophy of filiform papillae with mild inflammatory infiltrate and hyperkeratosis at the margins. What is the appropriate management?",
    "answers": [
      {"text": "Immediate surgical excision", "correct": false},
      {"text": "Observation and reassurance; maintain oral hygiene", "correct": true},
      {"text": "Systemic antifungal therapy", "correct": false},
      {"text": "Topical chemotherapy", "correct": false},
      {"text": "Laser ablation", "correct": false}
    ],
    "explanation": "Observation and reassurance with maintenance of oral hygiene is appropriate management."
  },
  {
    "question": "A 30-year-old patient has a tongue lesion that appears red in the center with white keratotic edges, changes location every few days, and is asymptomatic. Which adjunctive treatment may reduce symptoms if mild discomfort occurs?",
    "answers": [
      {"text": "Oral antibiotics", "correct": false},
      {"text": "Sodium bicarbonate mouth rinse or topical steroid-antifungal combination", "correct": true},
      {"text": "Systemic corticosteroids", "correct": false},
      {"text": "Surgical excision", "correct": false},
      {"text": "Chemotherapy", "correct": false}
    ],
    "explanation": "Sodium bicarbonate mouth rinse or topical steroid-antifungal combination may reduce symptoms."
  },
  {
    "question": "Which of the following statements about geographic tongue is FALSE?",
    "answers": [
      {"text": "Lesions show a migratory pattern", "correct": false},
      {"text": "It is strongly associated with cigarette smoking", "correct": true},
      {"text": "Commonly coexists with fissured tongue", "correct": false},
      {"text": "Histology shows filiform papillae atrophy and inflammatory infiltrate", "correct": false},
      {"text": "Treatment is usually unnecessary", "correct": false}
    ],
    "explanation": "Geographic tongue is not strongly associated with cigarette smoking."
  },
  {
    "question": "A patient presents with red, atrophic patches on the tongue with slightly elevated white margins. He has a history of psoriasis. Which oral condition is most likely?",
    "answers": [
      {"text": "Hairy leukoplakia", "correct": false},
      {"text": "Geographic tongue", "correct": true},
      {"text": "Idiopathic leukoplakia", "correct": false},
      {"text": "Focal hyperkeratosis", "correct": false},
      {"text": "Candidiasis", "correct": false}
    ],
    "explanation": "The presentation is consistent with geographic tongue, especially with a history of psoriasis."
  },
  // ==============================================
// WHITE LESION - LICHEN PLANUS
// ================================================
  {
    "question": "Oral lichen planus most commonly affects:",
    "answers": [
      {"text": "Children under 10 years", "correct": false},
      {"text": "Men aged 30–60", "correct": false},
      {"text": "Women aged 30–60", "correct": true},
      {"text": "Elderly men over 70", "correct": false},
      {"text": "Neonates", "correct": false}
    ],
    "explanation": "Oral lichen planus most commonly affects women aged 30–60."
  },
  {
    "question": "Which of the following is the most characteristic feature of reticular lichen planus?",
    "answers": [
      {"text": "Ulceration with pseudomembrane", "correct": false},
      {"text": "Interlacing white keratotic lines (Wickham’s striae)", "correct": true},
      {"text": "Large bullae", "correct": false},
      {"text": "Red atrophic patches without white striae", "correct": false},
      {"text": "Yellowish papules", "correct": false}
    ],
    "explanation": "The most characteristic feature of reticular lichen planus is interlacing white keratotic lines known as Wickham’s striae."
  },
  {
    "question": "The erosive form of oral lichen planus is best described as:",
    "answers": [
      {"text": "White, lacy striae only", "correct": false},
      {"text": "Red patches with fine white striae", "correct": false},
      {"text": "Ulcerated central area covered by fibrinous plaque or pseudomembrane", "correct": true},
      {"text": "Papular lesions on the buccal mucosa", "correct": false},
      {"text": "Small, violaceous pruritic papules on the tongue", "correct": false}
    ],
    "explanation": "The erosive form is characterized by an ulcerated central area covered by fibrinous plaque or pseudomembrane."
  },
  {
    "question": "The plaque form of lichen planus most commonly affects:",
    "answers": [
      {"text": "Attached gingiva", "correct": false},
      {"text": "Buccal mucosa and dorsum of tongue", "correct": true},
      {"text": "Palate only", "correct": false},
      {"text": "Lips only", "correct": false},
      {"text": "Floor of the mouth", "correct": false}
    ],
    "explanation": "The plaque form most commonly affects the buccal mucosa and dorsum of the tongue."
  },
  {
    "question": "Which immune cells are predominantly involved in the pathogenesis of lichen planus?",
    "answers": [
      {"text": "B cells", "correct": false},
      {"text": "CD4 and CD8 T cells", "correct": true},
      {"text": "Neutrophils", "correct": false},
      {"text": "Eosinophils", "correct": false},
      {"text": "Plasma cells", "correct": false}
    ],
    "explanation": "CD4 and CD8 T cells are predominantly involved in the pathogenesis of lichen planus."
  },
  {
    "question": "Basal keratinocyte destruction in lichen planus is caused by:",
    "answers": [
      {"text": "Autoantibodies", "correct": false},
      {"text": "T-cell mediated cytotoxicity", "correct": true},
      {"text": "Bacterial infection", "correct": false},
      {"text": "Viral infection", "correct": false},
      {"text": "Mechanical trauma", "correct": false}
    ],
    "explanation": "Basal keratinocyte destruction is caused by T-cell mediated cytotoxicity."
  },
  {
    "question": "Civatte (colloid) bodies in lichen planus represent:",
    "answers": [
      {"text": "Apoptotic keratinocytes", "correct": true},
      {"text": "Langerhans cells", "correct": false},
      {"text": "Hyperkeratotic squames", "correct": false},
      {"text": "Dysplastic cells", "correct": false},
      {"text": "Candida hyphae", "correct": false}
    ],
    "explanation": "Civatte bodies represent apoptotic keratinocytes."
  },
  {
    "question": "The skin manifestations of lichen planus are typically:",
    "answers": [
      {"text": "Vesicles on palms", "correct": false},
      {"text": "Violaceous, polygonal, flat-topped, pruritic papules on flexor surfaces", "correct": true},
      {"text": "Ulcers on tongue", "correct": false},
      {"text": "Bullae on dorsal hand", "correct": false},
      {"text": "Hyperpigmented macules on the face", "correct": false}
    ],
    "explanation": "Skin manifestations are violaceous, polygonal, flat-topped, pruritic papules on flexor surfaces."
  },
  {
    "question": "Lichen planus has been associated with which viral infection?",
    "answers": [
      {"text": "HIV", "correct": false},
      {"text": "Epstein-Barr virus", "correct": false},
      {"text": "Hepatitis C", "correct": true},
      {"text": "Herpes simplex virus", "correct": false},
      {"text": "Cytomegalovirus", "correct": false}
    ],
    "explanation": "Lichen planus has been associated with hepatitis C virus infection."
  },
  {
    "question": "Which form of oral lichen planus carries the highest risk of malignant transformation?",
    "answers": [
      {"text": "Reticular", "correct": false},
      {"text": "Plaque", "correct": false},
      {"text": "Atrophic and erosive", "correct": true},
      {"text": "Bullous", "correct": false},
      {"text": "Hypertrophic", "correct": false}
    ],
    "explanation": "Atrophic and erosive forms carry the highest risk of malignant transformation."
  },
  {
    "question": "The first-line therapy for symptomatic oral lichen planus is:",
    "answers": [
      {"text": "Systemic antibiotics", "correct": false},
      {"text": "Corticosteroids", "correct": true},
      {"text": "Surgical excision", "correct": false},
      {"text": "Retinoids only", "correct": false},
      {"text": "Antifungal monotherapy", "correct": false}
    ],
    "explanation": "Corticosteroids are the first-line therapy for symptomatic oral lichen planus."
  },
  {
    "question": "In cases where corticosteroids are contraindicated or ineffective, which topical agents may be used for lichen planus?",
    "answers": [
      {"text": "Topical antifungals alone", "correct": false},
      {"text": "Calcineurin inhibitors (tacrolimus or pimecrolimus)", "correct": true},
      {"text": "Topical antibiotics", "correct": false},
      {"text": "Vitamin C gels", "correct": false},
      {"text": "Oral antivirals", "correct": false}
    ],
    "explanation": "Calcineurin inhibitors such as tacrolimus or pimecrolimus may be used when corticosteroids are contraindicated or ineffective."
  },
  {
    "question": "Direct immunofluorescence in lichen planus commonly demonstrates:",
    "answers": [
      {"text": "IgG deposition in lamina propria", "correct": false},
      {"text": "Fibrinogen in the basement membrane zone", "correct": true},
      {"text": "C3 deposition in epithelial cells", "correct": false},
      {"text": "IgA deposition in submucosa", "correct": false},
      {"text": "No immunoreactivity", "correct": false}
    ],
    "explanation": "Direct immunofluorescence commonly shows fibrinogen deposition in the basement membrane zone."
  },
  {
    "question": "Which of the following is NOT part of the differential diagnosis of oral lichen planus?",
    "answers": [
      {"text": "Lichenoid drug reaction", "correct": false},
      {"text": "White sponge nevus", "correct": false},
      {"text": "Hairy leukoplakia", "correct": false},
      {"text": "Geographic tongue", "correct": true},
      {"text": "Graft-versus-host disease", "correct": false}
    ],
    "explanation": "Geographic tongue is not typically included in the differential diagnosis of oral lichen planus."
  },
  {
    "question": "A patient presents with bilateral, white, lacy striae on the buccal mucosa, minimal symptoms, and no ulcers. Which form of lichen planus is this?",
    "answers": [
      {"text": "Erosive", "correct": false},
      {"text": "Plaque", "correct": false},
      {"text": "Reticular", "correct": true},
      {"text": "Atrophic", "correct": false},
      {"text": "Bullous", "correct": false}
    ],
    "explanation": "Bilateral, white, lacy striae with minimal symptoms correspond to reticular lichen planus."
  },
  {
    "question": "Erosive lichen planus affecting the attached gingiva must be differentiated from:",
    "answers": [
      {"text": "Cicatricial pemphigoid", "correct": false},
      {"text": "Pemphigus vulgaris", "correct": false},
      {"text": "Chronic lupus erythematosus", "correct": false},
      {"text": "Contact hypersensitivity", "correct": false},
      {"text": "All of the above", "correct": true}
    ],
    "explanation": "Erosive lichen planus must be differentiated from cicatricial pemphigoid, pemphigus vulgaris, chronic lupus erythematosus, and contact hypersensitivity."
  },
  {
    "question": "Adjunctive antifungal therapy in oral lichen planus is primarily used to:",
    "answers": [
      {"text": "Treat Candida albicans overgrowth secondary to corticosteroid use", "correct": true},
      {"text": "Cure the disease", "correct": false},
      {"text": "Reverse malignant transformation", "correct": false},
      {"text": "Replace corticosteroids", "correct": false},
      {"text": "Eliminate viral infection", "correct": false}
    ],
    "explanation": "Antifungal therapy is used to treat Candida albicans overgrowth secondary to corticosteroid use."
  },
  {
    "question": "The bullous variant of oral lichen planus:",
    "answers": [
      {"text": "Is usually long-lasting", "correct": false},
      {"text": "Primarily affects the floor of the mouth", "correct": false},
      {"text": "Forms short-lived bullae that rupture into painful ulcers", "correct": true},
      {"text": "Is more common than reticular lichen planus", "correct": false},
      {"text": "Does not involve the buccal mucosa", "correct": false}
    ],
    "explanation": "The bullous variant forms short-lived bullae that rupture into painful ulcers."
  },
  // ==============================================
// WHITE LESION - LUPUS ERYTHEMATOSUS
// ================================================

  {
    "question": "Which form of lupus erythematosus predominantly affects only the skin and rarely progresses to systemic involvement?",
    "answers": [
      {"text": "Systemic lupus erythematosus (SLE)", "correct": false},
      {"text": "Discoid lupus erythematosus (DLE)", "correct": true},
      {"text": "Subacute lupus erythematosus", "correct": false},
      {"text": "Drug-induced lupus", "correct": false},
      {"text": "Neonatal lupus", "correct": false}
    ],
    "explanation": "Discoid lupus erythematosus (DLE) predominantly affects only the skin and rarely progresses to systemic involvement."
  },
  {
    "question": "The classic malar “butterfly” rash is most characteristic of:",
    "answers": [
      {"text": "Discoid lupus erythematosus", "correct": false},
      {"text": "Systemic lupus erythematosus", "correct": true},
      {"text": "Subacute lupus erythematosus", "correct": false},
      {"text": "Lichen planus", "correct": false},
      {"text": "Dermatomyositis", "correct": false}
    ],
    "explanation": "The classic malar “butterfly” rash is most characteristic of systemic lupus erythematosus."
  },
  {
    "question": "The most reliable and relatively specific serologic test for SLE is:",
    "answers": [
      {"text": "LE cell test", "correct": false},
      {"text": "ANA test", "correct": true},
      {"text": "Rheumatoid factor", "correct": false},
      {"text": "Anti-CCP antibody", "correct": false},
      {"text": "CRP", "correct": false}
    ],
    "explanation": "The ANA test is the most reliable and relatively specific serologic test for SLE."
  },
  {
    "question": "Which autoantibodies are commonly detected in SLE?",
    "answers": [
      {"text": "Anti-centromere antibodies", "correct": false},
      {"text": "Anti–single-strand DNA, anti–double-strand DNA, and antinuclear ribonuclear protein", "correct": true},
      {"text": "Anti-mitochondrial antibodies", "correct": false},
      {"text": "Anti-thyroid peroxidase antibodies", "correct": false},
      {"text": "Anti-gliadin antibodies", "correct": false}
    ],
    "explanation": "Common autoantibodies in SLE include anti–single-strand DNA, anti–double-strand DNA, and antinuclear ribonuclear protein."
  },
  {
    "question": "Which clinical feature is typical of discoid lupus erythematosus lesions on the skin?",
    "answers": [
      {"text": "Butterfly rash", "correct": false},
      {"text": "Disc-shaped erythematous plaques with hyperpigmented margins", "correct": true},
      {"text": "Vesicles and bullae", "correct": false},
      {"text": "Linear ulcers", "correct": false},
      {"text": "Nodular pruritic lesions on forearms", "correct": false}
    ],
    "explanation": "Discoid lupus erythematosus lesions typically present as disc-shaped erythematous plaques with hyperpigmented margins."
  },
  {
    "question": "Oral lesions of DLE are most commonly seen in which areas?",
    "answers": [
      {"text": "Tongue dorsum only", "correct": false},
      {"text": "Buccal mucosa, gingiva, and vermilion", "correct": true},
      {"text": "Palate only", "correct": false},
      {"text": "Floor of mouth only", "correct": false},
      {"text": "Tonsillar pillars", "correct": false}
    ],
    "explanation": "Oral lesions of discoid lupus erythematosus are most commonly seen on the buccal mucosa, gingiva, and vermilion."
  },
  {
    "question": "Which histopathologic feature helps distinguish DLE from lichen planus?",
    "answers": [
      {"text": "Hyperkeratosis", "correct": false},
      {"text": "Basal cell destruction", "correct": false},
      {"text": "Presence of CD123+ plasmacytoid dendritic cells", "correct": true},
      {"text": "Lymphocytic infiltration", "correct": false},
      {"text": "Subepithelial edema", "correct": false}
    ],
    "explanation": "The presence of CD123+ plasmacytoid dendritic cells helps distinguish DLE from lichen planus."
  },
  {
    "question": "Direct immunofluorescence (DIF) of skin or mucosal lesions in SLE shows:",
    "answers": [
      {"text": "IgG, IgM, IgA, C3, and fibrinogen granular-linear deposits along the basement membrane", "correct": true},
      {"text": "IgE deposition in superficial epithelium", "correct": false},
      {"text": "No immune deposits", "correct": false},
      {"text": "IgM only in perivascular areas", "correct": false},
      {"text": "Linear IgA deposits only", "correct": false}
    ],
    "explanation": "DIF in SLE shows IgG, IgM, IgA, C3, and fibrinogen granular-linear deposits along the basement membrane."
  },
  {
    "question": "Which oral condition is most commonly confused with erosive lupus erythematosus?",
    "answers": [
      {"text": "Geographic tongue", "correct": false},
      {"text": "Erosive lichen planus", "correct": true},
      {"text": "Hairy leukoplakia", "correct": false},
      {"text": "Frictional hyperkeratosis", "correct": false},
      {"text": "White sponge nevus", "correct": false}
    ],
    "explanation": "Erosive lichen planus is the oral condition most commonly confused with erosive lupus erythematosus."
  },
  {
    "question": "Discoid lupus lesions on the scalp may cause:",
    "answers": [
      {"text": "Reversible hair thinning", "correct": false},
      {"text": "Permanent hair loss (alopecia)", "correct": true},
      {"text": "Hirsutism", "correct": false},
      {"text": "Vesicular eruptions", "correct": false},
      {"text": "Hypertrichosis", "correct": false}
    ],
    "explanation": "Discoid lupus lesions on the scalp may cause permanent hair loss (alopecia)."
  },
  {
    "question": "Which organ systems are commonly involved in SLE?",
    "answers": [
      {"text": "Skin, oral mucosa only", "correct": false},
      {"text": "Joints, kidneys, heart, and lungs", "correct": true},
      {"text": "Brain only", "correct": false},
      {"text": "Stomach and intestines", "correct": false},
      {"text": "Thyroid and adrenal glands", "correct": false}
    ],
    "explanation": "SLE commonly involves joints, kidneys, heart, and lungs."
  },
  {
    "question": "In oral SLE lesions, which of the following is true?",
    "answers": [
      {"text": "Lesions are always painful", "correct": false},
      {"text": "Lesions may present as ulceration, erythema, and keratosis", "correct": true},
      {"text": "Lesions are limited to the palate only", "correct": false},
      {"text": "Oral lesions always precede systemic symptoms", "correct": false},
      {"text": "Lesions only occur in children", "correct": false}
    ],
    "explanation": "Oral SLE lesions may present as ulceration, erythema, and keratosis."
  },
  {
    "question": "Which histopathologic feature is common to both DLE and lichen planus, making differentiation challenging?",
    "answers": [
      {"text": "Basal cell destruction and lymphocytic infiltration", "correct": true},
      {"text": "Presence of CD123+ cells", "correct": false},
      {"text": "Absence of hyperkeratosis", "correct": false},
      {"text": "Granular IgA deposits", "correct": false},
      {"text": "Eosinophilic spongiosis", "correct": false}
    ],
    "explanation": "Basal cell destruction and lymphocytic infiltration are common to both DLE and lichen planus."
  },
  {
    "question": "Subacute lupus erythematosus is characterized by:",
    "answers": [
      {"text": "Severe multisystem organ involvement", "correct": false},
      {"text": "Mild to moderate skin lesions", "correct": true},
      {"text": "Scarring alopecia only", "correct": false},
      {"text": "Vesiculobullous oral lesions", "correct": false},
      {"text": "Positive ANA in all cases", "correct": false}
    ],
    "explanation": "Subacute lupus erythematosus is characterized by mild to moderate skin lesions."
  },
  {
    "question": "The LE cell test is:",
    "answers": [
      {"text": "More sensitive than ANA", "correct": false},
      {"text": "Less sensitive and less specific than ANA", "correct": true},
      {"text": "Only positive in discoid lupus", "correct": false},
      {"text": "Specific for oral lesions", "correct": false},
      {"text": "The gold standard for SLE", "correct": false}
    ],
    "explanation": "The LE cell test is less sensitive and less specific than ANA."
  },
  {
    "question": "Histopathology of SLE lesions in other organs may show:",
    "answers": [
      {"text": "Basal layer vacuolization only", "correct": false},
      {"text": "Vasculitis, mononuclear infiltrates, and fibrinoid necrosis", "correct": true},
      {"text": "Filiform papillary elongation", "correct": false},
      {"text": "Hyperkeratosis with parakeratosis", "correct": false},
      {"text": "Subepithelial cleft formation", "correct": false}
    ],
    "explanation": "Histopathology of SLE lesions in other organs may show vasculitis, mononuclear infiltrates, and fibrinoid necrosis."
  },
  {
    "question": "DIF findings in DLE typically show:",
    "answers": [
      {"text": "Granular/linear deposits of IgG and C3 at the basement membrane", "correct": true},
      {"text": "No deposits", "correct": false},
      {"text": "IgA only", "correct": false},
      {"text": "Linear IgM deposits", "correct": false},
      {"text": "Subepithelial IgE deposits", "correct": false}
    ],
    "explanation": "DIF findings in DLE typically show granular/linear deposits of IgG and C3 at the basement membrane."
  },
  {
    "question": "Which serologic markers are specific for SLE?",
    "answers": [
      {"text": "Anti-centromere antibodies", "correct": false},
      {"text": "Anti-dsDNA antibodies", "correct": true},
      {"text": "Anti-thyroglobulin antibodies", "correct": false},
      {"text": "Anti-mitochondrial antibodies", "correct": false},
      {"text": "Anti-Ro/SSA only", "correct": false}
    ],
    "explanation": "Anti-dsDNA antibodies are specific serologic markers for SLE."
  },
  // ==============================================
// WHITE LESION - CANDIDIASIS
// ================================================

  {
    "question": "The most common causative organism of oral candidiasis is:",
    "answers": [
      {"text": "Candida tropicalis", "correct": false},
      {"text": "Candida glabrata", "correct": false},
      {"text": "Candida albicans", "correct": true},
      {"text": "Candida krusei", "correct": false},
      {"text": "Candida parapsilosis", "correct": false}
    ],
    "explanation": "Candida albicans is the most common causative organism of oral candidiasis."
  },
  {
    "question": "Which morphologic form of Candida albicans is responsible for tissue penetration?",
    "answers": [
      {"text": "Blastospores", "correct": false},
      {"text": "Pseudohyphae", "correct": true},
      {"text": "Chlamydospores", "correct": false},
      {"text": "Oval yeast cells", "correct": false},
      {"text": "Sporangia", "correct": false}
    ],
    "explanation": "The pseudohyphae form of Candida albicans is responsible for tissue penetration."
  },
  {
    "question": "Which of the following is NOT a predisposing factor for oral candidiasis?",
    "answers": [
      {"text": "Diabetes mellitus", "correct": false},
      {"text": "Systemic antibiotic therapy", "correct": false},
      {"text": "Corticosteroid therapy", "correct": false},
      {"text": "Good oral hygiene", "correct": true},
      {"text": "Immunodeficiency", "correct": false}
    ],
    "explanation": "Good oral hygiene is not a predisposing factor for oral candidiasis."
  },
  {
    "question": "The acute pseudomembranous form of candidiasis is also known as:",
    "answers": [
      {"text": "Denture stomatitis", "correct": false},
      {"text": "Thrush", "correct": true},
      {"text": "Median rhomboid glossitis", "correct": false},
      {"text": "Angular cheilitis", "correct": false},
      {"text": "Chronic hyperplastic candidiasis", "correct": false}
    ],
    "explanation": "The acute pseudomembranous form of candidiasis is also known as thrush."
  },
  {
    "question": "A white plaque of candidiasis that can be wiped off leaving a painful erythematous base is characteristic of:",
    "answers": [
      {"text": "Hyperplastic candidiasis", "correct": false},
      {"text": "Pseudomembranous candidiasis", "correct": true},
      {"text": "Erythematous chronic candidiasis", "correct": false},
      {"text": "Mucocutaneous candidiasis", "correct": false},
      {"text": "Median rhomboid glossitis", "correct": false}
    ],
    "explanation": "Pseudomembranous candidiasis presents as a white plaque that can be wiped off leaving a painful erythematous base."
  },
  {
    "question": "Chronic erythematous candidiasis is most commonly associated with:",
    "answers": [
      {"text": "Immunocompromised children", "correct": false},
      {"text": "Denture wearers", "correct": true},
      {"text": "Acute antibiotic therapy", "correct": false},
      {"text": "Subclinical HIV infection", "correct": false},
      {"text": "Oral leukoplakia", "correct": false}
    ],
    "explanation": "Chronic erythematous candidiasis is most commonly associated with denture wearers."
  },
  {
    "question": "Angular cheilitis is often associated with:",
    "answers": [
      {"text": "Fissures at the commissures colonized by Candida and sometimes Staphylococcus aureus", "correct": true},
      {"text": "Trauma from chewing tobacco", "correct": false},
      {"text": "Excessive sugar consumption", "correct": false},
      {"text": "Filiform papillae overgrowth", "correct": false},
      {"text": "Viral infection", "correct": false}
    ],
    "explanation": "Angular cheilitis is often associated with fissures at the commissures colonized by Candida and sometimes Staphylococcus aureus."
  },
  {
    "question": "Median rhomboid glossitis typically affects which part of the tongue?",
    "answers": [
      {"text": "Tip of the tongue", "correct": false},
      {"text": "Lateral borders", "correct": false},
      {"text": "Anterior to the circumvallate papillae, midline dorsal surface", "correct": true},
      {"text": "Ventral surface", "correct": false},
      {"text": "Posterior lateral sulcus", "correct": false}
    ],
    "explanation": "Median rhomboid glossitis typically affects the anterior to the circumvallate papillae on the midline dorsal surface of the tongue."
  },
  {
    "question": "Which type of candidiasis is often resistant to standard antifungal therapy and may present with oral, nail, and skin involvement?",
    "answers": [
      {"text": "Acute pseudomembranous candidiasis", "correct": false},
      {"text": "Chronic erythematous candidiasis", "correct": false},
      {"text": "Familial mucocutaneous candidiasis", "correct": true},
      {"text": "Hyperplastic candidiasis", "correct": false},
      {"text": "Median rhomboid glossitis", "correct": false}
    ],
    "explanation": "Familial mucocutaneous candidiasis is often resistant to standard antifungal therapy and may present with oral, nail, and skin involvement."
  },
  {
    "question": "Which laboratory test involves smearing a candidal plaque, treating with KOH, and observing under the microscope?",
    "answers": [
      {"text": "Gram stain", "correct": false},
      {"text": "PAS stain or KOH mount", "correct": true},
      {"text": "Culture on blood agar", "correct": false},
      {"text": "Sabouraud agar", "correct": false},
      {"text": "ELISA", "correct": false}
    ],
    "explanation": "PAS stain or KOH mount involves smearing a candidal plaque, treating with KOH, and observing under the microscope."
  },
  {
    "question": "Chronic hyperplastic candidiasis may resemble which oral lesion?",
    "answers": [
      {"text": "Erosive lichen planus", "correct": false},
      {"text": "Speckled leukoplakia", "correct": true},
      {"text": "Geographic tongue", "correct": false},
      {"text": "Median rhomboid glossitis", "correct": false},
      {"text": "Herpes simplex lesions", "correct": false}
    ],
    "explanation": "Chronic hyperplastic candidiasis may resemble speckled leukoplakia."
  },
  {
    "question": "Topical antifungal therapy for oral candidiasis should be continued:",
    "answers": [
      {"text": "Until symptoms resolve", "correct": false},
      {"text": "At least 1 week beyond disappearance of clinical signs", "correct": true},
      {"text": "Only for 3 days", "correct": false},
      {"text": "Only in combination with antibiotics", "correct": false},
      {"text": "Only in hyperplastic lesions", "correct": false}
    ],
    "explanation": "Topical antifungal therapy should be continued at least 1 week beyond disappearance of clinical signs."
  },
  {
    "question": "Which systemic antifungal is commonly used in immunocompromised patients with oral candidiasis?",
    "answers": [
      {"text": "Nystatin", "correct": false},
      {"text": "Clotrimazole troches", "correct": false},
      {"text": "Fluconazole", "correct": true},
      {"text": "Sodium bicarbonate rinse", "correct": false},
      {"text": "Hydrogen peroxide", "correct": false}
    ],
    "explanation": "Fluconazole is commonly used systemically in immunocompromised patients with oral candidiasis."
  },
  {
    "question": "Hyperplastic candidiasis may be found in which high-risk oral site?",
    "answers": [
      {"text": "Gingiva of children", "correct": false},
      {"text": "Retrocommissural areas", "correct": true},
      {"text": "Buccal mucosa of neonates", "correct": false},
      {"text": "Ventral tongue", "correct": false},
      {"text": "Hard palate only", "correct": false}
    ],
    "explanation": "Hyperplastic candidiasis may be found in retrocommissural areas."
  },
  {
    "question": "The triad of chronic mucocutaneous candidiasis, myositis, and thymoma relates to:",
    "answers": [
      {"text": "Deficiency of neutrophils", "correct": false},
      {"text": "Deficiency in T cell–mediated immunologic function", "correct": true},
      {"text": "Excessive B cell activity", "correct": false},
      {"text": "IgE-mediated allergy", "correct": false},
      {"text": "Autoantibodies against keratin", "correct": false}
    ],
    "explanation": "This triad relates to deficiency in T cell–mediated immunologic function."
  },
  {
    "question": "Denture stomatitis is primarily caused by:",
    "answers": [
      {"text": "Mechanical trauma only", "correct": false},
      {"text": "Candida biofilm formation on the prosthesis", "correct": true},
      {"text": "Vitamin A deficiency", "correct": false},
      {"text": "HPV infection", "correct": false},
      {"text": "Excess fluoride exposure", "correct": false}
    ],
    "explanation": "Denture stomatitis is primarily caused by Candida biofilm formation on the prosthesis."
  },
  {
    "question": "Which type of candidiasis is most likely to present with painful burning, dysphagia, and tender erythematous mucosa in severe cases?",
    "answers": [
      {"text": "Chronic hyperplastic candidiasis", "correct": false},
      {"text": "Acute pseudomembranous candidiasis", "correct": true},
      {"text": "Median rhomboid glossitis", "correct": false},
      {"text": "Denture stomatitis", "correct": false},
      {"text": "Angular cheilitis", "correct": false}
    ],
    "explanation": "Acute pseudomembranous candidiasis is most likely to present with painful burning, dysphagia, and tender erythematous mucosa in severe cases."
  },
  {
    "question": "Which of the following is TRUE about chronic hyperplastic candidiasis?",
    "answers": [
      {"text": "Always resolves with topical antifungals", "correct": false},
      {"text": "May represent a premalignant lesion", "correct": true},
      {"text": "Common in neonates", "correct": false},
      {"text": "Typically painless only in children", "correct": false},
      {"text": "Occurs exclusively on lateral tongue", "correct": false}
    ],
    "explanation": "Chronic hyperplastic candidiasis may represent a premalignant lesion."
  },
  {
    "question": "Which Candida species is least commonly implicated in oral candidiasis?",
    "answers": [
      {"text": "C. albicans", "correct": false},
      {"text": "C. tropicalis", "correct": false},
      {"text": "C. glabrata", "correct": false},
      {"text": "C. guilliermondii", "correct": true},
      {"text": "All are equally common", "correct": false}
    ],
    "explanation": "Candida guilliermondii is least commonly implicated in oral candidiasis."
  },
  {
    "question": "Histopathologic hallmark of acute candidiasis includes:",
    "answers": [
      {"text": "Basal cell vacuolization", "correct": false},
      {"text": "Fungal hyphae penetrating upper epithelial layers at acute angles with neutrophilic microabscesses", "correct": true},
      {"text": "Hyperkeratosis only", "correct": false},
      {"text": "Lymphocytic band in lamina propria", "correct": false},
      {"text": "Granulomatous inflammation", "correct": false}
    ],
    "explanation": "The histopathologic hallmark of acute candidiasis includes fungal hyphae penetrating upper epithelial layers at acute angles with neutrophilic microabscesses."
  }

];

let questions=[];
let currentQuestionIndex=0;
let score=0;
let answersRecord=[];
let timeLeft=EXAM_TIME;
let timer;

var questionElement=document.getElementById("question");
var answerButtons=document.getElementById("answer-buttons");
var nextButton=document.getElementById("next-btn");
var explanationElement=document.getElementById("explanation");
var progressBar=document.getElementById("progress-bar");
var navigatorDiv=document.getElementById("navigator");
var scoreDisplay=document.getElementById("scoreDisplay");
var reviewSection=document.getElementById("review-section");
var restartBtn=document.getElementById("restart-btn");
var submitBtn=document.getElementById("submit-btn");
var timerElement=document.getElementById("timer");

Array.prototype.shuffle=function(){
return this.sort(function(){ return Math.random()-0.5; });
}

function startExam(){

questions=[...allQuestions].shuffle().slice(0,QUESTION_LIMIT);
answersRecord=new Array(questions.length).fill(null);

currentQuestionIndex=0;
score=0;

generateNavigator();
showQuestion();
startTimer();
}

function startTimer(){

timer=setInterval(function(){

timeLeft--;

let min=Math.floor(timeLeft/60);
let sec=timeLeft%60;

timerElement.innerText=
String(min).padStart(2,'0')+": "+
String(sec).padStart(2,'0');

if(timeLeft<=0){

clearInterval(timer);
finishExam();

}

},1000);
}

function generateNavigator(){

navigatorDiv.innerHTML="";

for(let i=0;i<questions.length;i++){

let btn=document.createElement("button");
btn.innerText=i+1;
btn.classList.add("nav-btn");

btn.onclick=function(){

currentQuestionIndex=i;
showQuestion();

}

navigatorDiv.appendChild(btn);

}

}

function showQuestion(){

resetState();

let q=questions[currentQuestionIndex];

questionElement.innerText=
(currentQuestionIndex+1)+". "+q.question;

updateProgress();

let answers=[...q.answers].shuffle();

answers.forEach(function(answer){

const button=document.createElement("button");
button.innerText=answer.text;

if(answer.correct){
button.dataset.correct=true;
}

button.onclick=selectAnswer;

answerButtons.appendChild(button);

});

}

function resetState(){

explanationElement.innerText="";
nextButton.style.display="none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}

}

function selectAnswer(e){

const selected=e.target;
const correct=selected.dataset.correct==="true";

answersRecord[currentQuestionIndex]=selected.innerText;

if(correct){

selected.classList.add("correct");
score++;

}else{

selected.classList.add("wrong");

explanationElement.innerText=
"Explanation: "+questions[currentQuestionIndex].explanation;

}

Array.from(answerButtons.children).forEach(function(btn){

if(btn.dataset.correct==="true"){
btn.classList.add("correct");
}

btn.disabled=true;

});

document.querySelectorAll(".nav-btn")[currentQuestionIndex]
.classList.add("answered");

scoreDisplay.innerText=score;

nextButton.style.display="block";

}

nextButton.onclick=function(){

currentQuestionIndex++;

if(currentQuestionIndex<questions.length){

showQuestion();

}else{

finishExam();

}

}

submitBtn.onclick=finishExam;

function finishExam(){

clearInterval(timer);

questionElement.innerText="Exam Completed";

answerButtons.innerHTML="";

reviewSection.innerHTML=
"<h3>Review</h3>";

questions.forEach(function(q,i){

let div=document.createElement("div");

let correctAnswer=q.answers.find(function(a){ return a.correct; }).text;

div.innerHTML=
"<b>Q"+(i+1)+":</b> "+q.question+
"<br>Your answer: "+answersRecord[i]+
"<br>Correct answer: "+correctAnswer+
"<br><br>";

reviewSection.appendChild(div);

});

restartBtn.style.display="block";
}

restartBtn.onclick=function(){

location.reload();

}

function updateProgress(){

let progress=
(currentQuestionIndex/questions.length)*100;

progressBar.style.width=progress+"%";

}

startExam();
const EuropassParserConfig = [
    /* First Name*/
    { 'original': 'SkillsPassport.LearnerInfo.Identification.PersonName.FirstName', 'replace': 'name', 'enabled': true},
    /* Surname*/
    { 'original': 'SkillsPassport.LearnerInfo.Identification.PersonName.Surname', 'replace': 'surname', 'enabled': true},
    /* Email*/
    { 'original': 'SkillsPassport.LearnerInfo.Identification.ContactInfo.Email.Contact', 'replace': 'email', 'enabled': true},
    /* Country Label*/
    { 'original': 'SkillsPassport.LearnerInfo.Identification.ContactInfo.Address.Contact.Country.Label', 'replace': 'country', 'enabled': true},
    /* Address*/
    { 'original': 'SkillsPassport.LearnerInfo.Identification.ContactInfo.Address.Contact.AddressLine', 'replace': 'address', 'enabled': true},
    /* Postal Code*/
    { 'original': 'SkillsPassport.LearnerInfo.Identification.ContactInfo.Address.Contact.PostalCode', 'replace': 'postal', 'enabled': true},
    /* City*/
    { 'original': 'SkillsPassport.LearnerInfo.Identification.ContactInfo.Address.Contact.Municipality', 'replace': 'city', 'enabled': true},
    /* Demographics Birthdate*/
    { 'original': 'SkillsPassport.LearnerInfo.Identification.Demographics.Birthdate.Year', 'replace': 'birth_year', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Identification.Demographics.Birthdate.Month', 'replace': 'birth_month', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Identification.Demographics.Birthdate.Day', 'replace': 'birth_day', 'enabled': true},
    /* Gender */
    { 'original': 'SkillsPassport.LearnerInfo.Identification.Demographics.Gender.Label', 'replace': 'gender', 'enabled': true},
    /* Photo */
    { 'original': 'SkillsPassport.LearnerInfo.Identification.Photo.Data', 'replace': 'photo', 'enabled': true},
    /* Headline */
    { 'original': 'SkillsPassport.LearnerInfo.Headline.Type.Label', 'replace': 'headline_title', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Headline.Description.Label', 'replace': 'headline_description', 'enabled': true},
    /* Work Experience */
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Position.Label', 'replace': 'work_experience_title', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Activities', 'replace': 'work_experience_description', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Employer.Name', 'replace': 'work_experience_employer_name', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Employer.ContactInfo.Address.Contact.AddressLine', 'replace': 'work_experience_employer_address', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Employer.ContactInfo.Address.Contact.Country.Label', 'replace': 'work_experience_employer_country', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Employer.ContactInfo.Address.Contact.Municipality', 'replace': 'work_experience_employer_city', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Employer.ContactInfo.Address.Contact.PostalCode', 'replace': 'work_experience_employer_postal', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Period.From.Day', 'replace': 'work_experience_from_day', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Period.From.Month', 'replace': 'work_experience_from_month', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Period.From.Year', 'replace': 'work_experience_from_year', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Period.To.Day', 'replace': 'work_experience_to_day', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Period.To.Month', 'replace': 'work_experience_to_month', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Period.To.Year', 'replace': 'work_experience_to_year', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Period.Current', 'replace': 'work_experience_current', 'prefix': '_', 'enabled': true},
    
    /* Education */
    { 'original': 'SkillsPassport.LearnerInfo.Education.Title', 'replace': 'education_title', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Education.Activities', 'replace': 'education_description', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Education.Organisation.Name', 'replace': 'education_name', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Education.Organisation.ContactInfo.Address.Contact.AddressLine', 'replace': 'education_address', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Education.Organisation.ContactInfo.Address.Contact.Country.Label', 'replace': 'education_country', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Education.Organisation.ContactInfo.Address.Contact.Municipality', 'replace': 'education_city', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Education.Period.From.Day', 'replace': 'education_from_day', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Education.Period.From.Month', 'replace': 'education_from_month', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Education.Period.From.Year', 'replace': 'education_from_year', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Education.Period.To.Day', 'replace': 'education_to_day', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Education.Period.To.Month', 'replace': 'education_to_month', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Education.Period.To.Year', 'replace': 'education_to_year', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Education.Period.Current', 'replace': 'education_current', 'prefix': '_', 'enabled': true},
    
    /* Achievements */
    { 'original': 'SkillsPassport.LearnerInfo.Achievement.Title.Label', 'replace': 'achievement_title', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Achievement.Description', 'replace': 'achievement_description', 'prefix': '_', 'enabled': true},
    
    /* Skills Mother Tongue */
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.MotherTongue.Description.Label', 'replace': 'mother_tongue', 'prefix': '_', 'enabled': true},
   
    /* Foreign Language */
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Description.Label', 'replace': 'foreign_language_title', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.ProficiencyLevel.Listening', 'replace': 'foreign_language_listening', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.ProficiencyLevel.Reading', 'replace': 'foreign_language_reading', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.ProficiencyLevel.Writing', 'replace': 'foreign_language_writing', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.ProficiencyLevel.SpokenInteraction', 'replace': 'foreign_language_spoken_interaction', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.ProficiencyLevel.SpokenProduction', 'replace': 'foreign_language_spoken_production', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Certificate.Title', 'replace': 'foreign_language_certificate_title', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Certificate.AwardingBody', 'replace': 'foreign_language_certificate_awarding_body', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Certificate.Date.Day', 'replace': 'foreign_language_certificate_day', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Certificate.Date.Month', 'replace': 'foreign_language_certificate_month', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Certificate.Date.Year', 'replace': 'foreign_language_certificate_year', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Experience.Area.Label', 'replace': 'foreign_language_experience_title', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Experience.Description', 'replace': 'foreign_language_experience_description', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Experience.Period.From.Day', 'replace': 'foreign_language_experience_from_day', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Experience.Period.From.Month', 'replace': 'foreign_language_experience_from_month', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Experience.Period.From.Year', 'replace': 'foreign_language_experience_from_year', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Experience.Period.To.Day', 'replace': 'foreign_language_experience_to_day', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Experience.Period.To.Month', 'replace': 'foreign_language_experience_to_month', 'prefix': '_', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Linguistic.ForeignLanguage.Experience.Period.To.Year', 'replace': 'foreign_language_experience_to_year', 'prefix': '_', 'enabled': true},
    
    /* Other Skills - Driving */
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Driving.Description', 'replace': 'driving_category', 'prefix': '_', 'enabled': true},
    /* Other Skills - Communication */
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Communication.Description', 'replace': 'communication_skills', 'enabled': true},
    /* Other Skills - Organisational */
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Organisational.Description', 'replace': 'organisational_skills', 'enabled': true},
    /* Other Skills - JobRelated */
    { 'original': 'SkillsPassport.LearnerInfo.Skills.JobRelated.Description', 'replace': 'job_related_skills', 'enabled': true},
    /* Other Skills - Computer */
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Computer.Description', 'replace': 'computer_skills', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Computer.ProficiencyLevel.Communication', 'replace': 'computer_skills_communication', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Computer.ProficiencyLevel.ContentCreation', 'replace': 'computer_skills_content_creation', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Computer.ProficiencyLevel.Information', 'replace': 'computer_skills_information', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Computer.ProficiencyLevel.ProblemSolving', 'replace': 'computer_skills_problem_solving', 'enabled': true},
    { 'original': 'SkillsPassport.LearnerInfo.Skills.Computer.ProficiencyLevel.Safety', 'replace': 'computer_skills_safety', 'enabled': true},

    
    /**
     * 
     *  COVER LETTER SECTION
     * 
     */

    
    /** Cover Letter Addressee
    { 'original': 'SkillsPassport.CoverLetter.Addressee.PersonName.Title.Label', 'replace': 'coverletter_addressee_title', 'enabled': true},
    { 'original': 'SkillsPassport.CoverLetter.Addressee.PersonName.Name.Label', 'replace': 'coverletter_addressee_name', 'enabled': true},
    { 'original': 'SkillsPassport.CoverLetter.Addressee.PersonName.Surname.Label', 'replace': 'coverletter_addressee_surname', 'enabled': true},
    { 'original': 'SkillsPassport.CoverLetter.Addressee.Organisation.Name', 'replace': 'coverletter_addressee_organisation_name', 'enabled': true},
    { 'original': 'SkillsPassport.CoverLetter.Addressee.Organisation.ContactInfo.Address.Contact.AddressLine', 'replace': 'coverletter_addressee_organisation_address', 'enabled': true},
    { 'original': 'SkillsPassport.CoverLetter.Addressee.Organisation.ContactInfo.Address.Contact.AddressLine2', 'replace': 'coverletter_addressee_organisation_address2', 'enabled': true},
    { 'original': 'SkillsPassport.CoverLetter.Addressee.Organisation.ContactInfo.Address.Contact.Country.Label', 'replace': 'coverletter_addressee_organisation_country', 'enabled': true},
    { 'original': 'SkillsPassport.CoverLetter.Addressee.Organisation.ContactInfo.Address.Contact.Municipality', 'replace': 'coverletter_addressee_organisation_city', 'enabled': true},
    { 'original': 'SkillsPassport.CoverLetter.Addressee.Organisation.ContactInfo.Address.Contact.PostalCode', 'replace': 'coverletter_addressee_organisation_postal', 'enabled': true},
    */
    /** Cover Letter Letter Parts
    { 'original': 'SkillsPassport.CoverLetter.Letter.SubjectLine', 'replace': 'coverletter_letter_subject', 'enabled': true},
    { 'original': 'SkillsPassport.CoverLetter.Letter.Localisation', 'replace': 'coverletter_letter_', 'enabled': true},
    */
];

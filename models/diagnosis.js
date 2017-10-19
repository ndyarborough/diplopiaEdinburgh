module.exports = (sequelize, DataTypes) => {
	let Diagnosis = sequelize.define("Diagnosis", {
		//timestamps: false,
		diagnosis: {
			type: DataTypes.STRING
		},
		etiology: {
			type: DataTypes.STRING
		},
		timeline: {
			type: DataTypes.STRING
		},
		workup: {
			type: DataTypes.STRING
		}
	});

	Diagnosis.associate = function(models) {
		Diagnosis.hasOne(models.User);
	};

	Diagnosis.bulkCreate([{
        diagnosis: 'Cerebral polyopia',
        etiology: 'Is uncommon and can be caused by infarctions, tumors, multiple sclerosis, trauma, migraines, and seizures.',
        timeline: 'Refer urgently.',
        workup: 'Complete ocular and neurological exam. Imaging of the brain (PET and MRI).'
      }, {
        diagnosis: 'Media opacity',
        etiology: 'Possible issue with uncorrected refractive error or abnormality of the tear film, cornea, lens, vitreous or retina.',
        timeline: 'Non-critical and non-urgent.',
        workup: 'Refer to eye care provider for exam including refraction and eye health evaluation.'
      }, {
        diagnosis: 'Cranial Nerve Six Palsy',
        etiology: 'Typically microvascular ischemia secondary to chronic diabetes or hypertension. May also be caused by cavernous sinus mass, increased intracranial pressure, giant cell arteritis, multiple sclerosis or meningeal inflammation/infection.',
        timeline: 'Refer urgently.',
        workup: 'Complete neurologic and ophthalmic exam. MRI of the brain may be indicated for certain patients. Appropriate bloodwork may include ESR, RPR, FTA-ABS, and Lyme titer.'
      }, {
        diagnosis: 'Internuclear Ophthalmoplegia',
        etiology: 'Multiple sclerosis, ischemic vascular disease, or brainstem mass lesion.',
        timeline: 'Refer urgently.',
        workup: 'Complete ocular exam indicated. Tensilon test. MRI of the brainstem and midbrain.'
      }, {
        diagnosis: 'Cranial Nerve Three Palsy, Pupil-Sparing',
        etiology: 'Typically ischemic microvascular disease. Rarely cavernous sinus syndrome or giant cell arteritis.',
        timeline: 'Refer urgently.',
        workup: 'Complete ocular exam and full neurologic exam. Immediate imaging study of the brain in select patients (MRI). Bloodwork for select groups may include CBC with differential for children and Tensilson test or erythrocyte sedimentation rate for adults.'
      }, {
        diagnosis: 'Cranial Nerve Three Palsy, Pupil-Involvement',
        etiology: 'Most commonly an aneurysm (usually posterior communicating artery). Less common may include ischemic vascular disease, tumor or trauma.',
        timeline: 'Refer urgently.',
        workup: 'Complete ocular exam and full neurologic exam. Immediate imaging study of the brain (MRI). Cerebral angiography.'
      }, {
        diagnosis: 'Restrictive Myopathy secondary to Thyroid Orbitopathy',
        etiology: 'Typically tight inferior rectus muscle secondary to thickening of the involved extraocular muscles.',
        timeline: 'Non-critical and non-urgent.',
        workup: 'Refer to internist or endocrinologist for management of the systemic thyroid disease. Refer to eye care provider for management of the ocular thyroid disorder.'
      }, {
        diagnosis: 'Cranial Nerve Four Palsy',
        etiology: 'Most commonly trauma or vascular infarct from diabetes or hypertension. Rarely, from a tumor, aneurysm, or giant cell arteritis.',
        timeline: 'Refer urgently.',
        workup: 'Complete ocular exam. Tensilon test. CT scan of head and orbits (suspect orbital disease). MRI of the brain.'    
      },{
        diagnosis: 'Blurred Vision',
        etiology: 'null',
        timeline: 'null',
        workup: 'null'    
  	}]);

	return Diagnosis;
}
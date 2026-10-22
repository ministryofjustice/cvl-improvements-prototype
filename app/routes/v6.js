//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//


module.exports = function (router) {

var version = '/v6';



// Add your routes here


// Creation


router.post(version + '/are-you-sure-answer2', function(request, response) {

    var areyousure = request.session.data['createLicence']
    if (areyousure == "yes"){
        response.redirect(version + "/probation-practitioner/pre-release/create/appt-who")
    } else {
        response.redirect(version + "/probation-practitioner/pre-release/create/case-list-start")
    }
})


// Inital appointment needed

router.post(version + '/appointmentNeeded', function(request, response) {

    var appointmentNeeded = request.session.data['appointmentNeeded'];
    
    if (appointmentNeeded == "yes"){
        // request.session.data['appointmentNeeded'] = 'yes';
        response.redirect(version + "/probation-practitioner/pre-release/create/appt-who")
    } else if (appointmentNeeded == "no") {
        // request.session.data['prisoner'] = 'adrian';
        // request.session.data['appointmentNeeded'] = 'no';
        response.redirect(version + "/probation-practitioner/pre-release/create/appt-where/saved-addresses")
    }
})


router.post(version + '/appointmentNeededca', function(request, response) {

    var appointmentNeeded = request.session.data['appointmentNeeded'];
    
    if (appointmentNeeded == "yes"){
        // request.session.data['appointmentNeeded'] = 'yes';
        response.redirect(version + "/case-admin/hard-stop/appt-who")
    } else if (appointmentNeeded == "no") {
        // request.session.data['prisoner'] = 'adrian';
        // request.session.data['appointmentNeeded'] = 'no';
        response.redirect(version + "/case-admin/hard-stop/appt-where/saved-addresses")
    }
})


// Time-served 2.0 - CA adding conditions advised by probation
// Has a probation practitioner told you which conditions to add to this licence?

router.post(version + '/probationadvisedtimeserved', function(request, response) {

    var ProbationAdvised = request.session.data['ProbationAdvised'];
    
    if (ProbationAdvised == "yes"){
        response.redirect(version + "/case-admin/timeserved/probation-advisor-details")

    } else if (ProbationAdvised == "no") {
        response.redirect(version + "/case-admin/timeserved/check-licence")
    }
})


// Enter the details of the probation practitioner who told you which conditions to add or change

router.post(version + '/probationadvisordetailstimeserved', function(request, response) {

    var ProbationAdvisor = request.session.data['ProbationAdvisor'];
    
    if (ProbationAdvisor == "continue"){
        response.redirect(version + "/case-admin/timeserved/conditions/additional-conditions/additional-conditions")

    } else if (ProbationAdvisor == "back") {
        response.redirect(version + "/case-admin/timeserved/probation-advised")
    }
})



//Additional conditions
//Restriction zone
//Delete this condition

// Run this code when a form is submitted to 'parole-outcome-letter-answer'
router.post(version + '/delete-restrictionzone', function (req, res) {

  // Make a variable and give it the value from 'how-many-letters'
  var deleterestrictionzone = req.session.data['deleterestrictionzone']
  // Check whether the variable matches a condition
  if (deleterestrictionzone == "yes"){
    // Send user to overview with removed map
    res.redirect(version + '/probation-practitioner/pre-release/create/additional-conditions/complete-restriction-zone/8a-overview')
  } else {
    // Send user back to overview page
    res.redirect(version + '/probation-practitioner/pre-release/create/additional-conditions/complete-restriction-zone/8a-overview')
  }

})



// Licence conditions

router.post(version + '/additional-conditions-answer2', function(request, response) {

    var addConditions = request.session.data['additionalConditions']
    if (addConditions == "yes"){
        response.redirect(version + "/probation-practitioner/pre-release/create/additional-conditions/enter-additional-conditions")
    } else {
        response.redirect(version + "/probation-practitioner/pre-release/create/bespoke-conditions")
    }
})

router.post(version + '/bespoke-conditions-answer2', function(request, response) {

    var bespConditions = request.session.data['bespokeConditions']
    if (bespConditions == "yes"){
        response.redirect(version + "/probation-practitioner/pre-release/create/create-bespoke-condition")
    } else {
        response.redirect(version + "/probation-practitioner/pre-release/create/check-licence")
    }
})




router.post(version + '/additional-conditions-entry', function(request, response) {
    var electronic = request.session.data['electronic'] || [];

    const electronicConditions = [
        "tag",
        "trail-monitoring",
        "approved-address",
        "alcohol",
        "alcohol-check"
    ];

    const hasMatchingCondition = electronicConditions.some(condition => electronic.includes(condition));

    if (hasMatchingCondition) {
        response.redirect(version + "/probation-practitioner/pre-release/create/additional-conditions/pathfinder-programme");
    } else {
        response.redirect(version + "/probation-practitioner/pre-release/create/bespoke-conditions");
    }
});



// Edit routing


router.post(version + '/are-you-sure-edit-before-approval-answer', function(request, response) {

    var areyousureEdit = request.session.data['editLicence']
    if (areyousureEdit == "yes"){
        response.redirect(version + "/probation-practitioner/pre-release/create/check-licence-edit")
    } else {
        response.redirect(version + "/probation-practitioner/pre-release/create/check-licence-2")
    }
})



router.post(version + '/are-you-sure-edit-answer', function(request, response) {

    var areyousureEdit = request.session.data['editLicence']
    if (areyousureEdit == "yes"){
        response.redirect(version + "/probation-practitioner/pre-release/edit/check-licence-edit?approved=")
    } else {
        response.redirect(version + "/probation-practitioner/pre-release/edit/case-list")
    }
})







// Vary routing - PLANING TO REMOVING THIS PAGE - IF SO AFTER UR SEPT 2025 THEN DELETE THIS CODE

router.post(version + '/are-you-sure-vary-answer', function(request, response) {

    var vary = request.session.data['varyLicence']
    if (vary == "yes"){
        response.redirect(version + "/probation-practitioner/post-release/discuss-spo")
    } else {
        response.redirect(version + "/probation-practitioner/post-release/case-list-view")
    }
})


// Hard stop

router.post(version + '/are-you-sure-generate-answer', function(request, response) {

    var areyousuregenerate = request.session.data['generateLicence']
    if (areyousuregenerate == "yes"){
        response.redirect(version + "/case-admin/hard-stop/appt-who")
    } else {
        response.redirect(version + "/case-admin/case-list-pip-approved")
    }
})


router.post(version + '/licence-need-changing-answer', function(request, response) {

    var doesLicenceNeedChanging = request.session.data['licenceNeedChanging']
    if (doesLicenceNeedChanging == "yes"){
        response.redirect(version + "/probation-practitioner/post-release/discuss-spo")
    } else {
        response.redirect(version + "/probation-practitioner/post-release/hard-stop/licence-history")
    }
})



// Time served


// CA - Routing a timeserved case to either continue on CVL or noting that the licene is done on NOMIS
router.post(version + '/nomisuse', function(request, response) {

    var WhichSystemChoice = request.session.data['systemchoice']
    if (WhichSystemChoice == "cvl"){
        response.redirect(version + "/case-admin/timeserved/appt-who")
    } else {
        response.redirect(version + "/case-admin/case-list-pip-approved")
    }
})


// CA - Send licence for approval (contact probation page) or return to case list
router.post(version + '/checkyouranswers', function(request, response) {

    var SendLicenceForApproval = request.session.data['sendlicenceforapproval']
    if (SendLicenceForApproval == "yes"){
        response.redirect(version + "/case-admin/timeserved/contact-the-probation-team")
    } else {
        response.redirect(version + "/case-admin/case-list-pip-approved")
    }
})


// PP - Reviewing the licence
router.post(version + '/licence-need-changing-answer-ts', function(request, response) {

    var doesLicenceNeedChanging = request.session.data['licenceNeedChanging']
    if (doesLicenceNeedChanging == "yes"){
        response.redirect(version + "/probation-practitioner/post-release/discuss-spo")
    } else {
        response.redirect(version + "/probation-practitioner/post-release/timeserved/licence-history")
    }
})


// PP - Review policy changes journey
router.post(version + '/policy-change-not-needed', function(request, response) {

    var conditionNotneeded = request.session.data['condition-not-needed']
    if (conditionNotneeded == "yes"){
        response.redirect(version + "/probation-practitioner/post-release/review-additional-conditions/changed-conditions/check-licence-condition-6d")
    } else {
        response.redirect(version + "/probation-practitioner/post-release/review-additional-conditions/changed-conditions/check-licence-condition-5a")
    }
})



// For UR Sept 2026


router.post(version + '/are-you-sure-answer-ur', function(request, response) {

    var areyousure = request.session.data['createLicence']
    if (areyousure == "yes"){
        response.redirect(version + "/probation-practitioner/pre-release/create/appt-who")
    } else {
        response.redirect(version + "/probation-practitioner/pre-release/create/case-list-start")
    }
})



router.post(version + '/licence-need-changing-answer-ur', function(request, response) {

    var doesLicenceNeedChanging = request.session.data['licenceNeedChanging']
    if (doesLicenceNeedChanging == "yes"){
        response.redirect(version + "/probation-practitioner/post-release/discuss-spo")
    } else {
        response.redirect(version + "/_ur_flow_sept25/vary/licence-history")
    }
})

}






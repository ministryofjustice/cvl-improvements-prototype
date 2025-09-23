//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//


module.exports = function (router) {

var version = '/v3';



// Add your routes here


// Creation


router.post(version + '/are-you-sure-answer2', function(request, response) {

    var areyousure = request.session.data['createLicence']
    if (areyousure == "yes"){
        response.redirect(version + "/probation-practitioner/pre-release/create/who-with")
    } else {
        response.redirect(version + "/probation-practitioner/pre-release/create/case-list-start")
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
        response.redirect(version + "/case-admin/hard-stop/who-with")
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


//Timeserved - Prison admin creating a new licence
router.post('/ca-new-licence-timeserved', function (req, res) {
    var CAnewlicenceTimeserved = req.session.data['activatecreate']
  
    // Check whether the variable matches a condition
    if (CAnewlicenceTimeserved == "yes"){
     
     // Send user to next page
      res.redirect(version + '/timeserved/meet')
    } else {
      // Send user to ineligible page
      res.redirect(version + '/list')
    }
  
  });
  
  
  //Timeserved - Approver view from approve licence page to approve and back to case list
  router.post(version + '/approvals/approve-timeserved', function(req, res) {
    var route = req.session.data['approve-a-licence'];
    if (route == "approvenow"){
      res.redirect(version + '/approvals/confirmation-timeserved');
    }
    else if (route == "returntocases"){
      res.redirect(version + '/list');
    }
  });


  //Timeserved - Approver view from confirmation list to approve another licence
  router.post(version + '/approvals/confirmation-timeserved', function(req, res) {
    res.redirect(version + '/list');
  });

  
  //Time served - from confirmation back to case list
  router.post(version + '/timeserved/confirmation', function(req, res) {
    var saveexit = req.session.data['submit'];
    if (saveexit == "continue"){
      res.redirect(version + '/list#releases-two-days');
    }
  });
  
  
  
  






// For UR Sept 2026


router.post(version + '/are-you-sure-answer-ur', function(request, response) {

    var areyousure = request.session.data['createLicence']
    if (areyousure == "yes"){
        response.redirect(version + "/probation-practitioner/pre-release/create/who-with")
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






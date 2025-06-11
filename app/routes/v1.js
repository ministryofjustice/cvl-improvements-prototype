//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//


module.exports = function (router) {

var version = '/v1';



// Add your routes here



router.post(version + '/are-you-sure-answer2', function(request, response) {

    var areyousure = request.session.data['createLicence']
    if (areyousure == "yes"){
        response.redirect(version + "/probation-practitioner/pre-release/create/who-with")
    } else {
        response.redirect(version + "/probation-practitioner/pre-release/create/case-list-start")
    }
})



router.post(version + '/additional-conditions-answer2', function(request, response) {

    var addConditions = request.session.data['additionalConditions']
    if (addConditions == "yes"){
        response.redirect(version + "/probation-practitioner/pre-release/create/enter-additional-conditions")
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
        response.redirect(version + "/probation-practitioner/pre-release/edit/check-licence-edit")
    } else {
        response.redirect(version + "/probation-practitioner/pre-release/edit/case-list")
    }
})





// Vary routing

router.post(version + '/are-you-sure-vary-answer', function(request, response) {

    var vary = request.session.data['varyLicence']
    if (vary == "yes"){
        response.redirect(version + "/probation-practitioner/post-release/discuss-spo")
    } else {
        response.redirect(version + "/probation-practitioner/post-release/case-list-view")
    }
})




}
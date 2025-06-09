//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//


module.exports = function (router) {

var version = '/v2';



// Add your routes here


// MVP2 - general flow


router.post(version + '/are-you-sure-answer2', function(request, response) {

    var areyousure = request.session.data['createLicence']
    if (areyousure == "yes"){
        response.redirect(version + "/probation-practitioner/pre-release/create/who-with")
    } else {
        response.redirect(version + "/probation-practitioner/pre-release/create/case-list")
    }
})



// Licence conditions

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

router.post(version + '/standard-curfew-edit-3-answer', function(request, response) {

    var standard = request.session.data['standardCurfew']
    if (standard == "yes"){
        response.redirect(version + "/probation-practitioner/pre-release/edit/check-licence-edit")
    } else {
        response.redirect(version + "/probation-practitioner/pre-release/edit/same-each-day")
    }
})

router.post(version + '/same-each-day-edit-3-answer', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect(version + "/probation-practitioner/pre-release/edit/enter-curfew-same")
    } else {
        response.redirect(version + "/probation-practitioner/pre-release/edit/enter-curfew-diff")
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



router.post(version + '/address-type-answer', function(request, response) {

    var addType = request.session.data['addressType']
    if (addType == "res"){
        response.redirect(version + "/probation-practitioner/post-release/address-checks")
    } else {
        response.redirect(version + "/probation-practitioner/post-release/enter-new-address")
    }
})

router.post(version + '/standard-curfew-vary-answer', function(request, response) {

    var standard = request.session.data['standardCurfew']
    if (standard == "yes"){
        response.redirect(version + "/probation-practitioner/post-release/vary-licence-details")
    } else {
        response.redirect(version + "/probation-practitioner/post-release/same-each-day")
    }
})



router.post(version + '/same-each-day-vary-answer', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect(version + "/probation-practitioner/post-release/enter-curfew-same")
    } else {
        response.redirect(version + "/probation-practitioner/post-release/enter-curfew-diff")
    }
})


router.post(version + '/address-checks-answer-2', function(request, response) {

    var addCheck2 = request.session.data['addressChecks']
    if (addCheck2 == "no"){
        response.redirect(version + "/probation-practitioner/post-release/interrupt-card")
    } else {
        response.redirect(version + "/probation-practitioner/post-release/enter-new-address")
    }
})




}
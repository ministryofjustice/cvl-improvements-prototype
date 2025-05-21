//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// MVP1

router.post('/are-you-sure-answer', function(request, response) {

    var areyousure = request.session.data['createLicence']
    if (areyousure == "yes"){
        response.redirect("/mvp1/probation-practitioner/who-with")
    } else {
        response.redirect("/mvp1/probation-practitioner/case-list")
    }
})


router.post('/additional-conditions-answer', function(request, response) {

    var addConditions = request.session.data['additionalConditions']
    if (addConditions == "yes"){
        response.redirect("/../../../_common/not-testing.html")
    } else {
        response.redirect("/mvp1/probation-practitioner/bespoke-conditions")
    }
})

router.post('/bespoke-conditions-answer', function(request, response) {

    var bespConditions = request.session.data['bespokeConditions']
    if (bespConditions == "yes"){
        response.redirect("/../../../_common/not-testing.html")
    } else {
        response.redirect("/mvp1/probation-practitioner/check-licence")
    }
})


// MVP2 - general flow


router.post('/are-you-sure-answer2', function(request, response) {

    var areyousure = request.session.data['createLicence']
    if (areyousure == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/who-with")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/case-list")
    }
})

// Curfew hours

router.post('/standard-curfew-answer', function(request, response) {

    var standard = request.session.data['standardCurfew']
    if (standard == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/additional-conditions")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/same-each-day")
    }
})

router.post('/same-each-day-answer', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/enter-curfew-same")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/enter-curfew-diff")
    }
})


router.post('/standard-curfew-edit-answer', function(request, response) {

    var standard = request.session.data['standardCurfew']
    if (standard == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/check-licence")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/same-each-day-edit")
    }
})

router.post('/same-each-day-edit-answer', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/enter-curfew-same-edit")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/enter-curfew-diff-edit")
    }
})

router.post('/standard-curfew-edit-2-answer', function(request, response) {

    var standard = request.session.data['standardCurfew']
    if (standard == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/check-licence-edit")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/same-each-day-edit-2")
    }
})

router.post('/same-each-day-edit-2-answer', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/enter-curfew-same-edit-2")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/enter-curfew-diff-edit-2")
    }
})



// Licence conditions

router.post('/additional-conditions-answer2', function(request, response) {

    var addConditions = request.session.data['additionalConditions']
    if (addConditions == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/enter-additional-conditions")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/bespoke-conditions")
    }
})

router.post('/bespoke-conditions-answer2', function(request, response) {

    var bespConditions = request.session.data['bespokeConditions']
    if (bespConditions == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/create-bespoke-condition")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/check-licence")
    }
})


// Edit routing


router.post('/are-you-sure-edit-before-approval-answer', function(request, response) {

    var areyousureEdit = request.session.data['editLicence']
    if (areyousureEdit == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/create/check-licence-edit")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/create/check-licence-2")
    }
})



router.post('/are-you-sure-edit-answer', function(request, response) {

    var areyousureEdit = request.session.data['editLicence']
    if (areyousureEdit == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/edit/check-licence-edit")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/edit/case-list")
    }
})

router.post('/standard-curfew-edit-3-answer', function(request, response) {

    var standard = request.session.data['standardCurfew']
    if (standard == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/edit/check-licence-edit")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/edit/same-each-day")
    }
})

router.post('/same-each-day-edit-3-answer', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect("/mvp2/probation-practitioner/pre-release/edit/enter-curfew-same")
    } else {
        response.redirect("/mvp2/probation-practitioner/pre-release/edit/enter-curfew-diff")
    }
})



// Vary routing

router.post('/are-you-sure-vary-answer', function(request, response) {

    var vary = request.session.data['varyLicence']
    if (vary == "yes"){
        response.redirect("/mvp2/probation-practitioner/post-release/discuss-spo")
    } else {
        response.redirect("/mvp2/probation-practitioner/post-release/case-list-view")
    }
})



router.post('/address-type-answer', function(request, response) {

    var addType = request.session.data['addressType']
    if (addType == "res"){
        response.redirect("/mvp2/probation-practitioner/post-release/address-checks")
    } else {
        response.redirect("/mvp2/probation-practitioner/post-release/enter-new-address")
    }
})

router.post('/standard-curfew-vary-answer', function(request, response) {

    var standard = request.session.data['standardCurfew']
    if (standard == "yes"){
        response.redirect("/mvp2/probation-practitioner/post-release/vary-licence-details")
    } else {
        response.redirect("/mvp2/probation-practitioner/post-release/same-each-day")
    }
})



router.post('/same-each-day-vary-answer', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect("/mvp2/probation-practitioner/post-release/enter-curfew-same")
    } else {
        response.redirect("/mvp2/probation-practitioner/post-release/enter-curfew-diff")
    }
})


router.post('/address-checks-answer-2', function(request, response) {

    var addCheck2 = request.session.data['addressChecks']
    if (addCheck2 == "no"){
        response.redirect("/mvp2/probation-practitioner/post-release/interrupt-card")
    } else {
        response.redirect("/mvp2/probation-practitioner/post-release/enter-new-address")
    }
})












// MVP2 - Feb 2025 testing

// Flow 1


router.post('/are-you-sure-answer3', function(request, response) {

    var areyousure = request.session.data['createLicence']
    if (areyousure == "yes"){
        response.redirect("/mvp2/user-research/feb-25/flow-1/create/who-with")
    } else {
        response.redirect("../../../../_common/not-testing")
    }
})

router.post('/standard-curfew-answer2', function(request, response) {

    var standard = request.session.data['standardCurfew']
    if (standard == "yes"){
        response.redirect("/mvp2/user-research/feb-25/flow-1/create/additional-conditions")
    } else {
        response.redirect("/mvp2/user-research/feb-25/flow-1/create/same-each-day")
    }
})

router.post('/same-each-day-answer2', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect("/mvp2/user-research/feb-25/flow-1/create/enter-curfew-same")
    } else {
        response.redirect("/mvp2/user-research/feb-25/flow-1/create/enter-curfew-diff")
    }
})

router.post('/additional-conditions-answer3', function(request, response) {

    var addConditions = request.session.data['additionalConditions']
    if (addConditions == "yes"){
        response.redirect("/mvp2/user-research/feb-25/flow-1/create/enter-additional-conditions")
    } else {
        response.redirect("/mvp2/user-research/feb-25/flow-1/create/bespoke-conditions")
    }
})

router.post('/bespoke-conditions-answer3', function(request, response) {

    var bespConditions = request.session.data['bespokeConditions']
    if (bespConditions == "yes"){
        response.redirect("/mvp2/user-research/feb-25/flow-1/create/create-bespoke-condition")
    } else {
        response.redirect("/mvp2/user-research/feb-25/flow-1/create/check-licence")
    }
})

router.post('/are-you-sure-edit-answer2', function(request, response) {

    var areyousureEdit = request.session.data['editLicence']
    if (areyousureEdit == "yes"){
        response.redirect("/mvp2/user-research/feb-25/flow-1/edit/check-licence-edit")
    } else {
        response.redirect("/mvp2/user-research/feb-25/flow-1/edit/case-list")
    }
})


router.post('/same-each-day-edit-answer2', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect("/mvp2/user-research/feb-25/flow-1/edit/enter-curfew-same")
    } else {
        response.redirect("/mvp2/user-research/feb-25/flow-1/edit/enter-curfew-diff")
    }
})

router.post('/standard-curfew-edit-answer2', function(request, response) {

    var standard = request.session.data['standardCurfew']
    if (standard == "yes"){
        response.redirect("/mvp2/user-research/feb-25/flow-1/edit/check-licence-edit")
    } else {
        response.redirect("/mvp2/user-research/feb-25/flow-1/edit/same-each-day")
    }
})



// Flow 2 


router.post('/are-you-sure-vary-answer2', function(request, response) {

    var vary = request.session.data['varyLicence']
    if (vary == "yes"){
        response.redirect("/mvp2/user-research/feb-25/flow-2/discuss-spo")
    } else {
        response.redirect("/mvp2/user-research/feb-25/flow-2/case-list-view")
    }
})



router.post('/standard-curfew-vary-answer2', function(request, response) {

    var standard = request.session.data['standardCurfew']
    if (standard == "yes"){
        response.redirect("/mvp2/user-research/feb-25/flow-2/vary-licence-details")
    } else {
        response.redirect("/mvp2/user-research/feb-25/flow-2/same-each-day")
    }
})



router.post('/same-each-day-vary-answer2', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect("/mvp2/user-research/feb-25/flow-2/enter-curfew-same")
    } else {
        response.redirect("/mvp2/user-research/feb-25/flow-2/enter-curfew-diff")
    }
})


// Flow 3 

router.post('/are-you-sure-vary-answer3', function(request, response) {

    var vary = request.session.data['varyLicence']
    if (vary == "yes"){
        response.redirect("/mvp2/user-research/feb-25/flow-3/discuss-spo")
    } else {
        response.redirect("/mvp2/user-research/feb-25/flow-3/case-list-view")
    }
})


router.post('/address-type-answer2', function(request, response) {

    var addType = request.session.data['addressType']
    if (addType == "res"){
        response.redirect("/mvp2/user-research/feb-25/flow-3/address-checks")
    } else {
        response.redirect("/mvp2/user-research/feb-25/flow-3/enter-new-address")
    }
})




// MVP2 - March 2025 testing

// Flow 1


router.post('/are-you-sure-answer4', function(request, response) {

    var areyousure = request.session.data['createLicence']
    if (areyousure == "yes"){
        response.redirect("/mvp2/user-research/mar-19/flow-1/create/who-with")
    } else {
        response.redirect("../../../../_common/not-testing")
    }
})

router.post('/standard-curfew-answer3', function(request, response) {

    var standard = request.session.data['standardCurfew']
    if (standard == "yes"){
        response.redirect("/mvp2/user-research/mar-19/flow-1/create/additional-conditions")
    } else {
        response.redirect("/mvp2/user-research/mar-19/flow-1/create/same-each-day")
    }
})

router.post('/same-each-day-answer3', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect("/mvp2/user-research/mar-19/flow-1/create/enter-curfew-same")
    } else {
        response.redirect("/mvp2/user-research/mar-19/flow-1/create/enter-curfew-diff")
    }
})

router.post('/additional-conditions-answer4', function(request, response) {

    var addConditions = request.session.data['additionalConditions']
    if (addConditions == "yes"){
        response.redirect("/mvp2/user-research/mar-19/flow-1/create/enter-additional-conditions")
    } else {
        response.redirect("/mvp2/user-research/mar-19/flow-1/create/bespoke-conditions")
    }
})

router.post('/bespoke-conditions-answer4', function(request, response) {

    var bespConditions = request.session.data['bespokeConditions']
    if (bespConditions == "yes"){
        response.redirect("/mvp2/user-research/mar-19/flow-1/create/create-bespoke-condition")
    } else {
        response.redirect("/mvp2/user-research/mar-19/flow-1/create/check-licence")
    }
})


// Flow 2

router.post('/are-you-sure-vary-answer4', function(request, response) {

    var vary = request.session.data['varyLicence']
    if (vary == "yes"){
        response.redirect("/mvp2/user-research/mar-19/flow-2/discuss-spo")
    } else {
        response.redirect("/mvp2/user-research/mar-19/flow-2/case-list-view")
    }
})


router.post('/standard-curfew-vary-answer3', function(request, response) {

    var standard = request.session.data['standardCurfew']
    if (standard == "yes"){
        response.redirect("/mvp2/user-research/mar-19/flow-2/vary-licence-details")
    } else {
        response.redirect("/mvp2/user-research/mar-19/flow-2/same-each-day")
    }
})



router.post('/same-each-day-vary-answer3', function(request, response) {

    var sameDay = request.session.data['sameEachDay']
    if (sameDay == "yes"){
        response.redirect("/mvp2/user-research/mar-19/flow-2/enter-curfew-same")
    } else {
        response.redirect("/mvp2/user-research/mar-19/flow-2/enter-curfew-diff")
    }
})


// Flow 3


router.post('/are-you-sure-vary-answer5', function(request, response) {

    var vary = request.session.data['varyLicence']
    if (vary == "yes"){
        response.redirect("/mvp2/user-research/mar-19/flow-3/discuss-spo")
    } else {
        response.redirect("/mvp2/user-research/mar-19/flow-3/case-list-view")
    }
})

router.post('/address-type-answer3', function(request, response) {

    var addType = request.session.data['addressType']
    if (addType == "res"){
        response.redirect("/mvp2/user-research/mar-19/flow-3/address-checks")
    } else {
        response.redirect("/mvp2/user-research/mar-19/flow-3/enter-new-address")
    }
})

router.post('/address-checks-answer', function(request, response) {

    var addCheck = request.session.data['addressChecks']
    if (addCheck == "no"){
        response.redirect("/mvp2/user-research/mar-19/flow-3/address-checks-end")
    } else {
        response.redirect("/mvp2/user-research/mar-19/flow-3/enter-new-address")
    }
})


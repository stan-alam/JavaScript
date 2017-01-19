## A Testing Solution


**Despondencies may be mitigated through complete/proper test-coverage** .

**Visual Regression** is not testing a Javascript function, but rather we're capturing the visual appearance of an approved design system and validating that we have not deviated from that system. Capturing these **Visual Regressions** before they are committed is the key to maintaining a sustainable design system.

**Visual Regression** allows to make visual comparisons between the correct ( baseline ) versions of our site and versions in development or just about to be deployed ( new ). The process is nothing more than taking a picture of the baseline and comparing it to the new, looking for differences in pixels.

         The baseline images either committed to the repository, or marked approved in some testing database
         this allows for record keeping of sign off, agreed upon pixels that make up a particular feature.
         Before any lines of code is commited back to the master branch, visual regression testing gives a
         method to test every feature on the site and make sure that nothing unexpected has visibly changed.
         With a signed off baseline test can be run confidently.
'use strict';
angular.module('playerApp.messages', [])
  .constant('messages', {"en":{"stmsg":{"m0001":"We are fetching enrolled courses...","m0002":"We are fetching data...","m0003":"We are fetching course details...","m0004":"Enrolling....","m0005":"We are fetching data","m0006":"No results found","m0007":"Please search for something else.","m0008":"no-results","m0009":"Unable to play, please try again or close.","m0010":"Zip file doesn't have required files.","m0011":"We are fetching draft content...","m0012":"You don't have any draft content...","m0013":"We are creating lesson...","m0014":"We are creating book...","m0015":"We are creating course...","m0016":"We are creating collection...","m0017":"We are uploading content...","m0018":"We are fetching review content...","m0019":"You don't have any content in review...","m0020":"You don't have any batches...","m0021":"We are fetching published content...","m0022":"You don't have any published content...","m0023":"We are fetching uploaded content...","m0024":"You don't have any uploaded content...","m0025":"We are fetching content detail...","m0026":"We are updating icon...","m0027":"We are updating the content detail...","m0028":"We are sending content for review...","m0029":"We are publishing the content...","m0030":"We are rejecting the content...","m0031":"Invalid youtube url, Please check...","m0032":"We are fetching up for review content...","m0033":"You don't have any content for review...","m0034":"We are deleting the content...","m0035":"content not deleted","m0036":"Please select content to","m0037":"Please select action...","m0038":"We are fetching flagged content...","m0039":"You don't have any flagged content...","m0040":"We are accepting the flag...","m0041":"We are discarding the flag...","m0042":"Title is missing","m0043":"Description is missing","m0044":"Lesson type is missing","m0045":"Audience is missing","m0046":"Subject is missing","m0047":"Grade is missing","m0048":"Medium is missing","m0049":"We are loading concept details...","m0050":"We are creating lesson plan...","m0051":"We are fetching enrolled courses...","m0052":"We are fetching data...","m0053":"We are fetching content...","m0054":"We are creating note...","m0055":"Fetching note detail, please wait...","m0056":"We are removing note...","m0057":"We are fetching notes...","m0058":"You don't have any note, please create note...","m0059":"We are updating note...","m0060":"Strengthen your profile","m0061":"Add more details now","m0062":"Enter valid degree","m0063":"Enter Address line 1","m0064":"Enter City","m0065":"Enter valid pin code","m0066":"Enter First name","m0067":"Please provide a valid phone number","m0068":"Enter valid Email ID","m0069":"Select language","m0070":"Enter Instituition name","m0071":"Enter Degree details","m0072":"Enter Occupation / Work Title","m0073":"Enter Organization","m0074":"Loading profile ...","m0075":"Updating profile ...","m0076":"Fetching data for you....","m0077":"We are submitting your request...","m0078":"Uploading Organizations","m0079":"Uploading users","m0080":"Please upload file in csv formate only","m0081":"No batches found","m0082":"We are fetching limited published content...","m0083":"You don't have any limited publish content...","m0084":"Requesting sign up , please wait....","m0085":"User name already exist, sign up with different username...","m0086":"Email already exist, sign up with different email...","m0087":"Please enter a valid user name, must have minimum 5 character","m0088":"Please enter a valid password","m0089":"Please enter a valid email","m0090":"Please select languages","m0091":"Please enter a valid phone number","m0092":"Please enter a valid first name","m0093":"Year of Passing is not formatted correctly","m0094":"Enter valid percentage","m0095":"Your request has been received successfully. Your request id is {acknowledgementId},You can use this id to track your request status. File will be sent to your registered email address later. Please, do check your emails regularly."},"fmsg":{"m0001":"Fetching enrolled courses failed, please try again later...","m0002":"Fetching other courses failed, please try again later...","m0003":"Unable to get course schedule details.","m0004":"Fetching data failed, please try again later...","m0005":"Fetching profile failed, please try again later...","m0006":"Fetching draft content failed, please try again later...","m0007":"Creating lesson failed. Please login again to create lesson.","m0008":"Creating book failed. Please login again to create book.","m0009":"Creating course failed. Please login again to create course.","m0010":"Creating collection failed. Please login again to create collection.","m0011":"Uploading content failed. Please login again to create collection.","m0012":"Fetching review content failed, please try again later...","m0013":"Fetching published content failed, please try again later...","m0014":"Fetching uploaded content failed, please try again later...","m0015":"Fetching content detail failed, please try again later...","m0016":"Updating icon failed, please try again later...","m0017":"Updating content detail failed, please try again later...","m0018":"Sending content for review failed, please try again later...","m0019":"Publishing content failed, please try again later...","m0020":"Rejecting content failed, please try again later...","m0021":"Fetching up for review content failed, please try again later...","m0022":"Deleting content failed, please try again later...","m0023":"Fetching flagged content failed, please try again later...","m0024":"Accepting flag failed, please try again later...","m0025":"Discarding flag failed, please try again later...","m0026":"Creating lesson plan failed. Please login again to create lesson plan.","m0027":"Fetching enrolled courses failed, please try again later...","m0028":"Fetching other courses failed, please try again later...","m0029":"Fetching content failed, please try again later...","m0030":"Creating note is failed, please try again later...","m0031":"Fetching note detail is failed, please try again later...","m0032":"Removing note is failed, please try again later...","m0033":"Fetching note is failed, please try again later...","m0034":"Updating note is failed, please try again later...","m0035":"Profile image  update failed. Please try again later...","m0036":"Description update failed. Please try again later..","m0037":"Education update failed. Please try again later...","m0038":"Experience update failed. Please try again later...","m0039":"Basic information update failed. Please try again later...","m0040":"Address update failed. Please try again later...","m0041":"Education delete failed. Please try again later...","m0042":"Experience delete failed. Please try again later...","m0043":"Address delete failed. Please try again later...","m0044":"Adding new education failed. Please try again later...","m0045":"Adding new experience failed. Please try again later...","m0046":"Adding new address failed. Please try again later...","m0047":"Fetching profile failed, please try again later...","m0048":"Updating user profile failed,please try again later...","m0049":"Unable to load data.","m0050":"Submitting request is failed, please try again later...","m0051":"Something went wrong, please try again later...","m0052":"Creating batch is failed, please try again later...","m0053":"Adding users to batch is failed, please try again later...","m0054":"Fetching batch detail is failed, please try again later...","m0055":"Updating batch is failed, please try again later...","m0056":"Fetching users list failed, please try again later...","m0057":"Fetching tenant details failed, please try again later...","m0058":"Adding a new org type failed, please try again later","m0059":"Fetching org type failed, please try again later","m0060":"Org  type update failed, please try again later","m0061":"Description update failed. Please try again later...","m0062":"Adding new skill failed. Please try again later...","m0063":"Skill endorsement failed, please try again later...","m0064":"Fetching limited published content failed, please try again later...","m0065":"Invalid content access","m0066":"Content is not ready to play","m0067":"Course is not ready to play","m0068":"Profile update failed, please try again later ...","m0069":"Fetching announcement types failed, please try again later...","m0070":"Fetching announcement outbox list failed, please try again later...","m0071":"Deleting announcement failed, please try again...","m0072":"Fetching announcement inbox list failed, please try again later...","m0073":"Unable to read announcement, please try again later...","m0074":"Fetching announcement details failed, please try again later..."},"smsg":{"m0001":"success","m0002":"Saved successfully...","m0003":"Content sent for review...","m0004":"Content published successfully...","m0005":"Content rejected successfully...","m0006":"Content deleted successfully...","m0007":"Flag accepted successfully...","m0008":"Flag discarded successfully...","m0009":"Note created successfully...","m0010":"Note detail fetched successfully...","m0011":"Note deleted successfully...","m0012":"Note detail fetched successfully...","m0013":"Note updated successfully...","m0014":"Education deleted successfully","m0015":"Experience deleted successfully","m0016":"Address deleted successfully","m0017":"Profile successfully updated","m0018":"Profile Image updated successfully","m0019":"Description updated successfully","m0020":"Education updated successfully","m0021":"Experience updated successfully","m0022":"Additional information  updated successfully","m0023":"Address updated successfully","m0024":"New education added successfully","m0025":"New experience added successfully","m0026":"New address added successfully","m0027":"Request submitted successfully...","m0028":"Roles updated successfully","m0029":"User deleted successfully","m0030":"Users uploaded successfully","m0031":"Organizations uploaded successfully","m0032":"Status fetched successfully","m0033":"Batch created successfully...","m0034":"Batch updated successfully...","m0035":"Org type added successfully","m0036":"Course Enrolled for this batch successfully...","m0037":"updated successfully","m0038":"New skill added successfully","m0039":"Sign up successfully, Please login...","m0040":"Profile field visibility updated successfully","moo41":"Announcement cancelled successfully..."},"emsg":{"m0001":"Cannot enroll now.Try again later","m0002":"error","m0003":"You should enter Provider and External Id Or Organization Id","m0004":"Cannot preview now.Try again later","m0005":"Something went wrong, please try in some time....","m0006":"Please select recipient(s)"},"imsg":{"m0001":"This course is flagged as inappropriate and is currently under review.","m0002":"info","m0003":"warning","m0004":"You are not authorized to access this resource","m0005":"Please upload a valid image file. Supported file types: jpeg, jpg, png. Max size: 4MB.","m0006":"is too large, maximum file size is","m0007":"File accepted only pdf (Max size 25mb).","m0008":"File accepted only mp4 (Max size 25mb).","m0009":"File accepted only html zip (Max size 25mb).","m0010":"File accepted only epub (Max size 25mb).","m0011":"File accepted only h5p (Max size 25mb).","m0012":"is not valid pdf file.","m0013":"is not valid mp4 file.","m0014":"is not valid zip file.","m0015":"is not valid epub file.","m0016":"is not valid h5p file.","m0017":"Profile Completeness.","m0018":"Content not found.","m0019":"Course not found","m0020":"location is removed sucessfully.","m0021":"Please select recipient(s)"}},"ta":{"stmsg":{"m0001":"We are fetching enrolled courses...","m0002":"We are fetching data...","m0003":"We are fetching course details...","m0004":"Enrolling....","m0005":"We are fetching data","m0006":"No results found","m0007":"Please search for something else.","m0008":"no-results","m0009":"Unable to play, please try again or close.","m0010":"Zip file doesn't have required files.","m0011":"We are fetching draft content...","m0012":"You don't have any draft content...","m0013":"We are creating lesson...","m0014":"We are creating book...","m0015":"We are creating course...","m0016":"We are creating collection...","m0017":"We are uploading content...","m0018":"We are fetching review content...","m0019":"You don't have any content in review...","m0020":"You don't have any batches...","m0021":"We are fetching published content...","m0022":"You don't have any published content...","m0023":"We are fetching uploaded content...","m0024":"You don't have any uploaded content...","m0025":"We are fetching content detail...","m0026":"We are updating icon...","m0027":"We are updating the content detail...","m0028":"We are sending content for review...","m0029":"We are publishing the content...","m0030":"We are rejecting the content...","m0031":"Invalid youtube url, Please check...","m0032":"We are fetching up for review content...","m0033":"You don't have any content for review...","m0034":"We are deleting the content...","m0035":"content not deleted","m0036":"Please select content to","m0037":"Please select action...","m0038":"We are fetching flagged content...","m0039":"You don't have any flagged content...","m0040":"We are accepting the flag...","m0041":"We are discarding the flag...","m0042":"Title is missing","m0043":"Description is missing","m0044":"Lesson type is missing","m0045":"Audience is missing","m0046":"Subject is missing","m0047":"Grade is missing","m0048":"Medium is missing","m0049":"We are loading concept details...","m0050":"We are creating lesson plan...","m0051":"We are fetching enrolled courses...","m0052":"We are fetching data...","m0053":"We are fetching content...","m0054":"We are creating note...","m0055":"Fetching note detail, please wait...","m0056":"We are removing note...","m0057":"We are fetching notes...","m0058":"You don't have any note, please create note...","m0059":"We are updating note...","m0060":"Strengthen your profile","m0061":"Add more details now","m0062":"Select address type","m0063":"Enter Address line 1","m0064":"Enter City","m0065":"Enter  valid pin code","m0066":"Enter First name","m0067":"Enter valid Mobile number","m0068":"Enter valid Email ID","m0069":"Select language","m0070":"Enter Instituition name","m0071":"Enter Degree details","m0072":"Enter Occupation / Work Title","m0073":"Enter Organization","m0074":"Loading profile ...","m0075":"Updating profile ...","m0076":"Fetching data for you....","m0077":"We are submitting your request...","m0078":"Uploading Organizations","m0079":"Uploading users","m0080":"Please upload file in csv formate only","m0081":"No batches found","m0082":"We are fetching limited published content...","m0083":"You don't have any limited publish content...","m0084":"Requesting sign up , please wait....","m0085":"User name already exist, sign up with different username...","m0086":"Email already exist, sign up with different email...","m0087":"Please enter a valid user name, must have minimum 5 character","m0088":"Please enter a valid password","m0089":"Please enter a valid email","m0090":"Please select languages","m0091":"Please enter a valid phone number","m0092":"Please enter a valid first name","m0093":"Year of Passing is not formatted correctly","m0094":"Enter valid percentage","m0095":"Your request has been received successfully. Your request id is {acknowledgementId},You can use this id to track your request status. File will be sent to your registered email address later. Please, do check your emails regularly."},"fmsg":{"m0001":"Fetching enrolled courses failed, please try again later...","m0002":"Fetching other courses failed, please try again later...","m0003":"Unable to get course schedule details.","m0004":"Fetching data failed, please try again later...","m0005":"சுயவிவரத்தை பெறுவது தோல்வியடைந்தது, பிறகு மீண்டும் முயற்சிக்கவும் ...","m0006":"Fetching draft content failed, please try again later...","m0007":"Creating lesson failed. Please login again to create lesson.","m0008":"Creating book failed. Please login again to create book.","m0009":"Creating course failed. Please login again to create course.","m0010":"Creating collection failed. Please login again to create collection.","m0011":"Uploading content failed. Please login again to create collection.","m0012":"Fetching review content failed, please try again later...","m0013":"Fetching published content failed, please try again later...","m0014":"Fetching uploaded content failed, please try again later...","m0015":"Fetching content detail failed, please try again later...","m0016":"Updating icon failed, please try again later...","m0017":"Updating content detail failed, please try again later...","m0018":"Sending content for review failed, please try again later...","m0019":"Publishing content failed, please try again later...","m0020":"Rejecting content failed, please try again later...","m0021":"Fetching up for review content failed, please try again later...","m0022":"Deleting content failed, please try again later...","m0023":"Fetching flagged content failed, please try again later...","m0024":"Accepting flag failed, please try again later...","m0025":"Discarding flag failed, please try again later...","m0026":"Creating lesson plan failed. Please login again to create lesson plan.","m0027":"Fetching enrolled courses failed, please try again later...","m0028":"Fetching other courses failed, please try again later...","m0029":"Fetching content failed, please try again later...","m0030":"Creating note is failed, please try again later...","m0031":"Fetching note detail is failed, please try again later...","m0032":"Removing note is failed, please try again later...","m0033":"Fetching note is failed, please try again later...","m0034":"Updating note is failed, please try again later...","m0035":"Profile image  update failed. Please try again later...","m0036":"Description update failed. Please try again later..","m0037":"Education update failed. Please try again later...","m0038":"Experience update failed. Please try again later...","m0039":"Basic information update failed. Please try again later...","m0040":"Address update failed. Please try again later...","m0041":"Education delete failed. Please try again later...","m0042":"Experience delete failed. Please try again later...","m0043":"Address delete failed. Please try again later...","m0044":"Adding new education failed. Please try again later...","m0045":"Adding new experience failed. Please try again later...","m0046":"Adding new address failed. Please try again later...","m0047":"சுயவிவரத்தை பெறுவது தோல்வியடைந்தது, பிறகு மீண்டும் முயற்சிக்கவும் ...","m0048":"Updating user profile failed,please try again later...","m0049":"Unable to load data.","m0050":"Submitting request is failed, please try again later...","m0051":"Something went wrong, please try again later...","m0052":"Creating batch is failed, please try again later...","m0053":"Adding users to batch is failed, please try again later...","m0054":"Fetching batch detail is failed, please try again later...","m0055":"Updating batch is failed, please try again later...","m0056":"Fetching users list failed, please try again later...","m0057":"Fetching tenant details failed, please try again later...","m0058":"Adding a new org type failed, please try again later","m0059":"Fetching org type failed, please try again later","m0060":"Org  type update failed, please try again later","m0061":"Description update failed. Please try again later...","m0062":"Adding new skill failed. Please try again later...","m0063":"Skill endorsement failed, please try again later...","m0064":"Fetching limited published content failed, please try again later...","m0065":"Invalid content access","m0066":"Content is not ready to play","m0067":"Course is not ready to play","m0068":"Profile update failed, please try again later ...","m0069":"Fetching announcement types failed, please try again later...","m0070":"Fetching announcement outbox list failed, please try again later...","m0071":"Deleting announcement failed, please try again...","m0072":"Fetching announcement inbox list failed, please try again later...","m0073":"Unable to read announcement, please try again later...","m0074":"Fetching announcement details failed, please try again later..."},"smsg":{"m0001":"success","m0002":"Saved successfully...","m0003":"Content sent for review...","m0004":"Content published successfully...","m0005":"Content rejected successfully...","m0006":"Content deleted successfully...","m0007":"Flag accepted successfully...","m0008":"Flag discarded successfully...","m0009":"Note created successfully...","m0010":"Note detail fetched successfully...","m0011":"Note deleted successfully...","m0012":"Note detail fetched successfully...","m0013":"Note updated successfully...","m0014":"Education deleted successfully","m0015":"Experience deleted successfully","m0016":"Address deleted successfully","m0017":"Profile successfully updated","m0018":"Profile Image updated successfully","m0019":"Description updated successfully","m0020":"Education updated successfully","m0021":"Experience updated successfully","m0022":"Additional information  updated successfully","m0023":"Address updated successfully","m0024":"New education added successfully","m0025":"New experience added successfully","m0026":"New address added successfully","m0027":"Request submitted successfully...","m0028":"Roles updated successfully","m0029":"User deleted successfully","m0030":"Users uploaded successfully","m0031":"Organizations uploaded successfully","m0032":"Status fetched successfully","m0033":"Batch created successfully...","m0034":"Batch updated successfully...","m0035":"Org type added successfully","m0036":"Course Enrolled for this batch successfully...","m0037":"updated successfully","m0038":"New skill added successfully","m0039":"Sign up successfully, Please login...","m0040":"Profile field visibility updated successfully","moo41":"Announcement cancelled successfully..."},"emsg":{"m0001":"Cannot enroll now.Try again later","m0002":"error","m0003":"You should enter Provider and External Id Or Organization Id","m0004":"\"Cannot preview now.Try again later\"","m0005":"Something went wrong, please try in some time....","m0006":"Please select recipient(s)"},"imsg":{"m0001":"This course is flagged as inappropriate and is currently under review.","m0002":"info","m0003":"warning","m0004":"You are not authorized to access this resource","m0005":"Please upload a valid image file. Supported file types: jpeg, jpg, png. Max size: 4MB.","m0006":"is too large, maximum file size is","m0007":"File accepted only pdf (Max size 25mb).","m0008":"File accepted only mp4 (Max size 25mb).","m0009":"File accepted only html zip (Max size 25mb).","m0010":"File accepted only epub (Max size 25mb).","m0011":"File accepted only h5p (Max size 25mb).","m0012":"is not valid pdf file.","m0013":"is not valid mp4 file.","m0014":"is not valid zip file.","m0015":"is not valid epub file.","m0016":"is not valid h5p file.","m0017":"Profile Completeness","m0018":"Content not found.","m0019":"Course not found","m0020":"location is removed sucessfully.","m0021":"Please select recipient(s)"}},"te":{"stmsg":{"m0001":"We are fetching enrolled courses...","m0002":"We are fetching data...","m0003":"We are fetching course details...","m0004":"Enrolling....","m0005":"We are fetching data","m0006":"No results found","m0007":"Please search for something else.","m0008":"no-results","m0009":"Unable to play, please try again or close.","m0010":"Zip file doesn't have required files.","m0011":"We are fetching draft content...","m0012":"You don't have any draft content...","m0013":"We are creating lesson...","m0014":"We are creating book...","m0015":"We are creating course...","m0016":"We are creating collection...","m0017":"We are uploading content...","m0018":"We are fetching review content...","m0019":"You don't have any content in review...","m0020":"You don't have any batches...","m0021":"We are fetching published content...","m0022":"You don't have any published content...","m0023":"We are fetching uploaded content...","m0024":"You don't have any uploaded content...","m0025":"We are fetching content detail...","m0026":"We are updating icon...","m0027":"We are updating the content detail...","m0028":"We are sending content for review...","m0029":"We are publishing the content...","m0030":"We are rejecting the content...","m0031":"Invalid youtube url, Please check...","m0032":"We are fetching up for review content...","m0033":"You don't have any content for review...","m0034":"We are deleting the content...","m0035":"content not deleted","m0036":"Please select content to","m0037":"Please select action...","m0038":"We are fetching flagged content...","m0039":"You don't have any flagged content...","m0040":"We are accepting the flag...","m0041":"We are discarding the flag...","m0042":"Title is missing","m0043":"Description is missing","m0044":"Lesson type is missing","m0045":"Audience is missing","m0046":"Subject is missing","m0047":"Grade is missing","m0048":"Medium is missing","m0049":"We are loading concept details...","m0050":"We are creating lesson plan...","m0051":"We are fetching enrolled courses...","m0052":"We are fetching data...","m0053":"We are fetching content...","m0054":"We are creating note...","m0055":"Fetching note detail, please wait...","m0056":"We are removing note...","m0057":"We are fetching notes...","m0058":"You don't have any note, please create note...","m0059":"We are updating note...","m0060":"Strengthen your profile","m0061":"Add more details now","m0062":"Select address type","m0063":"Enter Address line 1","m0064":"Enter City","m0065":"Enter  valid pin code","m0066":"Enter First name","m0067":"Enter valid Mobile number","m0068":"Enter valid Email ID","m0069":"Select language","m0070":"Enter Instituition name","m0071":"Enter Degree details","m0072":"Enter Occupation / Work Title","m0073":"Enter Organization","m0074":"Loading profile ...","m0075":"Updating profile ...","m0076":"Fetching data for you....","m0077":"We are submitting your request...","m0078":"Uploading Organizations","m0079":"Uploading users","m0080":"Please upload file in csv formate only","m0081":"No batches found","m0082":"We are fetching limited published content...","m0083":"You don't have any limited publish content...","m0084":"Requesting sign up , please wait....","m0085":"User name already exist, sign up with different username...","m0086":"Email already exist, sign up with different email...","m0087":"Please enter a valid user name, must have minimum 5 character","m0088":"Please enter a valid password","m0089":"Please enter a valid email","m0090":"Please select languages","m0091":"Please enter a valid phone number","m0092":"Please enter a valid first name","m0093":"Year of Passing is not formatted correctly","m0094":"Enter valid percentage","m0095":"Your request has been received successfully. Your request id is {acknowledgementId},You can use this id to track your request status. File will be sent to your registered email address later. Please, do check your emails regularly."},"fmsg":{"m0001":"Fetching enrolled courses failed, please try again later...","m0002":"Fetching other courses failed, please try again later...","m0003":"Unable to get course schedule details.","m0004":"Fetching data failed, please try again later...","m0005":"Fetching profile failed, please try again later...","m0006":"Fetching draft content failed, please try again later...","m0007":"Creating lesson failed. Please login again to create lesson.","m0008":"Creating book failed. Please login again to create book.","m0009":"Creating course failed. Please login again to create course.","m0010":"Creating collection failed. Please login again to create collection.","m0011":"Uploading content failed. Please login again to create collection.","m0012":"Fetching review content failed, please try again later...","m0013":"Fetching published content failed, please try again later...","m0014":"Fetching uploaded content failed, please try again later...","m0015":"Fetching content detail failed, please try again later...","m0016":"Updating icon failed, please try again later...","m0017":"Updating content detail failed, please try again later...","m0018":"Sending content for review failed, please try again later...","m0019":"Publishing content failed, please try again later...","m0020":"Rejecting content failed, please try again later...","m0021":"Fetching up for review content failed, please try again later...","m0022":"Deleting content failed, please try again later...","m0023":"Fetching flagged content failed, please try again later...","m0024":"Accepting flag failed, please try again later...","m0025":"Discarding flag failed, please try again later...","m0026":"Creating lesson plan failed. Please login again to create lesson plan.","m0027":"Fetching enrolled courses failed, please try again later...","m0028":"Fetching other courses failed, please try again later...","m0029":"Fetching content failed, please try again later...","m0030":"Creating note is failed, please try again later...","m0031":"Fetching note detail is failed, please try again later...","m0032":"Removing note is failed, please try again later...","m0033":"Fetching note is failed, please try again later...","m0034":"Updating note is failed, please try again later...","m0035":"Profile image  update failed. Please try again later...","m0036":"Description update failed. Please try again later..","m0037":"Education update failed. Please try again later...","m0038":"Experience update failed. Please try again later...","m0039":"Basic information update failed. Please try again later...","m0040":"Address update failed. Please try again later...","m0041":"Education delete failed. Please try again later...","m0042":"Experience delete failed. Please try again later...","m0043":"Address delete failed. Please try again later...","m0044":"Adding new education failed. Please try again later...","m0045":"Adding new experience failed. Please try again later...","m0046":"Adding new address failed. Please try again later...","m0047":"Fetching profile failed, please try again later...","m0048":"Updating user profile failed,please try again later...","m0049":"Unable to load data.","m0050":"Submitting request is failed, please try again later...","m0051":"Something went wrong, please try again later...","m0052":"Creating batch is failed, please try again later...","m0053":"Adding users to batch is failed, please try again later...","m0054":"Fetching batch detail is failed, please try again later...","m0055":"Updating batch is failed, please try again later...","m0056":"Fetching users list failed, please try again later...","m0057":"Fetching tenant details failed, please try again later...","m0058":"Adding a new org type failed, please try again later","m0059":"Fetching org type failed, please try again later","m0060":"Org  type update failed, please try again later","m0061":"Description update failed. Please try again later...","m0062":"Adding new skill failed. Please try again later...","m0063":"Skill endorsement failed, please try again later...","m0064":"Fetching limited published content failed, please try again later...","m0065":"Invalid content access","m0066":"Content is not ready to play","m0067":"Course is not ready to play","m0068":"Profile update failed, please try again later ...","m0069":"Fetching announcement types failed, please try again later...","m0070":"Fetching announcement outbox list failed, please try again later...","m0071":"Deleting announcement failed, please try again...","m0072":"Fetching announcement inbox list failed, please try again later...","m0073":"Unable to read announcement, please try again later...","m0074":"Fetching announcement details failed, please try again later..."},"smsg":{"m0001":"success","m0002":"Saved successfully...","m0003":"Content sent for review...","m0004":"Content published successfully...","m0005":"Content rejected successfully...","m0006":"Content deleted successfully...","m0007":"Flag accepted successfully...","m0008":"Flag discarded successfully...","m0009":"Note created successfully...","m0010":"Note detail fetched successfully...","m0011":"Note deleted successfully...","m0012":"Note detail fetched successfully...","m0013":"Note updated successfully...","m0014":"Education deleted successfully","m0015":"Experience deleted successfully","m0016":"Address deleted successfully","m0017":"Profile successfully updated","m0018":"Profile Image updated successfully","m0019":"Description updated successfully","m0020":"Education updated successfully","m0021":"Experience updated successfully","m0022":"Additional information  updated successfully","m0023":"Address updated successfully","m0024":"New education added successfully","m0025":"New experience added successfully","m0026":"New address added successfully","m0027":"Request submitted successfully...","m0028":"Roles updated successfully","m0029":"User deleted successfully","m0030":"Users uploaded successfully","m0031":"Organizations uploaded successfully","m0032":"Status fetched successfully","m0033":"Batch created successfully...","m0034":"Batch updated successfully...","m0035":"Org type added successfully","m0036":"Course Enrolled for this batch successfully...","m0037":"updated successfully","m0038":"New skill added successfully","m0039":"Sign up successfully, Please login...","m0040":"Profile field visibility updated successfully","moo41":"Announcement cancelled successfully..."},"emsg":{"m0001":"Cannot enroll now.Try again later","m0002":"error","m0003":"You should enter Provider and External Id Or Organization Id","m0004":"\"Cannot preview now.Try again later\"","m0005":"Something went wrong, please try in some time....","m0006":"Please select recipient(s)"},"imsg":{"m0001":"This course is flagged as inappropriate and is currently under review.","m0002":"info","m0003":"warning","m0004":"You are not authorized to access this resource","m0005":"Please upload a valid image file. Supported file types: jpeg, jpg, png. Max size: 4MB.","m0006":"is too large, maximum file size is","m0007":"File accepted only pdf (Max size 25mb).","m0008":"File accepted only mp4 (Max size 25mb).","m0009":"File accepted only html zip (Max size 25mb).","m0010":"File accepted only epub (Max size 25mb).","m0011":"File accepted only h5p (Max size 25mb).","m0012":"is not valid pdf file.","m0013":"is not valid mp4 file.","m0014":"is not valid zip file.","m0015":"is not valid epub file.","m0016":"is not valid h5p file.","m0017":"Profile Completeness","m0018":"Content not found.","m0019":"Course not found","m0020":"location is removed sucessfully.","m0021":"Please select recipient(s)"}}});

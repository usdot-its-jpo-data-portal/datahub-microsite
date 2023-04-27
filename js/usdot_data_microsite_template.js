Vue.component('dot-header',{
    template:`<div id="dotTopBanner" style="width: 100%; background: #152350; height: 60px; padding: 5px 0 0 10px">
                <a style="background: none" href="https://transportation.gov">
                    <img src="/data/images/icons/dot_logo2.svg" width=300 height=35 style="margin-left: 25px; margin-top: 8px;"alt="department of transportation logo">
                </a>
                <div id="dotTopLinks" style="line-height: 30px; background: #152350">
                    <a class="headHovers" href="https://www.transportation.gov/mission/about-us" style="font-size: 11px; width: 70px; background: #152350">ABOUT DOT&emsp;&nbsp;|</a>
                    <a class="headHovers" href="https://www.transportation.gov/briefingroom" style="font-size: 11px; width: 80px; background: #152350">&emsp;&nbsp;BRIEFING ROOM&emsp;&nbsp;|</a>
                    <a class="headHovers" href="https://www.transportation.gov/our-activities" style="margin-right: 30px; font-size: 11px; width: 70px; background: #152350">&emsp;&nbsp;OUR ACTIVITIES</a>
                </div>
            </div>`
    
})

Vue.component('navigation-top', {
    template:`<div class="navigation-bar navBarLinks">
                 <a class="headHovers navBarLinks" href="/">ITS JPO SITE</a> <div style="font-size: 15px; padding:3px 7px 3px 7px; display: inline;">|</div>
                 <a class="headHovers navBarLinks" href="/data">HOME</a> <div style="font-size: 15px; padding:3px 5px 7px 7px; display: inline;">|</div>
                 <a class="headHovers navBarLinks" href="/data/about">ABOUT</a> <div style="font-size: 15px; padding:3px 5px 7px 7px; display: inline;">|</div>
                 <a class="headHovers navBarLinks" href="/data/datahub-submission/">DATA SUBMISSION</a>
                 <a class="headHovers navBarLinks" href="https://github.com/usdot-its-jpo-data-portal/datahub-microsite" style="float:right; text-align:right;padding:3px 7px 3px 7px;">VIEW THIS PROJECT ON GITHUB</a>
             </div>`
} )

Vue.component('microsite-footer',{
    data: function(){
        return{
            contact_email:"data.itsjpo@dot.gov"
        }
    },
   created: function(){
        var self = this;
        $.getJSON("template_categories.json", function (json) {
            self.contact_email = json.contact_email;
        });
    },
    template:   `<div><div id="footerInfo" style="padding-top: 20px;">
                    <div style="display:inline; font-size:50px; font-weight:100; text-align:center">
                        <img src="/data/images/icons/dot_logo.webp" width=160 height=30 style="margin-right: 3px;" alt="DOT Logo" /> 
                        |
                        <img src="/data/images/icons/ITS_JPO.webp" width=176 height=27 alt="ITS JPO Logo" /> 
                    </div>
                    <p style="font-weight: bold;">Questions? Contact Us</p>
                    <a id="contactEmail" style="color:white; font-size: 12px;" href="mailto:data.itsjpo@dot.gov">{{ contact_email }}</a>
                </div>
                <div id="footerBox" style="width: 100%; margin-top: 10px;">
                    <div class="footerblack">
                        <a href="https://www.transportation.gov/administrations/research-and-technology/" target="_blank" rel="noopener noreferrer">Office of the Assistant Secretary for Research and Technology (OST-R)</a> • <a href="https://www.transportation.gov/" target="_blank" rel="noopener noreferrer">U.S. Department of Transportation (US DOT)</a>  <br>1200 New Jersey Avenue, SE • Washington, DC 20590 • 800.853.1351
                    </div>
                    
                    <div class="footerblack">
                        <br>
                        <a href="https://www.transportation.gov/web-policies" target="_blank" rel="noopener noreferrer">Web Policies &amp; Notices</a> | 
                        <a href="https://www.transportation.gov/accessibility" target="_blank" rel="noopener noreferrer">Accessibility</a> | 
                        <a href="https://www.transportation.gov/careers" target="_blank" rel="noopener noreferrer">Careers</a> | 
                        <a href="https://www.transportation.gov/foia" target="_blank" rel="noopener noreferrer">FOIA</a> | 
                        <a href="https://www.transportation.gov/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> | 
                        <a href="https://www.transportation.gov/regulations/dot-information-dissemination-quality-guidelines/" target="_blank" rel="noopener noreferrer">Information Quality</a> | 
                        <a href="https://www.civilrights.dot.gov/civil-rights-awareness-enforcement/employment-related/affirmative-employment/no-fear-act" target="_blank" rel="noopener noreferrer">No FEAR Act Data</a> | 
                        <a href="https://www.transportation.gov/ethics" target="_blank" rel="noopener noreferrer">Ethics</a> <br>
                        <a href="https://www.civilrights.dot.gov/" target="_blank" rel="noopener noreferrer">Civil Rights</a> | 
                        <a href="https://www.oig.dot.gov/" target="_blank" rel="noopener noreferrer">Office of Inspector General</a> | 
                        <a href="https://www.oig.dot.gov/Hotline" target="_blank" rel="noopener noreferrer">OIG Hotline</a> | 
                        <a href="https://business.usa.gov/" target="_blank" rel="noopener noreferrer">BusinessUSA</a> | 
                        <a href="https://usa.gov/" target="_blank" rel="noopener noreferrer">USA.gov</a> | 
                        <a href="https://whitehouse.gov/" target="_blank" rel="noopener noreferrer">White House</a>
                    </div>
                    
                    <!-- <div class="footerblacksmall">
                        OST-R's privacy policies and procedures do not necessarily apply to external web sites. We suggest contacting these sites directly for information on
                        their data collection and distribution policies.<br />
                        <br />
                    </div>-->
                </div></div>
                `
})

Vue.component('search-main', {
    data: function(){
        return{
            background_image: '',//Background image for search bar, set in load_json
            search_placeholder: '',//Placeholder text for search bar on home page
            socrata_url: 'https://api.us.socrata.com/api/catalog/v1?q=',//URL for Socrata API
            socrata_domain: 'data.transportation.gov',//Domain of Socrata site to search, set in load_json
            query: sessionStorage.getItem("sentSearchTerm"),
            totalDataCount: 0
        }
    },    
    // Function runs on page load
    created: function () {
        this.datasetCount(); //Sets the total number of datasets available visual
        var self = this;
        $.getJSON("template_categories.json", function (json) {
            self.background_image = json.background_image;
        });
    },
    methods: {
        //===============================================SEARCH PAGE INITIALIZATION FUNCTIONS===============================================
        // Finds the total count of data for search bar placeholder text, would need to be modified if different search domain is used
        datasetCount: function () {
            var self = this;
            self.totalDataCount = this.countNTLDatasets();
            self.totalDataCount += this.countSocrataDatasets();
            self.search_placeholder = self.totalDataCount + " data sets and counting!";
        },
            
        //Sets search term and sends it to search html page
        searchSend: function (search_query) {
            this.query = search_query;
            sessionStorage.setItem("sentSearchTerm", search_query);
            window.location.href = "search.htm";
        },
        
        // Calls NTL API to grab json file containing ITS JPO dataset listings from NTL, called on webpage load, function operates sync on load to prevent timing issue
        countNTLDatasets: function () {
            $.ajaxSetup({
                async: false
            });
            var itemCountNTL;
            var NTL_url = "https://rosap.ntl.bts.gov/fedora/export/view/collection/";
            var NTL_collection = "dot:239"; //Limit results to specific collection
            var NTL_datelimit = "?from=2018-01-01T00:00:00Z"; //Limit results to before, after or between a specific date range
            var NTL_rowslimit = "&rows=9999"; //Set number of rows to have returned (NTL default is 100), max 9999
            var counter = 0;

            $.getJSON(NTL_url + NTL_collection + NTL_datelimit + NTL_rowslimit, function (json) {
            // $.getJSON("json/NTL.json", function(json) { // TODO: Replace with above line when pushing to production
                for (itemCountNTL = 0; itemCountNTL < json.response.docs.length; itemCountNTL++) {
                    //Filter results to pull only dataset types
                    if (json.response.docs[itemCountNTL]["mods.sm_resource_type"][0] == "Dataset") {

                        // Checks if access level is Public or Restricted
                        var tempAccessLevel = json.response.docs[itemCountNTL]["rdf.isOpenAccess"][0];
                        if((tempAccessLevel == "") || tempAccessLevel == "true") counter++;
                    }
                }
            });

            return counter;
        },

        countSocrataDatasets: function() {
            var self = this;
            var counter = 0;
            $.get(self.socrata_url + '&search_context=' + self.socrata_domain + '&tags=intelligent%20transportation%20systems%20(its)', function (data) {
                var tempAccessLevel = "";
                for (itemCount = 0; itemCount < data.results.length; itemCount++) {
                    for (metadata_element in data.results[itemCount].classification.domain_metadata){
                        if(data.results[itemCount].classification.domain_metadata[metadata_element].key == "Common-Core_Public-Access-Level"){
                            tempAccessLevel  = data.results[itemCount].classification.domain_metadata[metadata_element].value;
                        }
                    }
                    // Counts only if access level is public
                    if(tempAccessLevel == "public" || tempAccessLevel == "Public") counter++;
                }
            });
            return counter;
        }

    },
    template: ` <div>
                    <div style="width: 33%; position: absolute; padding-top: 40px;">
                        <img width=179.9 height=180 src="/data/images/its_jpo_30_anniversary_logo.webp">
                    </div>
                    <div class="TitleText" style="padding-top: 40px;">
                        <h1 class="searchHeaderText">ITS DataHub</h1>
                        <h3 style="font-size: 18px; font-family: Arial, sans; color: white; text-align: center; margin-top: 10px;">The U.S. Department of Transportation ITS JPO's portal for open-access data.</h3>
                        <p style="font-size: 18px; font-family: Arial, Tahoma, sans; color: white; text-align: center; margin-bottom: 12px;">Use the search bar to discover publicly available ITS JPO data.</p>
                        <label for="mainSearch" class="hidden">Search</label>
                        <input class="mainSearch" id="mainSearch" v-model="query" v-on:keyup.enter="searchSend(query)" v-bind:placeholder="search_placeholder"><button class="searchButton" v-on:click="searchSend(query)">SEARCH</button>
                    </div>
                </div>
                `
})

Vue.component('search-results', {
    data: function(){
        return{
            NTLJson: [], //List of NTL datasets loaded from NTL API
            searchResults: [], //List of combined search results
            relevanceSortedSearchResults: [], //List of combined search results sorted by relevance
            dateSortedSearchResults: [], //List of combined search results sorted by date
            nameSortedSearchResults: [], //List of combined search results sorted by name
            socrata_url: 'https://api.us.socrata.com/api/catalog/v1?q=',
            socrata_domain:"data.transportation.gov",
            query: sessionStorage.getItem("sentSearchTerm"),
            seeMoreToggler: []
        }            
    },
    created: function(){
        this.loadNTL(); // Loads the initial static file of NTL Data

        // Removes any 'null' entry in the search bar
        if (this.query == "" || this.query == "null") {
            this.query = "";
            sessionStorage.setItem("sentSearchTerm", "");
        }
        this.search(this.query);
    },
    methods: {
        //Gets the search results for a search query
        search: function (search_query) {
            var self = this;
            self.query = search_query;
            self.searchResults = [];

            //Additional or different search domains should be added here
            self.addSocratatoSearchResult(search_query);
            self.addNTLtoSearchResult(search_query);
            var mainSearchElement = document.getElementById("mainSearch");
            if (mainSearchElement != null)  mainSearchElement.value = search_query;
        },

        onSearchResults: function (){
            var self = this;
            self.relevanceSortedSearchResults = self.searchResults.slice();

            self.dateSortedSearchResults = self.searchResults.slice();
            self.dateSortedSearchResults.sort(self.compareDate);

            self.nameSortedSearchResults = self.searchResults.slice();
            self.nameSortedSearchResults.sort(self.compareName);

            for (var i = 0; i < self.searchResults.length; i = i + 1) {
                
                self.seeMoreToggler[i] = true;
            }
        },
        //===============================================NTL FUNCTIONS===============================================

        // Calls NTL API to grab json file containing ITS JPO dataset listings from NTL, called on webpage load, function operates sync on load to prevent timing issue
        loadNTL: function () {
            $.ajaxSetup({
                async: false
            });
            var itemCountNTL;
            var self = this;
            var NTL_url = "https://rosap.ntl.bts.gov/fedora/export/view/collection/";
            var NTL_collection = "dot:239"; //Limit results to specific collection
            var NTL_datelimit = "?from=2018-01-01T00:00:00Z"; //Limit results to before, after or between a specific date range
            var NTL_rowslimit = "&rows=9999"; //Set number of rows to have returned (NTL default is 100), max 9999
            var tempAccessLevel = "";
            var counter = 0;

            $.getJSON(NTL_url + NTL_collection + NTL_datelimit + NTL_rowslimit, function (json) {
            // $.getJSON("json/NTL.json", function(json) { // TODO: Replace with above line when pushing to production
                for (itemCountNTL = 0; itemCountNTL < json.response.docs.length; itemCountNTL++) {
                    //Filter results to pull only dataset types
                    if (json.response.docs[itemCountNTL]["mods.sm_resource_type"][0] == "Dataset"){
                        var tempJson = {};
                        //Read dataset name, description, date
                        tempJson["name"] = json.response.docs[itemCountNTL]["dc.title"][0];
                        tempJson["description"] = json.response.docs[itemCountNTL]["mods.abstract"][0];
                        tempJson["date"] = self.formatDate(json.response.docs[itemCountNTL]["fgs.createdDate"]);
                        tempAccessLevel = json.response.docs[itemCountNTL]["rdf.isOpenAccess"][0];
                        
                        if((tempAccessLevel == "") || (tempAccessLevel == null)){
                            tempJson["accessLevelIsPublic"] ="Public";
                        }
                        if(tempAccessLevel == "true"){
                            tempJson["accessLevelIsPublic"] ="Public";
                        }
                        else{
                            tempJson["accessLevelIsPublic"] = "Restricted";
                            continue;
                        }

                        //Read dataset tags, add Research Results button tag to all NTL results
                        var tagCount;
                        var allTags = [];
                        var RESEARCHRESULTS = "Research Results";
                        allTags[0] = RESEARCHRESULTS;
                        for (tagCount = 0; tagCount < json.response.docs[itemCountNTL]["mods.sm_key_words"].length; tagCount++) {
                            allTags[tagCount + 1] = json.response.docs[itemCountNTL]["mods.sm_key_words"][tagCount];
                        }
                        tempJson["tags"] = allTags;
                        tempJson["tags"].sort();

                        //Build URL to refer to NTL result using PID
                        var PID = json.response.docs[itemCountNTL].PID.split(":")[1];
                        tempJson["link"] = "https://rosap.ntl.bts.gov/view/dot/" + PID;

                        //Add to NTL datasets JSON list
                        self.NTLJson.push(tempJson);
                        counter++;
                    }
                    
                }
            });
            $.ajaxSetup({
                async: true
            });
        },

        //Searches NTL files for match based on tag, title, or description and adds them to combined search result list
        addNTLtoSearchResult: function (search_query) {
            var itemCountNTL;
            var self = this;
            for (itemCountNTL = 0; itemCountNTL < self.NTLJson.length; itemCountNTL++) {
                if(self.NTLJson[itemCountNTL]["name"].toLowerCase().search(search_query.toLowerCase()) > -1){
                    self.searchResults.push(self.NTLJson[itemCountNTL]);
                } else if(self.NTLJson[itemCountNTL]["description"].toLowerCase().search(search_query.toLowerCase()) > -1){
                    self.searchResults.push(self.NTLJson[itemCountNTL]);
                } else {
                    var tagCount;
                    for (tagCount = 0; tagCount < self.NTLJson[itemCountNTL].tags.length; tagCount++) {
                        if (self.NTLJson[itemCountNTL].tags[tagCount].toLowerCase().search(search_query.toLowerCase()) > -1) {
                            self.searchResults.push(self.NTLJson[itemCountNTL]);
                            break;
                        }
                    }
                }
            }
            self.onSearchResults()
        },

        // Triggers the data set disclaimer before continuing to the page
        dataDisclaimer: function (address) {
            var response = confirm(`DISCLAIMER: The data discoverable through ITS DataHub is offered as a public service by the U.S. Department of Transportation (U.S. DOT) and is expressly provided “AS IS” and “AS AVAILABLE”.

No warranty or guarantee is made by the U.S. DOT as to the accuracy, reliability, relevancy, timeliness, utility, quality, availability, or completeness of the data. No active effort has been or will be made to monitor the format and any risks related to the format of the data becoming obsolete. The U.S. DOT assumes no responsibility for errors or omissions found in data discovered through ITS DataHub. The U.S. DOT reserves the right to discontinue availability of content on ITS DataHub at any time and for any reason. U.S. DOT disclaims any responsibility or legal liability whatsoever, including payment of any damages of any kind, such as, lost profits, lost savings, or any other incidental or consequential damages. U.S. DOT makes such disclaimer of any and all claims based on its provision of the data, your use or reliance on the data, or on any requests for technical assistance through data.itsjpo@dot.gov or the U.S. DOT. The user assumes the entire risk associated with the use or misuse of the data. Users should also review any relevant disclaimers found within storage systems used by ITS DataHub and/or datasets discoverable through ITS DataHub.

If you choose to not accept, you will be unable to access the data discoverable through ITS DataHub. Please contact data.itsjpo@dot.gov with any questions or concerns.`
            );
            if (response == true) window.open(address, '_blank');
        },

        //===============================================SOCRATA FUNCTION===============================================

        //Adds Socrata search results to combined search result list
        addSocratatoSearchResult: function (search_query) {
            var itemCount;
            var self = this;
            var tempAccessLevel = "";
            var metadata_element;
            var socrata_api_url = // search_query == "" ? 
                // self.socrata_url + '&search_context=' + self.socrata_domain + '&tags=intelligent%20transportation%20systems%20(its)' : 
                self.socrata_url + search_query + '&search_context=' + self.socrata_domain + '&tags=intelligent%20transportation%20systems%20(its)';
            $.get(socrata_api_url, function (items) {
                for (itemCount = 0; itemCount < items.results.length; itemCount++) {
                    var tempJson = {};
                    tempJson["name"] = items.results[itemCount].resource.name;
                    tempJson["description"] = items.results[itemCount].resource.description;
                    //items.results[itemCount].classification.domain_metadata[3].value;
                    for (metadata_element in items.results[itemCount].classification.domain_metadata){
                        if(items.results[itemCount].classification.domain_metadata[metadata_element].key == "Common-Core_Public-Access-Level"){
                            tempAccessLevel  = items.results[itemCount].classification.domain_metadata[metadata_element].value;
                        }
                    }
                    //tempAccessLevel  = items.results[itemCount].classification.domain_metadata[3].value;
                    if(tempAccessLevel == "public" || tempAccessLevel == "Public"){
                        tempJson["accessLevelIsPublic"] ="Public";
                    }
                    else{
                        tempJson["accessLevelIsPublic"] = "Restricted";
                        continue;
                    }
                    
                    // if string only has year then only print year, otherwise parse into formatting
                     tempJson["date"] = (items.results[itemCount].resource.createdAt.substring(0,10) < 7) ? items.results[itemCount].resource.createdAt.substring(0,10) : self.formatDate(items.results[itemCount].resource.createdAt);
                    var tagCount;
                    var allTags = [];
                    for (tagCount = 0; tagCount < items.results[itemCount].classification.domain_tags.length; tagCount++) {
                        allTags[tagCount] = items.results[itemCount].classification.domain_tags[tagCount];
                    }
                    tempJson["tags"] = allTags;
                    tempJson["tags"].sort();
                    tempJson["link"] = items.results[itemCount].link;
                    self.searchResults.push(tempJson);
                }
                self.onSearchResults()
            });
        },

        ////===============================================SEARCH HELPER FUNCTIONS===============================================
        // Method used for sorting search results by dataset title alphabetically
        compareName: function (a, b) {
            var self = this;
            const titleA = a.name.toUpperCase();
            const titleB = b.name.toUpperCase();

            let comparison = 0;
            if (titleA > titleB) {
                comparison = 1;
            } else if (titleA < titleB) {
                comparison = -1;
            }
            return comparison;
        },
        
        // Method used for sorting search results by date created
        compareDate: function(a, b) {
            var self = this;
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);

            let comparison = 0;
            if (dateA < dateB) {
                comparison = 1;
            } else if (dateA > dateB) {
                comparison = -1;
            }
            return comparison;
        },
        // Parses a string with a date into a format "Month Day Year"
        formatDate: function (date) {
            var monthNames = [
              "Jan", "Feb", "Mar",
              "Apr", "May", "Jun", "Jul",
              "Aug", "Sep", "Oct",
              "Nov", "Dec"
            ];
            var newDate = new Date(date);
            var day = newDate.getUTCDate();
            var monthIndex = newDate.getUTCMonth();
            var year = newDate.getUTCFullYear();
            return monthNames[monthIndex] + ' ' + day +  ' ' + year;
        },
        //===============================================SEARCH RESULT PAGE FORMATTING FUNCTIONS===============================================

        //Creates buttons to select how to organize search results by Name, Date or Relevance
        dropDownFilter: function () {
            var self = this;
            if (document.getElementsByClassName("filterName")[0].checked) {
                self.searchResults = self.nameSortedSearchResults.slice();
            }
            else if (document.getElementsByClassName("filterDate")[0].checked) {
                self.searchResults = self.dateSortedSearchResults.slice();
            }
            else if (document.getElementsByClassName("filterRelevance")[0].checked) {
                self.searchResults = self.relevanceSortedSearchResults.slice();
            }
        },

        //Allows the user to expand the dataset description
        toggleSeeMore: function (index) {
            this.seeMoreToggler[index] = !this.seeMoreToggler[index];
            this.$forceUpdate();
        },

    },
    template: `<div id="searchresults" class="contentArea searchResults">
                    <br>
                    <div style="display: flex;">
                        <a id="returnPage" class="readButton" style="font-size: 15px; margin-left: 80px;margin-bottom: 10px" v-on:click="window.location.href = '/data/'">Return to Home Page &raquo;</a>
                    </div>
                    <div style="display: flex; float: right; margin-right: 80px">
                        <p style="line-height: 1.8" class="resultsSectionHeading">Sort By: &nbsp;</p>
                        <nav class="segmented-button">
                            <input v-on:click="dropDownFilter" type="radio" name="seg-1" value="R" id="seg-Relevance" class="filterRelevance" checked>
                            <label for="seg-Relevance" class="first">Relevance</label>
                            <input v-on:click="dropDownFilter" type="radio" name="seg-1" value="N" id="seg-Name" class="filterName">
                            <label for="seg-Name" class="first">Name</label>
                            <input v-on:click="dropDownFilter" type="radio" name="seg-1" value="D" id="seg-Date" class="filterDate">
                            <label for="seg-Date" class="last">Date</label>
                        </nav>
                    </div>
                    <div style="display: flex;">
                        <p class="resultsSectionHeading"><b>SEARCH RESULTS FOR:&nbsp;</b></p>
                        <p class="resultsQuery"><b id="resultsQuery">{{query}}</b></p><br>
                    </div>

                    <div style="display: flex;">
                        <p class="resultsSectionHeading"><b>Number of results:&nbsp;</b><p>
                        <p class="resultsCount"><b>{{searchResults.length}}</b></p><br>
                    </div>



                    <hr class="resultsDivider" noshade>
                    <br>

                    <!--generates a bullet point for each search result item-->
                    <div class="search-results-div" style="margin-left: 100px; margin-right: 100px;">

                        <!--displays results if there are results-->
                        <ul v-if="searchResults.length > 0" style="list-style: none; padding-left: 0px;">
                            <li v-model="seeMoreToggler" v-for="(item,index) in searchResults" style="margin-bottom: 30px; list-style: none;">

                                <table style="width: 100%">
                                    <tr>
                                        <td style="width: 70%">
                                            <!--the data set name-->
                                            <a class='resultItemHeader' style="padding-right: 0%" v-on:click="dataDisclaimer(item.link)" target="_blank">
                                                {{ item.name }}

                                            </a>
                                        </td>
                                        <td style="text-align: right; width: 30%;">
                                            <p class="resultItemHeader date-access">
                                                <span class="slightly-bold">Date Added:</span> {{ item.date }}
                                                <br />
                                                <!--<span class="slightly-bold">Access:</span> {{ item.accessLevelIsPublic}}-->
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                                <!--the data set description-->
                                <p class="dataset-description" v-if="item.description.length > 300 && seeMoreToggler[index] && item.description.indexOf(' ', 290) != -1" style="font-size: 15px; padding-top: 5px;"><span v-html="item.description.substring(0,item.description.indexOf(' ', 290))"></span>...&nbsp;&nbsp; <button class="btn-read-more-less one" v-on:click="toggleSeeMore(index)">Read More</button></p>
                                <p class="dataset-description" v-else-if="item.description.length > 300 && seeMoreToggler[index]" style="font-size: 15px; padding-top: 5px;"><span v-html="item.description.substring(0,item.description.lastIndexOf(' '))"></span>{{ item.description.substring(0,item.description.lastIndexOf(" "))}}...&nbsp;&nbsp; <button class="btn-read-more-less two" v-on:click="toggleSeeMore(index)">Read More</button></p>
                                <p class="dataset-description" v-else-if="item.description.length > 300 && !seeMoreToggler[index]" style="font-size: 15px; padding-top: 5px;"><span v-html="item.description"></span>&nbsp;&nbsp; <button class="btn-read-more-less three" v-on:click="toggleSeeMore(index)">Read Less</button></p>
                                <p class="dataset-description" v-else-if="item.description.length > 0" style="font-size: 15px; padding-top: 5px;"><span v-html="item.description"></span></p>
                                <p class="dataset-description" v-else style="font-size: 15px; padding-top: 5px;">No description available.</p>

                                <!--lists the domain tags-->
                                <div v-if="item.tags.length > 0" style="padding-top: 5px;">
                                    <table>
                                        <td>
                                            <p class="tags-tag" style="float:left; height: auto; line-height: 20px;">Tags: </p>
                                        </td>
                                        <td>
                                            <button v-for="(tag, index) in item.tags" class='tag' v-on:click="search(tag)">
                                                {{tag}}
                                                <span v-if="index != item.tags.length - 1">,</span>    
                                            </button>
                                            
                                        </td>
                                    </table>
                                </div>
                                <hr v-if="searchResults.length != index+1" style="border-color: #DEDEDE" noshade>
                            </li>
                        </ul>
                        <div v-else>
                            <p>No search results.</p>
                        </div>
                    </div>
                </div>`
})

Vue.component('featured-data', {
    data:  function(){
        return{
                datasets: [],
        }
    },
    created:function(){
        this.load_dataset_json();
    },
    methods: {
        load_dataset_json: function() {
            $.ajaxSetup({
                async: false
            });
            var self = this;
                        // Extracts all information from datasets.json
            $.getJSON("template_datasets.json", function (json) {
                var i;
                for (i = 0; i < Math.min(json.maxDatasetCount, json.datasets.length) ; i++) {
                    self.datasets.push({
                        'url': json.datasets[i].url,
                        'image':json.datasets[i].image,
                        'altText':json.datasets[i].altText,
                        'name':json.datasets[i].name,
                        'desc':json.datasets[i].description,
                        'id': "fds" + i,
                        'dataId': json.datasets[i].url.substring(json.datasets[i].url.length - 9, json.datasets[i].url.length)
                    })
                }
            });
            $.ajaxSetup({
                async: true
            });
        },

        // Triggers the data set disclaimer before continuing to the page
        dataDisclaimer: function (address) {
            var response = confirm(`DISCLAIMER: The data discoverable through ITS DataHub is offered as a public service by the U.S. Department of Transportation (U.S. DOT) and is expressly provided “AS IS” and “AS AVAILABLE”.

No warranty or guarantee is made by the U.S. DOT as to the accuracy, reliability, relevancy, timeliness, utility, quality, availability, or completeness of the data. No active effort has been or will be made to monitor the format and any risks related to the format of the data becoming obsolete. The U.S. DOT assumes no responsibility for errors or omissions found in data discovered through ITS DataHub. The U.S. DOT reserves the right to discontinue availability of content on ITS DataHub at any time and for any reason. U.S. DOT disclaims any responsibility or legal liability whatsoever, including payment of any damages of any kind, such as, lost profits, lost savings, or any other incidental or consequential damages. U.S. DOT makes such disclaimer of any and all claims based on its provision of the data, your use or reliance on the data, or on any requests for technical assistance through data.itsjpo@dot.gov or the U.S. DOT. The user assumes the entire risk associated with the use or misuse of the data. Users should also review any relevant disclaimers found within storage systems used by ITS DataHub and/or datasets discoverable through ITS DataHub.

If you choose to not accept, you will be unable to access the data discoverable through ITS DataHub. Please contact data.itsjpo@dot.gov with any questions or concerns.`
            );
            if (response == true) window.open(address, '_blank');
        }
    },
    template: `<div id="DatasetDiv" style="text-align: center;">
            <img class="contentIndicator" width=69 height=69 style="top: -30px" src="/data/images/icons/ContentIndicator.webp" alt="Content Indicator Arrow"/>
            <div id="FeaturedDataArea" style="background-image: url('images/CategoryBackground.webp');">
                <h3 class="headingFont" style="color: #152350; padding-top: 3%;"><b>FEATURED DATA SETS</b></h3>
                <div style="display: flex; margin-left: 8%; margin-right: 8%;" id="datasetArea">
                    <div id="bulmaDatasetFDS" class="columns is-multiline">
                        <div v-for="dataset in datasets" class="column is-one-quarter" style="background: #152350; margin: 5% auto; padding: 0; max-width: 50%; min-width: 300px;" v-bind:id="dataset.id">
                            <a v-on:click="dataDisclaimer(dataset.url)" target="_blank">
                                <img v-bind:src="dataset.image" v-bind:alt="dataset.altText" class="featuredDataThumbnail" width=329 height=208>
                                <h3 class="featuredHeading">{{dataset.name}}</h3>
                                <p style="color: white; margin-left: 7%; margin-right: 7%; text-align: left">{{dataset.desc}}</p>
                                <br> 
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})

Vue.component('category-search', {
    data: function(){
        return{
                // Entries for template data
                buttons: []
        }
    },
    created: function(){
        this.load_categories_json();
    },
    methods: {
        load_categories_json: function () {
            var self = this;
            $.ajaxSetup({
                async: false
            });
            // Extracts all information out of data.json
            $.getJSON("template_categories.json", function (json) {
                var i;
                for (i = 0; i < Math.min(json.maxButtonCount, json.buttons.length) ; i++) {
                    self.buttons.push({ 'labels': json.buttons[i].CategoryName,
                                        'imgIcons':json.buttons[i].imgIcons,
                                        'rolloverImages': json.buttons[i].rolloverImages,
                                        'altText': json.buttons[i].altText,
                                        'id':"bterm" + i});
                }
            });
            $.ajaxSetup({
                async: true
            });
        },
        //===============================================SEARCH FUNCTIONS===============================================        
        //Sets search term and sends it to search html page
        searchSend: function (search_query) {
            this.query = search_query;
            sessionStorage.setItem("sentSearchTerm", search_query);
            window.location.href = "search.htm";
        }
    },
    template: `
        <div id="categoryDiv">
            <img class="contentIndicator" width=69 height=69 style="top: -57px" src="/data/images/icons/ContentIndicator.webp" alt="Content Indicator Arrow"/>
            <div id="CategoryAreaHead">
                <h3 class="headingFont" style="color: white"><b>POPULAR DATA SET TOPICS</b></h3>
            </div>

            <div id="categoryArea" class="contentArea categorylayout">
                <div id="bulmaDataset" class="columns is-multiline" style="padding: 0 0 5% 0; height: 100%">
                    <div class="bulmaCategories column is-one-quarter" v-for="btn in buttons">
                        <button v-bind:id="btn.id" class="topic" vertical-align="middle" style="padding-bottom: 10px;" v-on:click="searchSend(btn.labels)">
                            <img v-bind:src="btn.imgIcons" v-bind:alt="btn.altText" width=90 height=86 style="width: 55%; height: 55%; margin-bottom: 20%;" class="RegularThumbnail">
                            <img v-bind:src="btn.rolloverImages" v-bind:alt="btn.altText" width=112 height=108 class="HoverThumbnail">
                            <p class="categoryText" style="text-transform: uppercase;">{{btn.labels}}</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>`
})

Vue.component('metadata-guidelines', {
    template: `
        <div id='metadataDiv'>
            <h3 class="headingFont" style="color: #152350; padding-top: 3%;"><b>DataHub Metadata Requirements</b></h3>
            <div class="lead-paragraph metadataSection flex-area_row">
                <p>The ITS DataHub is a web-system designed for storing and making any open, 
                non-personally identifiable data generated by the ITS Joint Program Office (JPO) funded projects discoverable. 
                The information below is required for a project to be posted to the ITS DataHub if it has been approved by the ITS JPO Data Program.
                If you have a project that you would like to request having its data included in the ITS DataHub, please contact the ITS JPO Data Program by emailing
                <a href='mailto:data.itsjpo@dot.gov' style="color:navy;">data.itsjpo@dot.gov</a> with the name of your project, points of contact, and information on how the 
                project is funded (JPO, FHWA, etc.). If you have any questions, please also email <a href='mailto:data.itsjpo@dot.gov' style="color:navy;">data.itsjpo@dot.gov</a>.</p>
            </div>
            <div class="metadataContent">
                <div class="lead-paragraph metadataSection flex-area_row">
                    <img class="metadataIcon" width=45 height=45 alt="Green circle icon" src="/data/images/icons/greencircle.webp">
                    <h5 class="headingFont">Outline of Data Provided</h5>
                    <p class="metadataText">This is the area where the overall outline of the data is presented. 
                    Is the data being provided as a one-time action or will it be provided in a continuous fashion? 
                    How large is the data being provided? If it’s a one-time action and if the data provided is in multiple files, 
                    please outline the hierarchy of the data (e.g., is there a single ‘main’ file and multiple support files, 
                    or are there multiple main outputs?) If it is not clear from the file name, please provide the exact file names here 
                    and a one-sentence description of the file’s purpose,. This would help the ITS JPO Data Team decide the best way to 
                    ingest and publicize the data. If you have documentation covering this information (i.e., Data Management Plan), 
                    please provide it instead of the description.</p>
                </div>
                <div class="lead-paragraph metadataSection flex-area_row">
                    <img class="metadataIcon" width=45 height=45 alt="Green circle icon" src="/data/images/icons/greencircle.webp">
                    <h5 class="headingFont">Description</h5>
                    <p class="metadataText">This is the area with a brief description of the data being made available and a background on the project that 
                    generated the data. If multiple files are being provided as part of a single dataset, provide a brief description 
                    on how they are related to each other, with additional detail on the ‘main’ dataset. Please provide sufficient
                     detail and information for a third party to easily understand the submitted data.</p>
                </div>
                <div class="lead-paragraph metadataSection flex-area_row">
                    <img class="metadataIcon" width=45 height=45 alt="Green circle icon" src="/data/images/icons/greencircle.webp">
                    <h5 class="headingFont">Contact Name and Email</h5>
                    <p class="metadataText">Please provide a name and email address of a point of contact who is a knowledgeable person on the dataset. 
                    This does not obligate the contact person to answer these or any other questions, but it would help us to track the 
                    impact of any subsequent work as a result of reusing your submitted data for additional research. It may be best 
                    practice to include a general office or organization email, along with a  name of an individual who is knowledgeable 
                    about the project/data.</p>
                </div>
                <div class="lead-paragraph metadataSection flex-area_row">
                    <img class="metadataIcon" width=45 height=45 alt="Green circle icon" src="/data/images/icons/greencircle.webp">
                    <h5 class="headingFont">Geographic Coverage</h5>
                    <p class="metadataText">This is a  general description of the area where the data are collected, such as “I-90”, or “Leesburg, VA”, or
                     “Florida.” The more detail/specificity you provide, the better it is for other users to understand the location(s) 
                     where the data were collected.</p>
                </div>
            </div>
            <div class="lead-paragraph metadataSection flex-area_row" style="margin-left: 50px;padding: 10px;">
                    <img class="metadataIcon" width=45 height=45 alt="Green circle icon" src="/data/images/icons/greencircle.webp" style="left: -28px">
                    <h5 class="headingFont">Column Descriptions</h5>
                    <p  class="metadataText">For each ‘main’ dataset, please provide brief descriptions of each column. 
                    If you have a data dictionary in another file type such as a spreadsheet, CSV, or metadata file, please provide it, 
                    and record the exact name of the file here. Please be as descriptive as possible to help others understand your data.</p>
            </div>
            <img class="contentIndicator" width=69 height=69 style="top: -40px; left:0;" src="/data/images/icons/ContentIndicator.webp" alt="Content Indicator Arrow"/>
        <div id ="metaexampleDiv">
            <h2>Example</h2>
            <div class="exampleContent">
                <div class="lead-paragraph metadataSection flex-area_row">
                    <h4>Outline of Data Provided</h4>
                    <p class="exampleText">Main dataset is a 5 GB csv file of Basic Safety Messages (bsm_output.csv). Support files are also included that describe the weather conditions (weather.csv, 500 MB) and congestion as measures by other sensors (congestion.pnf, 1.3 GB). Data will be provided one-time as a full package of results from the project.</p>
                </div>
                <div class="lead-paragraph metadataSection flex-area_row">
                    <h4>Description</h4>
                    <p class="exampleText">This dataset contains data collected from the Connected Vehicle (CV) prototype demonstration conducted on I-81 in Virginia. 53 vehicles and 21 trucks that regularly traverse the highway were equipped with aftermarket on-board units (OBUs) to generate Basic Safety Messages (BSMs). The collected BSMs were then anonymized before being included here.</p>
                </div>
                <div class="lead-paragraph metadataSection flex-area_row">
                    <h4>Contact Name and Email</h4>
                    <p class="exampleText">John Doe, jdoe@gmail.com</p>
                </div>
                <div class="lead-paragraph metadataSection flex-area_row">
                    <h4>Geographic Coverage</h4>
                    <p class="exampleText">I-81 from Winchester, VA to Front Royal, VA</p>
                </div>
                <div class="metadataSection flex-area_row">
                    <h4>Column Descriptions</h4>
                    <table>
                        <tr>
                            <th>Column Name</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>Lat</td>
                            <td>Latitude of BSM</td>
                        </tr>
                        <tr>
                            <td>Long</td>
                            <td>Longitude of BSM</td>
                        </tr>
                        <tr>
                            <td>Speed</td>
                            <td>Speed of vehicle in MPH</td>
                        </tr>
                        <tr>
                            <td>Acceleration</td>
                            <td>Lateral acceleration of vehicle in m/s^2</td>
                        </tr>
                        <tr>
                            <td>Heading</td>
                            <td>Heading of vehicle in degrees (0-360)</td>
                        </tr>
                        <tr>
                            <td>Steering_Angle</td>
                            <td>Angle of steering column</td>
                        </tr>
                        <tr>
                            <td>partII_width</td>
                            <td>(Optional) width of vehicle</td>
                        </tr>
                        <tr>
                            <td>partII_length</td>
                            <td>(Optional) length of vehicle</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div id="metadataButtonDiv">
             <a href="/data/DataHubMetadataTemplate.docx" class="button">DOWNLOAD THE TEMPLATE HERE</a>
            </div>
        </div>
    `

})

var myVue = new Vue({
    el: '#searchTerms',
});


// Function allows the nav bar to move with the page
$(document).ready(function () {
    $(window).scroll(function () {
        // fixed header is strange.  For now it is hard coded to adjust padding otherwise the text moves
        if ($(window).scrollTop() > 58) {
            $('.navigation-bar').addClass('navbar-fixed');
            $('.TitleText').attr('style', 'padding-top:130px');
        }
        if ($(window).scrollTop() < 58) {
            $('.navigation-bar').removeClass('navbar-fixed');
            $('.TitleText').attr('style', 'padding-top:40px');
        }
    });
});
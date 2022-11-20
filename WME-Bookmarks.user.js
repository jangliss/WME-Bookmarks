// ==UserScript==
// @name            WME Bookmarks
// @description     Bookmark, share your favourite places
// @namespace       https://greasyfork.org/fr/scripts/4515-wme-bookmarks
// @version         0.99
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAGjElEQVR4nGJgGGAAAAAA//9ipETz3r17nf/8+RvDwsK8xNnZeS85ZgAAAAD//2KhxAE/f/3uYGZmNvn567cOAwODKTlmAAAAAP//YqLEAX///tURFRFh+PPnj8m+ffvEyTEDAAAA//8i2wG7d+/JZmNj4xAVFWHg4eFh+PP3bxo55gAAAAD//yLbAX/+/gkSEhJk4OLiYhASEmL48+evHznmAAAAAP//It8Bf/5aiQiLMLCwsDCIiUKigRxzAAAAAP//IssBe/bsCWdjY+Pg5eVhYGRkZODk5GTg4uJk2L17dzapZgEAAAD//yLLAb9//4ng4+NlYGFhYfj//z8DExMTg7CwMMPv33+CSDULAAAA//8iywG/fv+2ExYSYvj79y8c8/PzM/z6/duKVLMAAAAA//8i2QF79uxxZmJiEuLl5WX49+8f3AGcHBwMLCwsHLt27SIpGgAAAAD//yLZAT9//srh5+NjYGBgYPjz5w8cMzAwMAgICDD8+vWbpGgAAAAA//9iZGBgYFi/YePjv3//yhCrSUNdnUFAgB9F7P///wwfPn5kuHnzFtGWMzMzPwEAAAD//2zVsRGAIBAF0b3DFCNmPOtQ+69GAiwBhm8BGu+8eBeAMUbZYyMicHcww+1/E2ZGSone+6etOXOdB5J+rSTmnEiitYe71vICAAD//2JhYGBgEBTgN3vx8uXqZ89fqMvLyTIICQkx/IVqoBZghHro06dPDA8fPWb48/v3EwEBgQQAAAAA//9C8eaGDRsXfvr0KU5CUoJBRlqagYGBgeHv378UW87MzMzAxMTE8PTpU4anT58x8PHxLQoI8I9nYGBgAAAAAP//wgjnHTt3Or969XohOxubtKKiIgMHBzvD79+/4T4gBfz//5+BlZWV4fv37wwPHz1m+Pb163txcbFsT0/P5TA1AAAAAP//wmrq3r17xd+8eTvr48ePfjKyMgwS4uIMv3//Jik0mJiYGNjY2BjevH3L8PDBQwZuHu6D4mJi4c7Ozi+R1QEAAAD//8LrrS1bt0Y+fPBwHr+AAIeSogLD79+/Gf79+0e05ffu32f48P7DDxkZmTJ/f7/J2NQCAAAA//8iGK579uwRf/jo8favX74YysrJMnCwsxN0wO/ffxgeP3nMwMLCeltBQT7U3c3tIi61AAAAAP//IlgQubi4vOTi4jzKwcnJwMLMzPDjxw+C+P//fwxcXFwMHOzsN/FZzsDAwAAAAAD//yKqSfbyxYtgUVExhs+fPxOjnIGBAVIm3Lt/35aQOgAAAAD//yIYAtu3bzf49PmLJCw1I+OfP38ycHJyMvz+/RtD7s+fPwy/f/3m37x5ixs+8wEAAAD//yLogNevX6dyc3MxfPz4ASWYGRgYGPj5+RnevHnDwMvLy8DExIQi//HjRwYeHh6GZ8+eFeAzHwAAAP//IhgFjx4/DhIWEmb4+vUrXExYWJiBmZmF4dq16ww/fvz4+ezZc3ZVVVUGFhYWhvfv3zP8+/eP4ffv3wzcPDwMT58+w1tFAwAAAP//whsCW7dtM/z08ZMEIyMDvOwXFxdn+P7jB8OlS5cYBAUFdrS0NHNISkqsuHDhAsPnz18YREVFGZiYmBh+//7N8Of3H4ZfP3/wb9y40R2XHQAAAAD//8LrgOfPnqXz8PIyfP36lYGTk5NBXFyc4f79+wy3bt3+pa+vV5ydne3JwMDAkJaWFmlqahJ/7/79X/fv32cQFRVl4ObmZvjy5TMDLy8fw8NHjwpw2QEAAAD//8LrgPv37weys7Ey8PDwMHBxcTGcO3ee4dev3/cdHewtIiMj+5DVhoaGLnJ3c5X/9ev3/XPnzjOwsrIyCAgIMLCzszE8efwEZzQAAAAA///C6YAtW7YYfvz4SUxeXp7h67dvDGfOnGWQk5db1dBQr+Tt7X0emx5XV9cXDQ31SioqKrPOn7/A8P79ewYpKSmGP39+861bt84Tmx4AAAAA///C6YAHDx5m8/PzM1y8eInh+rVrvy0szNNzc3IicalHBunpaekODvYB9x88+HLmzBkGfn4BhocPHyZjUwsAAAD//1TOrQ7CMBQG0N37fbd6WIbiJ0tJikHwKogG1Ucupgo3kk0xOiwKwROc8xcQEaeqK5K7eX7VUkozTuMzhHBNKd2dcxczO5HsAWwBrAF0ADYAOpJ7kt7MzjHG6ej97V3rI+fcLMtnIHlQ1VZE7Gd+AQAA//8acAQAAAD//wMA0QVN81BfUzsAAAAASUVORK5CYII=
// @include         https://www.waze.com/editor*
// @include         https://www.waze.com/*/editor*
// @include         https://beta.waze.com*
// @exclude         https://www.waze.com/user/*editor/*
// @exclude         https://www.waze.com/*/user/*editor/*
// @connect         limageenboite.fr
// @grant           GM_addElement
// @grant           GM_xmlhttpRequest
// @author          Sebiseba
// @copyright       Sebiseba 2014-2021
// @require         https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// ==/UserScript==

/* global WazeWrap */
/* jshint -W097 */
'use strict';

// Thanks
// All beta testers
// Bellhouse for German translation

// **********************************
// **  DOWNLOAD HELPER BY DUMMYD2  **
// **********************************

/******** AUTO INJECTED PART ***************/

function BKMdownloadHelperInjected() {
    window.BKMDownloadHelper = {
        jobs: [], _waitForData: function (id)
        {
            if (this.jobs.length <= id) {
                this.jobs[id].callback({
                    url: null,
                    data: null,
                    callback: this.jobs[id].callback,
                    status: 'error',
                    error: 'Request not found'
                });
            }
            else
            {
                if (this.jobs[id].status == 'success' || this.jobs[id].status == 'error')
                    this.jobs[id].callback(this.jobs[id]);
                else
                {
                    if (this.jobs[id].status == 'downloading' && this.jobs[id].progressCallback) {
                        this.jobs[id].progressCallback(this.jobs[id]);
                    }
                    var _this = this;
                    window.setTimeout(function () {
                        _this._waitForData(id);
                    }, 500);
                }
            }
        },
        add: function (params, callback, progressCallback)
        {
            this.jobs.push({
                params: params,
                data: null,
                callback: callback,
                progressCallback: progressCallback,
                status: 'added',
                progression: 0,
                error: ''
            });
            var id = this.jobs.length - 1;
            var _this = this;
            window.setTimeout(function () { _this._waitForData(id); }, 500);
        }
    };
}

var BKMdownloadHelperInjectedScript = GM_addElement('script', {
    textContent: BKMdownloadHelperInjected.toString() + ' \n' + 'BKMdownloadHelperInjected();'
});

if (typeof unsafeWindow === "undefined") {
    unsafeWindow = function() {
        var dummyElem = document.createElement("p");
        dummyElem.setAttribute("onclick", "return window;");
        return dummyElem.onclick();
    }();
}
/******** SANDBOX PART ***************/

function lookFordownloadHelperJob() {
    for (var i = 0; i < unsafeWindow.BKMDownloadHelper.jobs.length; i++) {
        if (unsafeWindow.BKMDownloadHelper.jobs[i].status == 'added') {
            unsafeWindow.BKMDownloadHelper.jobs[i].status = cloneInto('downloading', unsafeWindow.BKMDownloadHelper.jobs[i]);
            var f = function () {
                var job = i;
                GM_xmlhttpRequest({
                    method: unsafeWindow.BKMDownloadHelper.jobs[job].params.method,
                    headers: unsafeWindow.BKMDownloadHelper.jobs[job].params.headers,
                    data: unsafeWindow.BKMDownloadHelper.jobs[job].params.data,
                    synchronous: false,
                    timeout: 3000,
                    url: unsafeWindow.BKMDownloadHelper.jobs[job].params.url,
                    //job: i,
                    onerror: function (r) { unsafeWindow.BKMDownloadHelper.jobs[job].status = cloneInto('error', unsafeWindow.BKMDownloadHelper.jobs[job]); },
                    ontimeout: function (r) { unsafeWindow.BKMDownloadHelper.jobs[job].status = cloneInto('error', unsafeWindow.BKMDownloadHelper.jobs[job]); },
                    onload: function (r) {
                        unsafeWindow.BKMDownloadHelper.jobs[job].status = cloneInto('success', unsafeWindow.BKMDownloadHelper.jobs[job]);
                        unsafeWindow.BKMDownloadHelper.jobs[job].data = cloneInto(r.responseText, unsafeWindow.BKMDownloadHelper.jobs[job]);
                    },
                    onprogress: function (r) { unsafeWindow.BKMDownloadHelper.jobs[job].progression = cloneInto(r.total == 0 ? 0 : (r.loaded / r.total), unsafeWindow.BKMDownloadHelper.jobs[job]); }
                });
            }();
        }
    }
    window.setTimeout(lookFordownloadHelperJob, 2000);
}
window.setTimeout(lookFordownloadHelperJob);

/******** NOW BOOKMARKS ***********/

function runBKM() {
    var BKMversion = '0.99', timer, histoNavTimer, link={}, bookmarks_Layer=[], countries=[], countriesS=[], count = 0, debug = ''; // Script variables
    var lang, text1, text2, text3, tset; // Language variables
    var BKMusername, BKMcountryActive, BKMhandle, BKMEditHandle, BKMhandleClass, BKMhandleClass2, BKMmapSearch; // DOM variables
    var _oldP='', _newP='', _prev=[], _next=[], _cur='', _stopUpdPos=false; // Prev/Next variables

    // *************
    // **  ICONS  **
    // *************

    var di = 'data:image/png;base64,';
    var iconAddLinkMap = di + 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAO4SURBVHjarJVbTBx1FMZ/MzvsbheXQEthy02DNPVlpUpKmgj2sgaykkrbUGolJqaYlIcaE9OGtighGtN6SV80xhgftGkffFAiTcEaaIwmNlqKdgtJoaQsl3Ip2AuwLOzuzPFhBhVlKS3+k8n/zMw53/edL/M/AytdL4qbCsmhVDQAdsmC1+qKCXTeeOxx+nFxHAQalf+XQBGMrFTwP8shdvE+CJTLCgnmbSiTFJwUBnphPASb8jlMBYfZZ+X55SHA59U9LxuUffJj5ZciaSdE8Il4G0SeqhOhSD5ARAFQHqqDUim0pdBYU0XGuSEIDgDjwCXI88E6FX46z0kCHFqcYIfA2TjcZbLRlcHPr5SzqikIQ0EgDNwCgkB/BG+lnelh6LtObfwOyuQoIXSEERRGmKEDF3s9G/nEvxWagzA2CkxZ4KOAgJYCsZ5JVq99hNvXh5awqELk1d0wK0SvdBMZHSOUlc7qZ7agne6Au7eBSWDMuuZAyQIJTII7qZjA+SBrnpT4BH7xr0rlbEUltow1kJ0Ed8LwXhtM37PA55VPAZnAkAFOtZxflCZKBL5X4nTwgkCTAltlr93DmWI/togDIhG4FYK+a8BNS/kUkAPKoCEyrR5nM29yE+GCCX3/r8gvfpuT5i07YTxmdjE8CMZF4B6QCspEBJnUfqDPtu3f5UscNJ+5tSgteg8nLn4LbmAuDOockA44wRYBuSu/02fbRu5/LV+CoA0Ah+Oruny6j+SGmWz/hqhHB6cKig2e2Ax630QXHsd2AG4oskwCU72mnTpWW1v59kefbcA1MZyktl8OXT1j8KgdEgwgCnhSe3EQjjcW1EVtoQ1V/Xx/Tc3L7+6pRG1uBs1hR/7omsGp7u9qnIrlrYUEQLFRwA3ctDzAUNC0U8cOHhS51CFSVy/yXOmM5OUFAvBSJgDr5qpI79Xzq0WcPpkiecSzDNgcACUh4XRdfb3oVztNcF/JtKxf3zkCmzIXpHulnOSAOAtmBXt79n3AC6z948IDB0Q6O0WOHDWVm+AkL7CwyPK7QHbg7u0mbSJtWdZ4vb3XBgdFGt4xwXNzrwT+Vu5bmFy07Fn/unnilE9PtraKtLaJUVI6I9nZv/aAL2tR8Adfe56urpbpgQGRqiqZhQ8b/vlXXAmyBijp6a/tNgwSi4svf9ff/9YX0PIbeLwQ04EYYIAWg1jUHMp6BMJzZkwMdN2KDYiKFf+lTnG5vk5KTExxj49vv2MeH08c1TGrUBcIG9ZDMe/n4+iCij8HAJTXkX9j47cVAAAAAElFTkSuQmCC';

    // *********************
    // ** HELPER FUNCTION **
    // *********************

    function getId(node) { return document.getElementById(node); }
    function getElementsByClassName(classname, node) {
        node || (node = document.getElementsByTagName('body') [0]);
        for (var a = [], re = new RegExp('\\b' + classname + '\\b'), els = node.getElementsByTagName('*'), i = 0, j = els.length; i < j; i++) { re.test(els[i].className) && a.push(els[i]); }
        return a;
    }
    function getLink(pl) {
        var a=pl.split('?'), b=a[1].split('&');
        link.MP="0", link.UR="0", link.MC="0";
        for (var i = 0; b[i]; i++) {
            var e = b[i].split('=');
            switch(e[0]){
                case 'env': link.env = e[1]; break;
                case "lat": link.lat = e[1]; break;
                case 'lon': link.lon = e[1]; break;
                case 'zoomLevel': link.zoom = e[1]; break;
                case "layers": link.layers = e[1]; break; // old format
                case "s": link.layers = e[1]; break; // new format
                case 'mapProblem': link.MP = e[1]; break;
                case 'mapUpdateRequest': link.UR = e[1]; break;
                case 'mapComments': link.MC = e[1]; break;
                case 'segments': link.segments = e[1]; break;
                case 'nodes': link.nodes = e[1]; break;
                case 'venues': link.venues = e[1]; break;
                default: break;
            }
        }
        //Object.keys(link).sort();
    }
    function getName() {
        var name, topCity = W.model.topCityId;
        if (topCity == null) { name = lang[16]; }
        else {
            var name = W.model.cities.getObjectById(topCity).attributes.name;
            if (name === undefined) { name = lang[16]; }
            else { name = W.model.cities.getObjectById(topCity).attributes.name; }
        }
        return name;
    }
    function isJsonString(str) {
        try { JSON.parse(str); }
        catch (e) { return false; }
        return true;
    }
    function pad(str) {
        str = str.toString();
        return str.length < 2 ? pad('0' + str, 2)  : str;
    }
    function toTimestamp(remDate,remTime){
        var d = remDate.split("-");
        var t = remTime.split(":");
        var datum = new Date(d[0], d[1]-1, d[2], t[0], t[1]).getTime();
        return datum;
    }
    function checkReminder() {
        var toSave=[], a = JSON.parse(localStorage.WMEBookmarks);
        for (var p in a) {
            if(!a.hasOwnProperty(p)) continue;

            //Redo Bookmark
            var bNew={};
            bNew.country=a[p].country;
            bNew.name=a[p].name;
            bNew.perma=a[p].perma;
            bNew.comm=a[p].comm;
            bNew.share=a[p].share;
            bNew.reminder=a[p].reminder;
            if (a[p].reminder != null && a[p].reminder != "" && a[p].reminder < Date.now()) {
                if (debug) { console.log('WME Bookmarks: Check Reminder', a[p].reminder); }
                bNew.reminder=null;
                WazeWrap.Alerts.info("WME Bookmarks", a[p].name+"\n"+a[p].comm, true, false);
                if (getId('chkSynchro').checked === true) {
                    if (debug) { console.log('WME Bookmarks: UPDATE', BKMusername, bNew); }
                    BKMupdateBookmarks('UPDATE',BKMusername, bNew, '');
                }
            }
            //Store Bookmark
            toSave.push(bNew);
        }
        localStorage.setItem('WMEBookmarks', JSON.stringify(toSave));
    }

    // ****************
    // ** MAIN HTML  **
    // ****************

    function BKMinit() {
        // Waze object needed
        if (typeof (W) === 'undefined') { setTimeout(BKMinit, 500); return; }
        if (typeof (W.app) == 'undefined') { setTimeout(BKMinit, 500);  return; }
        if (typeof (W.map) == 'undefined') { setTimeout(BKMinit, 500); return; }
        if (typeof (I18n) == 'undefined') { setTimeout(BKMinit, 500); return; }
        if (typeof (OL) === 'undefined') { setTimeout(BKMinit, 500); return; }
        if (W.loginManager.user == null) { setTimeout(BKMinit, 500); return; }
        BKMusername = W.loginManager.user.userName;
        if(typeof(W.model.getTopCountry()) === 'undefined' || W.model.getTopCountry() === null) { setTimeout(BKMinit, 500); return; }
        BKMcountryActive = W.model.getTopCountry().name;
        if (typeof (BKMusername) == 'undefined') { setTimeout(BKMinit, 500); return; }
        if (!WazeWrap.Ready) { setTimeout(BKMinit, 500); return; }

        // Waze GUI needed
        BKMhandle = getId('user-info');
        if (typeof (BKMhandle) === 'undefined') {  if (debug) { console.info('WME Bookmarks - BKMhandle : NOK'); } setTimeout(BKMinit, 500); return; }
        BKMEditHandle = getId('edit-buttons');
        if (typeof (BKMEditHandle) === 'undefined') {  if (debug) { console.info('WME Bookmarks - BKMEditHandle : NOK'); } setTimeout(BKMinit, 500); return; }
        BKMhandleClass = getElementsByClassName('nav-tabs', BKMhandle) [0];
        if (typeof (BKMhandleClass) === 'undefined') { if (debug) { console.info('WME Bookmarks - BKMhandleClass : NOK'); } return; }
        BKMhandleClass2 = getElementsByClassName('tab-content', BKMhandle) [0];
        if (typeof (BKMhandleClass2) === 'undefined') { if (debug) { console.info('WME Bookmarks - BKMhandleClass2 : NOK'); } setTimeout(BKMinit, 500); return; }
        BKMmapSearch = getElementsByClassName('search-query', getId('search')) [0];
        if (typeof (BKMmapSearch) === 'undefined') { if (debug) { console.info('WME Bookmarks - BKMmapSearch : NOK'); } setTimeout(BKMinit, 500); return; }

        // Verify localStorages
        if ('undefined' === typeof localStorage.WMEBookmarks || !isJsonString(localStorage.WMEBookmarks)) { localStorage.setItem('WMEBookmarks', '[]'); }
        if ('undefined' === typeof localStorage.WMEBookmarksShared || !isJsonString(localStorage.WMEBookmarksShared)) { localStorage.setItem('WMEBookmarksShared', '[]'); }
        if ('undefined' === typeof localStorage.WMEHistoric || !isJsonString(localStorage.WMEHistoric)) { localStorage.setItem('WMEHistoric', '[]'); }
        if ('undefined' === typeof localStorage.WMECopyPastePOI || !isJsonString(localStorage.WMECopyPastePOI)) { localStorage.setItem('WMECopyPastePOI', '[]'); }
        if ('undefined' === typeof localStorage.WMEBookmarksSettings || !isJsonString(localStorage.WMEBookmarksSettings)) { localStorage.setItem('WMEBookmarksSettings', '{"version":'+null+',"zoom":true,"layers":true,"layersPaste":true,"server":false,"synchro":true,"backup":"ins","lclic":false,"lcopy":false}'); }
        if ('undefined' === typeof localStorage.WMEPrevNext || !isJsonString(localStorage.WMEPrevNext)) { localStorage.setItem('WMEPrevNext', '{"prev":[],"next":[]}'); }
        BMKcheckStorage();

        // Translation
        var BKMLang = I18n.locale;
        if (BKMLang == 'fr') {
            lang = new Array('Favoris', 'Partage des amis', 'Partage ', 'Historique', 'Sauvegarde / Restauration', 'Synchroniser', 'Nom', 'Copier / Restaurer POI', 'Valider', 'Annuler', 'Ajouter', 'Supprimer', 'Partager', 'Relocaliser', 'Commentaire', 'Changer', 'Sans Nom', 'Chercher une adresse, un lieu, ID ou permalien', 'C\'est parti !', 'Erreur', 'Réussi !', 'Stop', 'Paramètres', 'Pseudos', 'Rappel');
            text1 = ' Copiez ces données dans un fichier TXT pour les conserver.<br/>Collez vos données pour les restaurer.';
            text2 = ' Écrivez les pseudos avec qui vous souhaitez partager le favoris. Le séparateur se mettra automatiquement.';
            text3 = ' Lorsque vous êtes synchronisé avec le serveur, le script envoie des données à celui-ci.<br>Les données sont: Pseudo, coordonnées, pays, nom du favoris, commentaires et pseudo des partages.<br>Effacer les données serveur du script supprime toutes traces de votre profil.';
            tset = new Array('Appliquer le zoom', 'Appliquer les calques (depuis les favoris)', 'Changement auto de serveur (usa/intl)', 'Synchroniser avec le serveur du script', 'Effacer les données locales', 'Effacer les données serveur du script', 'Tri : Favoris le plus récent en haut','Appliquer les calques (depuis la recherche)','Effacer l\'historique','Nouveau','Ajouter','Coloriser le dernier lien visité','Activer le copier/restaurer des POI','Activer l\'historique de navigation','Sélectionner les objets de l\'historique');
        }
        else if (BKMLang == 'de') {
            lang = new Array('Favoriten', 'Mit Freunden geteilt', 'Teilen ', 'Verlauf', 'Sichern / Wiederherstellen', 'Synchronisieren', 'Name', 'POI kopieren / wiederherstellen', 'Abschicken', 'Abbrechen', 'Hinzufügen', 'Löschen', 'Teilen', 'Ort aktualisieren', 'Kommentar', 'Ändern', '(ohne Namen)', 'Adresse, Ort, ID oder Permalink suchen', 'Auf geht\'s!', 'Fehler', 'Erfolgreich!', 'Stop', 'Einstellungen', 'Usernamen','Erinnern');
            text1 = ' Daten zur Sicherung in eine TXT-Datei sichern.<br/>Zur Wiederherstellung Daten hier einfügen.';
            text2 = ' Usernamen des Users eintragen, mit dem du den Favoriten teilen willst. Trennzeichen werden automatisch eingefügt.';
            text3 = ' Beim Synchronisieren mit dem Server werden folgende Daten übermittelt:<br>Username, Koordinaten, Land, Name des Favoriten, Kommentare und Usernamen, mit denen geteilt wurde.<br>Server-Daten löschen entfernt alle deiner Spuren auf dem Server.';
            tset = new Array('Zoomstufe sichern', 'Ebenen sichern (da favoriten)', 'Server automatisch wechseln (US/ROW)', 'Mit Server synchronisieren', 'Lokale Daten löschen', 'Server-Daten löschen', 'Sortieren : Letzte Favoriten oben', 'Ebenen sichern (da suchleiste)','Verlauf löschen','Neue','Hinzufügen','Markiere den zuletzt besuchten Link','Aktivieren Sie Kopieren / Wiederherstellen POI','Browserverlauf aktivieren','Objektauswahl aus dem Verlauf zulassen');
        }
        else {
            lang = new Array('Bookmarks', 'Friends\'s Sharing', 'Sharing ', 'Historic', 'Backup / Restore', 'Synchronization', 'Name', 'Copy / Restore POI', 'Submit', 'Cancel', 'Add', 'Delete', 'Share', 'Relocate', 'Comment', 'Change', 'Unnamed', 'Search for an address, place, ID or permalink', 'Let\'s Go !', 'Error', 'Success !', 'Stop', 'Settings', 'Nicknames','Reminder');
            text1 = ' Copy data into a TXT file to preserve them.<br/>Paste your data to restore them.';
            text2 = ' Write the nick you want to share the bookmark. The separator will be inserted automatically';
            text3 = ' When you are synchronized with the server, the script sends data to it <br>Data is: Nickname, coordinates, country, name of bookmarks, comments and nicknames shares <br> Clear script data server deletes all traces of your profile.';
            tset = new Array('Apply Zoom', 'Apply Layers (from bookmarks)', 'Auto change Server (usa/intl)', 'Synchro with script server', 'Clear local storage data', 'Clear script server data', 'Sort : Bookmark more recent on top', 'Apply Layers (from searchbar)','Clear historic','New','Add','Highlight last visited link','Enable copying / restoring POIs','Activate browsing history','Allow objects selection from history');
        }
        // Then running

        enhancedSearch();
        BKMtableCountries();
        BKMcss();
        checkPOI();
        checkReminder();
        W.map.events.register('moveend', W.map, mapLoaded);
        W.model.actionManager.events.register("afterclearactions", null, enhancedSearch);
        window.setInterval(checkPermaLink, 1000);
        window.setInterval(checkReminder, 60000);

        function enhancedSearch(){
            setTimeout(function () {
                BKMmapSearch = getElementsByClassName('search-query', getId('search')) [0];
                if (typeof (BKMmapSearch) === 'undefined') { if (debug) { console.info('WME Bookmarks - BKMmapSearch : NOK'); } setTimeout(enhancedSearch, 500); return; }
                BKMmapSearch.placeholder = lang[17];
                BKMmapSearch.removeEventListener('paste', BKMPastePerma, false);
                BKMmapSearch.addEventListener('paste', BKMPastePerma, false);
            }, 100);
        }
    }
    function BKMtableCountries() {
        if (localStorage.WMEBookmarks) {
            var a = JSON.parse(localStorage.WMEBookmarks);
            for (var p in a) {
                if(!a.hasOwnProperty(p)) continue;
                var pays = a[p].country;
                if (pays && pays.length > 0) {
                    if (countries.indexOf(pays) == - 1) { countries.push(pays); }
                }
            }
            if (debug) { console.log('WME Bookmarks : Mains Countries listed', countries); }
            select(countries, 'selectCountry');
        }
        if (localStorage.WMEBookmarksShared) {
            var b = JSON.parse(localStorage.WMEBookmarksShared);
            for (var p in b) {
                if(!b.hasOwnProperty(p)) continue;
                var pays = b[p].country;
                if (pays && pays.length > 0) {
                    if (countriesS.indexOf(pays) == - 1) { countriesS.push(pays); }
                }
            }
            if (debug) { console.log('WME Bookmarks : Shared Countries listed', countriesS); }
            select(countriesS, 'selectCountryS');
        }
    }
    function BKMcss() {
        var Scss = document.createElement('style');
        Scss.type = 'text/css';
        var css = '.BKMbutton {float:left;margin-right:5px;color:#7f0;cursor:pointer;}';
        css += '#divContent {box-shadow: 0 4px 10px #aaa;}';
        css += '.BKMbuttonSync {padding:6px 10px;border-radius:5px;border:2px solid #C2C2C2;background-color:#CBCBCB;cursor:pointer;}';
        css += '.BKMbuttonSync:hover {background-color:#93C4D3;}';
        css += '.divHead {clear:both;height:28px;padding-left:5px;font-weight:bold;background-color:#CBCBCB;}';
        css += '.divHeadName {float:left;text-align:left;vertical-align:bottom;}';
        css += '.divHeadCountry {float:right;}';
        css += '#selectCountry, #selectCountryS {height:22px;background-color:#CBCBCB;border:0;}';
        css += '.divBKM {clear:both;line-height:21px;height:24px;border:1px solid #ededed;border-top:0;background-color:#ffffff;}';
        css += '.divName {float:left;text-align:left;padding-left:5px;padding-top:2px;}';
        css += '.divName a {text-decoration:none;}';
        css += '.divIcons {float:right;height:16px;}';
        css += '.divSubMenu {float:right;height:24px;min-width:60px;}';
        css += '#BKMedit {clear:both;display:none;margin-bottom:10px;height:133px;border:2px solid #C2C2C2;box-shadow: 0 4px 10px #aaa;}';
        css += '.divEditTitre {line-height:24px;height:24px;border-bottom:1px solid #C2C2C2;}';
        css += '.divEdit {float:left;width:50px;height:23px;text-align:left;padding-left:5px;font-weight:bold;background-color:#CBCBCB;}';
        css += '#divEditName {float:left;width:190px;height:22px;padding:0;padding-left:5px;border:0;margin:0;}';
        css += '#divComm {float:left;width:100%;line-height:24px;height:23px;padding-left:5px;text-align:left;font-weight:bold;background-color:#CBCBCB;border-bottom:1px solid #C2C2C2;}';
        css += '#divCommEdit {float:left;width:100%;height:81px;border:0;margin:0;padding:2px;resize:none;}';
        css += '#divBackupTxt, #divSettingsContent {width:279px;min-height:150px;margin:2px 0 10px;resize:none;background-color:white;border:2px solid #C2C2C2;font-size:12px;}';
        css += '#divShareTxt {float:left;width:100%;height:118px;resize:none;margin-bottom:5px;border:0;border-bottom:1px solid #C2C2C2;}';
        css += '.divComment {clear:both;position:relative;top:1px;display:none;padding:1px 0 3px 20px;text-align:left;background-color:#dddddd;border-bottom:1px solid #C2C2C2;}';
        css += '.BKMsync {padding: 5px 15px;}';
        css += '#divBackup p, #BKMedit p, #divSettings p {margin:0;line-height:20px;text-align:justify;padding:5px;font-size:11px;}';
        css += '.fabkm {font-size:16px;padding:6px 4px;}';
        css += '.iconPoint, .iconZone {float:left; margin-left:2px; background-image:url(//editor-assets.waze.com/production/img/toolbarcad3e904c322a28bc0d9d3f9a9b06f8c.png);}'
        css += '.iconPoint {background-position:-50px 0px; width:16px; height:16px; margin-top:2px;}'
        css += '.iconZone {background-position:0px 0px; width:17px; height:21px;}';
        Scss.innerHTML = css;
        document.body.appendChild(Scss);
        BKMmainHtml();
    }
    function BKMmainHtml() {
        var settings = JSON.parse(localStorage.WMEBookmarksSettings);
        //Create content for Prev/Next actions
        var prev=document.createElement('div');
        prev.id='prevIcon';
        (settings.histonav === true ? prev.style.display='block' : prev.style.display='none');
        prev.className='toolbar-button toolbar-button-with-label ItemDisabled';
        prev.innerHTML='<div class="item-container"><div class="item-icon w-icon" title="Previous"><span class="fa fa-chevron-left"></span></div></div>';
        BKMEditHandle.children[0].insertBefore(prev, getElementsByClassName('waze-icon-trash', BKMEditHandle.children[0])[0]);
        getId('prevIcon').onclick=NavPrev;

        var next=document.createElement('div');
        next.id='nextIcon';
        (settings.histonav === true ? next.style.display='block' : next.style.display='none');
        next.className='toolbar-button toolbar-button-with-label ItemDisabled';
        next.innerHTML='<div class="item-container"><div class="item-icon w-icon" title="Next"><span class="fa fa-chevron-right"></span></div></div>';
        BKMEditHandle.children[0].insertBefore(next, getElementsByClassName('waze-icon-trash', BKMEditHandle.children[0])[0]);
        getId('nextIcon').onclick=NavNext;

        //Create content in favorite's tab
        var newTab = document.createElement('li');
        newTab.innerHTML = '<a href="#sidepanel-bookmarks" data-toggle="tab" id="tabBKM"><span class="fa fa-star" title="Bookmarks"></span></a>';
        BKMhandleClass.appendChild(newTab);
        var addon = document.createElement('section');
        addon.id = 'bookmarks-addon';
        // Bookmarks header
        var content = '<div style="float:left;margin-left:5px;"><b><a href="https://greasyfork.org/scripts/4515-wme-bookmarks" target="_blank"><u>WME Bookmarks</u></a></b> v' + BKMversion + '</div>';
        content += '<div style="clear:both;float:left;width:100%;margin:5px;">';
        content += '<div style="float:left;width:34px;"><span id="iconBookmarks" class="fabkm fa fa-star" title="' + lang[0] + '" style="color:#36c;font-size:20px;"></span></div>';
        content += '<div id="shareButton" style="float:left;width:34px;"><span id="iconShare" class="fabkm fa fa-share-alt-square" title="' + lang[1] + '" style="color:#bbb;font-size:20px;"></span></div>';
        content += '<div style="float:left;width:34px;"><span id="iconHisto" class="fabkm fa fa-history" title="' + lang[3] + '" style="color:#bbb;font-size:20px;"></span></div>';
        content += '<div id="copypButton" style="float:left;width:34px;"><span id="iconCopy" class="fabkm fa fa-copy" title="' + lang[7] + '" style="color:#bbb;font-size:20px;"></span></div>';
        content += '<div style="float:left;width:34px;"><span id="iconBackup" class="fabkm fa fa-cube  " title="' + lang[4] + '" style="color:#bbb;font-size:20px;"></span></div>';
        content += '<div style="float:left;width:34px;"><span id="iconSettings" class="fabkm fa fa-sliders" title="' + lang[22] + '" style="color:#bbb;font-size:20px;"></span></div>';
        content += '</div><div style="clear:both;"></div><div id="BKMedit"></div>'; // Edit and Share containers
        content += '<div id="divContent">'; // Principal container
        // Bookmarks tab
        content += '<div id="divBookmarks" style="margin-bottom:30px;visibility:hidden;"><div class="divHead" id="divBookmarksHead">';
        content += '<div class="divHeadName"><span class="fabkm fa fa-star"></span>' + lang[6] + 's</div>';
        content += '<div class="divHeadCountry"><select type="text" name="Country" id="selectCountry"></select></div>';
        content += '</div><div id="divBookmarksContent"></div></div>';
        // Friends Share tab
        content += '<div id="divShare" style="margin-bottom:10px;visibility:hidden;"><div class="divHead" id="divShareHead">';
        content += '<div class="divHeadName"><span class="fabkm fa fa-share-alt-square"></span>' + lang[1] + '</div>';
        content += '<div class="divHeadCountry"><select type="text" name="Country" id="selectCountryS"></select></div>';
        content += '</div><div id="divShareContent"></div></div>';
        // Historic tab
        content += '<div id="divHisto" style="margin-bottom:10px;visibility:hidden;"><div class="divHead">';
        content += '<div class="divHeadName"><span class="fabkm fa fa-history"></span>' + lang[3] + '</div>';
        content += '</div><div id="divHistoContent"></div></div>';
        // Copy/paste tab
        content += '<div id="divCopy" style="margin-bottom:10px;visibility:hidden;"><div class="divHead" id="divCopyHead">';
        content += '<div class="divHeadName"><span class="fabkm fa fa-copy"></span>'+lang[7]+'</div>';
        content += '</div><div id="divCopyContent"></div></div>';
        // Backup tab
        content += '<div id="divBackup" style="margin-bottom:10px;visibility:hidden;"><div class="divHead">';
        content += '<div class="divHeadName"><span class="fabkm fa fa-cube"></span>' + lang[4] + '</div>';
        content += '<div class="divIcons"><a href="#"><span id="backupValid" class="fabkm fa fa-check" title="' + lang[4] + '" style="color:#0b0;"></a></div></div>';
        content += '<input type="radio" id="bckNew" name="typeBck" ' + (settings.backup=="new" ? ' checked' : '') + ' value="new" style="margin-left: 40px;" /> '+ tset[9];
        content += '<input type="radio" id="bckAdd" name="typeBck" ' + (settings.backup=="add" ? ' checked' : '') + ' value="add" style="margin-left: 40px;" /> '+ tset[10];
        content += '<textarea id="divBackupTxt"></textarea><p><span class="fabkm fa fa-info-circle" style="padding:0;color:#36c;"></span>' + text1 + '</p></div>';
        // Settings tab
        content += '<div id="divSettings" style="margin-bottom:10px;visibility:hidden;"><div class="divHead">';
        content += '<div class="divHeadName"><span class="fabkm fa fa-sliders"></span>' + lang[22] + '</div>';
        content += '</div><div id="divSettingsContent" style="padding:3px;line-height:22px;">';
        content += '<input type="checkbox" id="chkSort" ' + (settings.sort ? ' checked' : '') + ' /> ' + tset[6] + '<br />';
        content += '<input type="checkbox" id="chkZoom" ' + (settings.zoom ? ' checked' : '') + ' /> ' + tset[0] + '<br />';
        content += '<input type="checkbox" id="chkLayers" ' + (settings.layers ? ' checked' : '') + ' /> ' + tset[1] + '<br />';
        content += '<input type="checkbox" id="chkLayersPaste" ' + (settings.layersPaste ? ' checked' : '') + ' /> ' + tset[7] + '<br />';
        content += '<input type="checkbox" id="chkServer" ' + (settings.server ? ' checked' : '') + ' /> ' + tset[2] + '<br />';
        content += '<input type="checkbox" id="chkSynchro" ' + (settings.synchro ? ' checked' : '') + ' /> ' + tset[3] + '<br />';
        content += '<input type="checkbox" id="chkLastClic" ' + (settings.lclic ? ' checked' : '') + ' /> ' + tset[11] + '<br />';
        content += '<input type="checkbox" id="chkCopyPaste" ' + (settings.lcopy ? ' checked' : '') + ' /> ' + tset[12] + '<br />';
        content += '<input type="button" id="razButton1" value="" style="height: 13px;" /> ' + tset[4] + '<br />';
        content += '<input type="button" id="razButton2" value="" style="height: 13px;" /> ' + tset[5] + '<br />';
        content += '<input type="button" id="razButton3" value="" style="height: 13px;" /> ' + tset[8] + '<br /><hr style="margin:5px 0;border-top:1px solid #ededed;" />';
        content += '<input type="checkbox" id="chkHistoNav" ' + (settings.histonav ? ' checked' : '') + ' /> ' + tset[13] + '<br />';
        content += '<input type="checkbox" id="chkHistoSelect" ' + (settings.histoselect ? ' checked' : '') + ' /> ' + tset[14] + '<br />';


        content += '</div><p><span class="fabkm fa fa-info-circle" style="padding:0;color:#36c;"></span>' + text3 + '</p></div></div>';
        addon.innerHTML = content;
        addon.id = 'sidepanel-bookmarks';
        addon.className = 'tab-pane';
        BKMhandleClass2.appendChild(addon);
        // Tabs actions
        select(countries, 'selectCountry');
        select(countriesS, 'selectCountryS');
        bookmarksToggle();
        getId('iconBookmarks').onclick = (function () { bookmarksToggle(); });
        getId('iconShare').onclick = (function () { shareToggle(); });
        getId('iconHisto').onclick = (function () { histoToggle(); });
        getId('iconCopy').onclick = (function () { copyToggle(); });
        getId('iconBackup').onclick = (function () { backupToggle(); });
        getId('iconSettings').onclick = (function () { settingsToggle(); });
        // Buttons actions
        getId('bckNew').onclick = (function () {
            var a=JSON.parse(localStorage.WMEBookmarksSettings);
            a.backup="new";
            localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
        });
        getId('bckAdd').onclick = (function () {
            var a=JSON.parse(localStorage.WMEBookmarksSettings);
            a.backup="add";
            localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
        });
        getId('chkSort').onclick = (function () {
            var a=JSON.parse(localStorage.WMEBookmarksSettings);
            (getId('chkSort').checked ? a.sort=true : a.sort=false)
            localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
        });
        getId('chkZoom').onclick = (function () {
            var a=JSON.parse(localStorage.WMEBookmarksSettings);
            (getId('chkZoom').checked ? a.zoom=true : a.zoom=false)
            localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
        });
        getId('chkLayers').onclick = (function () {
            var a=JSON.parse(localStorage.WMEBookmarksSettings);
            (getId('chkLayers').checked ? a.layers=true : a.layers=false)
            localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
        });
        getId('chkLayersPaste').onclick = (function () {
            var a=JSON.parse(localStorage.WMEBookmarksSettings);
            (getId('chkLayersPaste').checked ? a.layersPaste=true : a.layersPaste=false)
            localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
        });
        getId('chkServer').onclick = (function () {
            var a=JSON.parse(localStorage.WMEBookmarksSettings);
            (getId('chkServer').checked ? a.server=true : a.server=false)
            localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
        });
        getId('chkSynchro').onclick = (function () {
            var a=JSON.parse(localStorage.WMEBookmarksSettings);
            if (getId('chkSynchro').checked) {
                a.synchro=true;
                $('#iconShare').css('display', 'block');
                $('#shareButton').animate({ width: '34px' }, 250);
            } else {
                a.synchro=false;
                $('#shareButton').animate({ width: '0' }, 250);
                $('#iconShare').css('display', 'none');
            }
            localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
        });
        getId('chkLastClic').onclick = (function () {
            var a=JSON.parse(localStorage.WMEBookmarksSettings);
            (getId('chkLastClic').checked ? a.lclic=true : a.lclic=false)
            localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
        });
        getId('chkCopyPaste').onclick = (function () {
            var a=JSON.parse(localStorage.WMEBookmarksSettings);
            if (getId('chkCopyPaste').checked) {
                a.lcopy=true;
                $('#iconCopy').css('display', 'block');
                $('#copypButton').animate({ width: '34px' }, 250);
            } else {
                a.lcopy=false;
                $('#copypButton').animate({ width: '0' }, 250);
                $('#iconCopy').css('display', 'none');
            }
            localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
        });
        getId('razButton1').onclick = (function () {
            var answer = window.confirm(tset[4] + ' ?');
            if (answer) {
                localStorage.setItem('WMEBookmarks', '[]');
                BKMtableCountries();
                select(countries, 'selectCountry');
            }
        });
        getId('razButton2').onclick = (function () {
            var answer = window.confirm(tset[5] + ' ?');
            if (answer) { initBookmarks(); }
        });
        getId('razButton3').onclick = (function () {
            var answer = window.confirm(tset[8] + ' ?');
            if (answer) { localStorage.setItem('WMEHistoric', '[]'); }
        });
        getId('chkHistoNav').onclick = (function () {
            var a=JSON.parse(localStorage.WMEBookmarksSettings);
            if (getId('chkHistoNav').checked) {
                a.histonav=true;
                $('#prevIcon').css('display', 'block');
                $('#nextIcon').css('display', 'block');
            } else {
                a.histonav=false;
                $('#prevIcon').css('display', 'none');
                $('#nextIcon').css('display', 'none');
            }
            localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
        });
        getId('chkHistoSelect').onclick = (function () {
            var a=JSON.parse(localStorage.WMEBookmarksSettings);
            (getId('chkHistoSelect').checked ? a.histoselect=true : a.histoselect=false)
            localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
        });

        if (debug) { console.info('WME Bookmarks HTML loaded'); }
        // Button on the map
        setTimeout(function () {
            var addNodeButton = document.createElement('div');
            addNodeButton.id = 'addNodeButton';
            addNodeButton.className = 'fabkm fa fa-thumb-tack BKMbutton';
            addNodeButton.onclick = BKMinsertPermalink;
            getElementsByClassName('topbar')[0].insertBefore(addNodeButton,getElementsByClassName('location-info-region')[0]);
            getElementsByClassName('topbar')[0].style.padding = '0 10px';
            addNodeButton.onmouseover = (function () { getId('addNodeButton').style.opacity = '1'; });
            addNodeButton.onmouseout = (function () { getId('addNodeButton').style.opacity = '0.6'; });
        }, 1000);

        if (getId('chkSynchro').checked === false) {
            $('#iconShare').css('display', 'none');
            $('#shareButton').animate({ width: '0' }, 250);
        }

        if (getId('chkCopyPaste').checked === false) {
            $('#iconCopy').css('display', 'none');
            $('#copypButton').animate({ width: '0' }, 250);
        }

        BMKcheckAutoSave();
        BKMaddButtonIfLoad();
        timer = setTimeout(BKMcheckActiveCountry, 5000);

        //Bookmarks Layer
        createToggler();
        checklayer("__WME_Bookmarks");
        (JSON.parse(localStorage.WMEBookmarksSettings).showBookmark == true ? getId('layer-switcher-item_WME_bookmarks').checked=true : false);
        bookmarks_Layer.setVisibility(JSON.parse(localStorage.WMEBookmarksSettings).showBookmark);
    }

    // ***************
    // ** BOOKMARKS **
    // ***************

    function initBookmarks() {
        if (debug) { console.log('WME Bookmarks: Send: ' + BKMusername + ' to init'); }
        var params = {
            url: 'http://limageenboite.fr/bkm.php?initbookmarks=' + BKMusername,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: null,
            method: 'POST'
        };
        BKMDownloadHelper.add(params, function (data) {
            if (debug) { console.log('WME Bookmarks: Server Response: ', data); }
            if (data.status == 'success') {
                if (data.data != 'Check') {
                    getId('divBookmarksHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span><span style="color:red;">' + lang[19] + '</span></div>';
                    setTimeout(getBookmarks, 1000);
                } else {
                    getId('divBookmarksHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span><span style="color:darkgreen;">' + lang[20] + '</span></div>';
                    BKMaddButtonIfLoad();
                    setTimeout(reloadHtmlBookmarks, 1000);
                }
            }
        });
    }
    function getBookmarks() {
        var listFav = localStorage.WMEBookmarks;
        var params = {
            url: 'http://limageenboite.fr/bkm.php?getbookmarks=' + BKMusername,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: null,
            method: 'GET'
        };
        BKMDownloadHelper.add(params, function (data) {
            if (data.status == 'success') {
                if (isJsonString(data.data)) {
                    var s1 =  JSON.stringify(JSON.parse(data.data), Object.keys(JSON.parse(data.data)).sort());
                    var s2 =  JSON.stringify(JSON.parse(listFav), Object.keys(JSON.parse(listFav)).sort());
                    if ((s1 == s2) !== true && data.data && getId('chkSynchro').checked === true) {
                        if (debug) { console.log('WME Bookmarks: From BKM Server: ', decodeURIComponent(data.data.replace(/\\x/g, '%'))); }
                        if (debug) { console.log('WME Bookmarks: From BKM local : ', listFav); }
                        clearTimeout(timer);
                        $('addNodeButton').hide();
                        getId('addNodeButton').style.height='0';
                        getId('divBookmarksHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span>' + lang[5] + '</div><div class="divIcons"><span id="SyncCancel" class="fabkm fa fa-window-close" title="' + lang[9] + '" style="color:red;"></span></div>';
                        if (data.data != '[]') {
                            var servToPC = '<div id="serv2Loc" class="BKMbuttonSync" style="float:left;"><span class="fabkm fa fa-cloud"></span> <span class="fabkm fa fa-chevron-circle-right" style="font-size:20px;color:#36c;"></span> <span class="fabkm fa fa-laptop"></span></div>';
                        }  else { var servToPC = ''; }
                        if (listFav != '[]') {
                            var PCToServ = '<div id="loc2Serv" class="BKMbuttonSync" style="float:right;"><span class="fabkm fa fa-laptop"></span> <span class="fabkm fa fa-chevron-circle-right" style="font-size:20px;color:#36c;"></span> <span class="fabkm fa fa-cloud"></span></div>';
                        } else { var PCToServ = ''; }
                        getId('divBookmarksContent').innerHTML = '<div class="BKMsync" style="clear:both;height:60px;"><div class="BKMsync">'+ servToPC + PCToServ +'</div>';
                        if (getId('serv2Loc')) getId('serv2Loc').onclick = (function(){serv2Loc(data.data);});
                        if (getId('loc2Serv')) getId('loc2Serv').onclick = (function(){loc2Serv();});
                    }
                    else {
                        reloadHtmlBookmarks();
                        if (debug) { console.log('WME Bookmarks: Bookmarks Sync !'); console.log(JSON.stringify(JSON.parse(listFav))); }
                    }
                } else {
                    if (debug) { console.log('WME Bookmarks: Server not responding or data corrupted'); }
                    clearTimeout(timer);
                    $('addNodeButton').hide();
                    getId('addNodeButton').style.height='0';
                    getId('divBookmarksHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span>' + lang[5] + '</div><div class="divIcons"><a href="#"><span id="SyncCancel" class="fabkm fa fa-window-close" title="' + lang[9] + '" style="color:red;"></span></a></div>';
                    getId('divBookmarksContent').innerHTML = '<div class="BKMsync" style="padding-bottom:20px;"><div id="servhs" class="BKMbuttonSync" style="background-color:#F77;"><span style="color:red;">Error</span> <span style="font-size:10px;">Server not responding or data corrupted<br/>Click me for desync</span></div></div>';
                    getId('servhs').onclick = (function () {
                        var a=JSON.parse(localStorage.WMEBookmarksSettings);
                        a.synchro=false;
                        $('#iconShare').animate({ width: '0' }, 200);
                        $('#shareButton').animate({ width: '0' }, 250);
                        localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
                        reloadHtmlBookmarks();
                        getId('chkSynchro').checked=false;
                    });
                }
            }
        }, null);
        function serv2Loc(data) {
            localStorage.setItem('WMEBookmarks', data);
            BKMaddButtonIfLoad();
            reloadHtmlBookmarks();
        }
        function loc2Serv() {
            getId('divBookmarksContent').innerHTML = '';
            BKMaddButtonIfLoad();
            BKMpostBookmarks();
        }
    }
    function reloadHtmlBookmarks() {
        var content = '<div class="divHeadName"><span class="fabkm fa fa-star" style="font-size:16px;padding:6px;"></span>' + lang[6] + 's</div>';
        content += '<div class="divHeadCountry"><select type="text" name="Country" id="selectCountry"></select></div>';
        getId('divBookmarksHead').innerHTML = content;
        select(countries, 'selectCountry');
        getId('selectCountry').addEventListener("change", (function () {
            clearTimeout(timer);
            BKMcheckActiveCountry();
            BKMcountryActive = getId('selectCountry').value;
            getId('divBookmarksContent').innerHTML = '';
            loadBookmarks('WMEBookmarks', 'divBookmarksContent');
        }));
        getId('divBookmarksContent').innerHTML = '';
        loadBookmarks('WMEBookmarks', 'divBookmarksContent');
        BKMtableCountries();
    }
    function BKMpostBookmarks() {
        var a = JSON.parse(localStorage.WMEBookmarks), toSave=[];
        for (var p in a) {
            if(!a.hasOwnProperty(p)) continue;
            var bNew={};
            bNew.country=encodeURIComponent(a[p].country);
            bNew.name=encodeURIComponent(a[p].name);
            bNew.perma=a[p].perma;
            bNew.comm=encodeURIComponent(a[p].comm);
            bNew.share=a[p].share;
            bNew.reminder=a[p].reminder;
            toSave.push(bNew);
        }
        if (debug) { console.log('WME Bookmarks: Send Data: ', JSON.stringify(toSave)); }
        var params={
            url: "http://limageenboite.fr/bkm.php",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: "nickname="+BKMusername+"&postbookmarks=" + JSON.stringify(toSave),
            method: 'POST'
        };
        BKMDownloadHelper.add(params, function (data) {
            if (debug) { console.log('WME Bookmarks: Server Response: ', data); }
            if (data.status == 'success') {

                if (data.data != 'Check') {
                    getId('divBookmarksHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span><span style="color:red;">' + lang[19] + '</span></div>';
                    setTimeout(getBookmarks, 1000);
                } else {
                    getId('divBookmarksHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span><span style="color:darkgreen;">' + lang[20] + '</span></div>';
                    BKMaddButtonIfLoad();
                    setTimeout(reloadHtmlBookmarks, 1000);
                }
            }
        });
    }
    function BKMupdateBookmarks(action, owner, data, arg) {
        var bNew = {};
        bNew.action=action;
        bNew.owner=owner;
        bNew.arg=arg;
        bNew.data=data;
        if (debug) { console.log('WME Bookmarks: Send Update: ', bNew); }
        var params={
            url: "http://limageenboite.fr/bkm.php",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: "addbookmark=" + JSON.stringify(bNew),
            method: 'POST'
        };
        BKMDownloadHelper.add(params, function (data) {
            if (debug) { console.log('WME Bookmarks: Server Response: ', data); }
            if (data.status == 'success') {
                if (data.data != 'Check') {
                    getId('divBookmarksHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span><span style="color:red;">' + lang[19] + '</span></div>';
                    setTimeout(getBookmarks, 1000);
                } else {
                    getId('divBookmarksHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span><span style="color:darkgreen;">' + lang[20] + '</span></div>';
                    BKMaddButtonIfLoad();
                    setTimeout(reloadHtmlBookmarks, 1000);
                }
            }
        });
    }
    function BKMtableHtml(container, data, i) { // Bookmarks & Share table (HTML);
        var div = document.createElement('div');
        div.className = 'divBKM';
        div.id = container + i;
        //(data.comm != '' ? div.style.backgroundColor = '#e0fffc' : div.style.backgroundColor = '#ffffff');
        getId(container).appendChild(div);

        //NAME
        var divName = document.createElement('div');
        divName.className = 'divName';
        var divNameA = document.createElement('a');
        divNameA.href = '#';
        divNameA.id='link'+i;
        divNameA.innerHTML = '<b>' + data.name.substring(0, 26) + '</b>';
        divNameA.onclick = (function() { BKMjump(data.country,data.perma,divNameA.id); });
        if (getId('chkLastClic').checked) {
            var a=JSON.parse(localStorage.WMEBookmarksSettings);
            if (divNameA.id===a.lastclic) { divNameA.style.color='#26BAE8'; a.lastclic=divNameA.id; }
            localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
        }
        if (data.comm != '') {
            divNameA.onmouseover = (function () {
                getId(container + i).style.backgroundColor = '#CBCBCB';
                getId(container + i).style.borderBottom = '1px dashed #ededed';
                getId(container + '_Comm_' + i).style.display = 'block';
            });
            divNameA.onmouseout = (function () {
                getId(container + i).style.backgroundColor = '#e0fffc';
                getId(container + i).style.borderBottom = '1px solid #ededed';
                getId(container + '_Comm_' + i).style.display = 'none';
            });
        }
        divName.appendChild(divNameA);
        div.appendChild(divName);

        // SUBMENU
        var divSubMenu = document.createElement('div');
        divSubMenu.className = 'divSubMenu';
        divSubMenu.onmouseover = (function () {
            divMainMenu.style.display='block';
            divSubMenu.style.display='none';
        });
        div.appendChild(divSubMenu);

        var divSubExpand = document.createElement('div');
        var divSubExpandA = document.createElement('a');
        divSubExpand.className = 'divIcons';
        divSubExpandA.innerHTML = '<span class="fabkm fa fa-ellipsis-v" style="color:#BBB;"></span>';
        divSubExpand.appendChild(divSubExpandA);
        divSubMenu.appendChild(divSubExpand);
        if (data.comm != '') {
            var divSubComment = document.createElement('div');
            var divSubCommentA = document.createElement('a');
            divSubComment.className = 'divIcons';
            divSubCommentA.innerHTML = '<span class="fabkm fa fa-sticky-note" title="' + data.comm + '" style="color:#36c;"></span>';
            divSubComment.appendChild(divSubCommentA);
            divSubMenu.appendChild(divSubComment);
        }
        if (typeof(data.reminder) != "undefined" && data.reminder != null && data.reminder != "") {
            var divSubReminder = document.createElement('div');
            var divSubReminderA = document.createElement('a');
            divSubReminder.className = 'divIcons';
            divSubReminderA.innerHTML = '<span class="fabkm fa fa-clock-o" title="'+lang[24]+'" style="color:#36c;" id="iconReminder_' + i + '"></span>';
            divSubReminder.appendChild(divSubReminderA);
            divSubMenu.appendChild(divSubReminder);
        }
        if (data.share != '') {
            var divSubShare = document.createElement('div');
            var divSubShareA = document.createElement('a');
            divSubShare.className = 'divIcons';
            divSubShareA.innerHTML = '<span class="fabkm fa fa-share-alt-square" title="' + lang[12] + '" style="color:#36c;"></span>';
            divSubShare.appendChild(divSubShareA);
            divSubMenu.appendChild(divSubShare);
        }

        // MENU
        var divMainMenu = document.createElement('div');
        divMainMenu.className = 'divSubMenu';
        divMainMenu.style.display = 'none';
        divMainMenu.onmouseleave = (function () {
            divMainMenu.style.display='none';
            divSubMenu.style.display='block';
        });
        div.appendChild(divMainMenu);

        // COMMENT
        var divComment = document.createElement('div');
        divComment.className = 'divIcons';
        var divCommentA = document.createElement('a');
        if (data.comm != '') {
            divCommentA.innerHTML = '<span class="fabkm fa fa-sticky-note" title="' + data.comm + '" style="color:#36c;"></span>';
            divCommentA.onmouseover = (function () {
                getId(container + i).style.backgroundColor = '#CBCBCB';
                getId(container + i).style.borderBottom = '1px dashed #77aacc';
                getId(container + '_Comm_' + i).style.display = 'block';
            });
            divCommentA.onmouseout = (function () {
                getId(container + i).style.backgroundColor = '#e0fffc';
                getId(container + i).style.borderBottom = '1px solid #ededed';
                getId(container + '_Comm_' + i).style.display = 'none';
            });
        }
        else {
            divCommentA.innerHTML = '<span class="fabkm fa fa-sticky-note" title="' + lang[10] + '" style="color:#bbb;"></span>';
        }
        divCommentA.href = '#';
        divCommentA.onclick = (function () {
            getId('BKMedit').style.height = '133px';
            BKMhtmlEditName(container, data);
        });
        divComment.appendChild(divCommentA);
        divMainMenu.appendChild(divComment);

        // RELOCATE
        var divLocate = document.createElement('div');
        divLocate.className = 'divIcons';
        var divLocateA = document.createElement('a');
        divLocateA.innerHTML = '<span class="fabkm fa fa-map-marker" title="' + lang[13] + '" style="color:#bbb;" id="iconRelocate_' + i + '"></span>';
        divLocateA.href = '#';
        divLocateA.onclick = (function(){
            getId('iconRelocate_'+i).style.color="#36c";
            setTimeout(function(){ BKMrelocate(data.perma,data.name,i)}, 200);
        });
        divLocate.appendChild(divLocateA);
        divMainMenu.appendChild(divLocate);

        // REMINDER
        var divReminder = document.createElement('div');
        divReminder.className = 'divIcons';
        var divReminderA = document.createElement('a');
        if (typeof(data.reminder) != "undefined" && data.reminder != null && data.reminder != "") {
            var d= new Date(parseInt(data.reminder)).toString(), t=d.split(" ");
            divReminderA.innerHTML = '<span class="fabkm fa fa-clock-o" title="'+t[3]+"-"+pad(new Date(t[1]+'01, 01').getMonth()+1)+"-"+t[2]+" "+t[4].slice(0,5)+'" style="color:#36c;" id="iconReminder_' + i + '"></span>';
        } else {
            divReminderA.innerHTML = '<span class="fabkm fa fa-clock-o" title="'+lang[24]+'" style="color:#bbb;" id="iconReminder_' + i + '"></span>';
        }
        divReminderA.href = '#';
        divReminderA.onclick = (function(){
            getId('iconReminder_'+i).style.color="#36c";
            getId('BKMedit').style.height = '60px';
            BKMhtmlReminder(container, data,i);
        });
        divReminder.appendChild(divReminderA);
        divMainMenu.appendChild(divReminder);

        // SHARE
        if (container == 'divBookmarksContent' && getId('chkSynchro').checked === true) {
            var divShare = document.createElement('div');
            divShare.className = 'divIcons';
            var divShareA = document.createElement('a');
            if (data.share) { divShareA.innerHTML = '<span class="fabkm fa fa-share-alt-square" title="' + data.share + '" style="color:#36c;"></span>'; }
            else { divShareA.innerHTML = '<span class="fabkm fa fa-share-alt-square" title="' + lang[12] + '" style="color:#bbb;"></span>'; }
            divShareA.href = '#';
            divShareA.onclick = (function () {
                getId('BKMedit').style.height = '225px';
                BKMedit(data);
            });
            divShare.appendChild(divShareA);
            divMainMenu.appendChild(divShare);
        }

        // SUPPR
        var divSuppr = document.createElement('div');
        divSuppr.className = 'divIcons';
        var divSupprA = document.createElement('a');
        if (container == 'divShareContent') { divSupprA.innerHTML = '<span class="fabkm fa fa-share-alt-square" title="' + lang[21] + '" style="color:red;"></span>'; }
        else { divSupprA.innerHTML = '<span class="fabkm fa fa-times" title="' + lang[11] + '" style="color:red;"></span>'; }
        divSupprA.href = '#';
        divSupprA.onclick = (function(){BKMsuppr(data.name,data.perma,container);});
        divSuppr.appendChild(divSupprA);
        divMainMenu.appendChild(divSuppr);

        //COMMENT TEXT
        var divSeeComment = document.createElement('div');
        divSeeComment.className = 'divComment';
        divSeeComment.id = container + '_Comm_' + i;
        divSeeComment.innerHTML = data.comm;
        div.appendChild(divSeeComment);
    }

    // ***************
    // **  SHARED   **
    // ***************

    function getShared() {
        var listFav = localStorage.WMEBookmarksShared;
        var params = {
            url: 'http://limageenboite.fr/bkm.php?getshared='+ BKMusername,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: null,
            method: 'GET'
        };
        BKMDownloadHelper.add(params, function (data) {
            if (data.status == 'success') {
                var s1 =  JSON.stringify(JSON.parse(data.data), Object.keys(JSON.parse(data.data)).sort());
                var s2 =  JSON.stringify(JSON.parse(listFav), Object.keys(JSON.parse(listFav)).sort());
                if ((s1 == s2) !== true && data.data && getId('chkSynchro').checked === true) {
                    if (debug) { console.log('WME Bookmarks: From Share Server: ', JSON.parse(data.data)); }
                    if (debug) { console.log('WME Bookmarks: From Share local: ', JSON.parse(listFav)); }
                    localStorage.setItem('WMEBookmarksShared', data.data);
                    reloadHtmlShared();
                } else {
                    reloadHtmlShared();
                    if (debug) { console.log('WME Bookmarks: Shared Sync !'); }
                }
            }
        }, null);
    }
    function BKMedit(data) { //Show Share DIV
        clearTimeout(timer);
        $('#BKMedit').slideDown(200);
        $('#divContent').slideUp(1000);
        var content1 = '<div class="divEditTitre"><div class="divEdit" style="width:80px;">' + lang[6] + '</div><input type="text" id="divEditName" style="width:165px;" value="'+ data.name.replace(/"/g, '&quot;') +'" readonly /><input type="hidden" id="permalink" value="' + data.perma.lon +'|'+ data.perma.lat + '" />';
        content1 += '<div class="divIcons"><a href="#"><span id="shareValid" class="fabkm fa fa-check" title="' + lang[8] + '" style="font-size:16px;padding:6px;color:#0b0;"></a></div>';
        content1 += '</div><textarea id="divShareTxt"></textarea><p><span class="fabkm fa fa-info-circle" title="Info" style="font-size:16px;padding:6px;color:#36c;"></span>' + text2 + '</p>';
        getId('BKMedit').innerHTML = content1;
        if (!data.share) {
            data.share = lang[23];
            getId('divShareTxt').style.color = '#aaa';
        }
        getId('divShareTxt').onclick = (function () {
            if (getId('divShareTxt').value == lang[23]) {
                getId('divShareTxt').value = '';
                getId('divShareTxt').style.color = '#000';
            }
        });
        getId('divShareTxt').innerHTML = data.share;
        getId('divShareTxt').onkeyup = (function () {
            var t = getId('divShareTxt').value;
            if (t === '') { getId('divShareTxt').innerHTML = data.share; }
            getId('divShareTxt').value = t.replace(',', ';').replace(' ', ';').replace(';;', ';');
        });
        getId('shareValid').onclick = (function () {
            data.share = getId('divShareTxt').value;
            if (data.share !== lang[23]) {
                var toSave=[];
                var a = JSON.parse(localStorage.WMEBookmarks);
                for (var p in a) {
                    if(!a.hasOwnProperty(p)) continue;

                    //Redo Bookmark
                    var bNew={};
                    bNew.country=a[p].country;
                    bNew.name=a[p].name;
                    bNew.perma=a[p].perma;
                    bNew.comm=a[p].comm;
                    bNew.reminder=a[p].reminder;
                    if (getId('permalink').value == a[p].perma.lon+'|'+a[p].perma.lat) {
                        bNew.share=data.share;
                        if (getId('chkSynchro').checked === true) {
                            if (debug) { console.log('WME Bookmarks: SHARE', BKMusername, bNew); }
                            BKMupdateBookmarks('SHARE', BKMusername, bNew, '');
                        }
                    } else { bNew.share=a[p].share; }
                    //Store Bookmark
                    toSave.push(bNew);
                }
                localStorage.setItem('WMEBookmarks', JSON.stringify(toSave));
            }
            $('#divContent').slideDown(1000);
            $('#BKMedit').slideUp(500);
        });
        BKMcheckActiveCountry();
        getId('divBookmarksContent').innerHTML = '';
        loadBookmarks('WMEBookmarks', 'divBookmarksContent');
    }
    function reloadHtmlShared() {
        var content = '<div class="divHeadName"><span class="fabkm fa fa-share-alt-square" style="font-size:16px;padding:6px;"></span>' + lang[1] + '</div>';
        content += '<div class="divHeadCountry"><select type="text" name="Country" id="selectCountryS"></select></div>';
        getId('divShareHead').innerHTML = content;
        select(countriesS, 'selectCountryS');
        getId('selectCountryS').addEventListener("change", (function () {
            clearTimeout(timer);
            BKMcheckActiveCountry();
            BKMcountryActive = getId('selectCountryS').value;
            getId('divShareContent').innerHTML = '';
            loadBookmarks('WMEBookmarksShared', 'divShareContent');
        }));
        getId('divShareContent').innerHTML = '';
        loadBookmarks('WMEBookmarksShared', 'divShareContent');
    }

    // ***************
    // **  HISTORY  **
    // ***************

    function BKMaddHisto(perma) { // Add link in historic
        var lStorage=JSON.parse(localStorage.WMEHistoric), bNew={};
        if (Object.keys(lStorage).length >= 30) { lStorage.splice(0, 1); }
        bNew.date=new Date().toLocaleString();
        bNew.perma=perma;
        bNew.name=getName();
        lStorage.push(bNew);
        localStorage.setItem('WMEHistoric', JSON.stringify(lStorage));
        loadBookmarks('WMEHistoric', 'divHistoContent');
    }
    function BKMhistoHtml(data) { // Historic table (HTML)
        var div = document.createElement('div');
        div.className = 'divBKM';
        var divName = document.createElement('div');
        divName.className = 'divName';
        var divNameA = document.createElement('a');
        divNameA.href = '#';
        divNameA.innerHTML = '<font size=-2>'+ data.date +' </font><b>'+ data.name.substring(0, 28) +'</b>';
        divNameA.onclick = (function(){BKMjump(W.model.getTopCountry().name, data.perma,'');});
        divName.appendChild(divNameA);
        div.appendChild(divName);
        // SUPPR
        var divSuppr = document.createElement('div');
        divSuppr.className = 'divIcons';
        var divSupprA = document.createElement('a');
        divSupprA.innerHTML = '<span class="fabkm fa fa-times" title="' + lang[11] + '" style="color:red;"></span>';
        divSupprA.href = '#';
        divSupprA.onclick = (function(){BKMsuppr(data.name,data.perma,'divHistoContent');});
        divSuppr.appendChild(divSupprA);
        div.appendChild(divSuppr);
        getId('divHistoContent').appendChild(div);
    }

    // ***************
    // **  BACKUP   **
    // ***************

    function BKMbackup() {
        var a = localStorage.WMEBookmarks, toshow = '';
        getId('divBackupTxt').value='';
        if (a) {
            a = JSON.parse(a);
            for (var p in a) {
                if(!a.hasOwnProperty(p)) continue;
                var permalink = a[p].perma.lon +"|"+ a[p].perma.lat;
                if (typeof(a[p].perma.zoom) !== 'undefined') { permalink += "|"+ a[p].perma.zoom; } else { permalink += "|"; }
                if (typeof(a[p].perma.layers) !== 'undefined') { permalink += "|"+ a[p].perma.layers; } else { permalink += "|"; }
                // Objects
                if (typeof(a[p].perma.segments) !== 'undefined') { permalink += "|s:"+ a[p].perma.segments; }
                else if (typeof(a[p].perma.nodes) !== 'undefined') { permalink += "|n:"+ a[p].perma.nodes; }
                else if (typeof(a[p].perma.venues) !== 'undefined') { permalink += "|v:"+ a[p].perma.venues; }
                else { permalink += "|"; }
                // New filters
                if (typeof(a[p].perma.env) !== 'undefined') { permalink += "|"+ a[p].perma.env; } else { permalink += "|"; }
                if (typeof(a[p].perma.MP) !== 'undefined') { permalink += "|"+ a[p].perma.MP; } else { permalink += "|"; }
                if (typeof(a[p].perma.UR) !== 'undefined') { permalink += "|"+ a[p].perma.UR; } else { permalink += "|"; }
                if (typeof(a[p].perma.MC) !== 'undefined') { permalink += "|"+ a[p].perma.MC; } else { permalink += "|"; }

                if (typeof(a[p].comm) !== 'undefined') { permalink += ";"+ a[p].comm; } else { permalink += ";"; }
                if (typeof(a[p].share) !== 'undefined') { permalink += ";"+ a[p].share; } else { permalink += ";"; }

                //Push to generate CSV
                toshow += a[p].country +";"+ a[p].name +";"+ permalink +"\n";
            }
            getId('divBackupTxt').value=toshow;
            getId('divBackupTxt').onclick=(function () {
                getId('divBackupTxt').focus();
                getId('divBackupTxt').select();
            });
        }
        getId('backupValid').onclick = backup;
        function backup() {
            if (getId('bckAdd').checked===true) {
                var lStorage=JSON.parse(localStorage.WMEBookmarks);
            } else { //bckNew
                localStorage.setItem('WMEBookmarks', '[]');
                var lStorage=[];
            }
            var a = getId('divBackupTxt').value;
            var b = a.split('\n');

            for (var i=0; b[i]; i++){
                var c = b[i].split(';');
                var bNew ={};
                bNew.country = c[0];
                bNew.name = c[1];
                bNew.perma=BKMconvertPermalink(c[2]);
                bNew.comm = c[3];
                bNew.share = c[4];
                if (lStorage.map(function(e) { return e.perma.lon; }).indexOf(bNew.perma.lon) == -1 && lStorage.map(function(e) { return e.perma.lat; }).indexOf(bNew.perma.lat) == -1) { lStorage.push(bNew); } //Add new entry only
            }
            localStorage.setItem('WMEBookmarks', JSON.stringify(lStorage));
            BKMtableCountries();
            bookmarksToggle();
            if (getId('chkSynchro').checked === true) { BKMpostBookmarks(); }
        }
    }

    // ********************
    // ** COPY/PASTE POI **
    // ********************

    function checkPOI(){
        if ($('#landmark-edit-general').length == 1 && getId('chkCopyPaste').checked) {
            var editLM = $('.geometry-button-region');
            if (editLM.length==1) {
                var copyattribDiv = $('#wme-copyattrib-fr');
                if (copyattribDiv.length==0) {
                    copyattribDiv=document.createElement('div');
                    copyattribDiv.id='wme-copyattrib-fr';
                    $(copyattribDiv).css({'float':'right','padding':'4px','border-radius':'5px','box-shadow':'rgba(0, 0, 0, 0.1) 0px 1px 6px 0px'});
                    editLM[0].parentNode.insertBefore(copyattribDiv, editLM[0].nextSibling);

                    if (localStorage.WMECopyPastePOI.indexOf(W.selectionManager.getSelectedFeatures()[0].model.attributes.id) == "-1") {
                        var copyBtn=document.createElement('span');
                        copyBtn.innerHTML='<i class="fa fa-copy" data-original-title="" title="Copy attributes" style="color:#fff;"></i>';
                        copyBtn.style.margin='0 3px';
                        copyBtn.onclick=CopyAttrib;
                        $(copyattribDiv).css({'background-color':'#26bae8'});
                        copyattribDiv.appendChild(copyBtn);
                    } else {
                        var pasteBtn=document.createElement('span');
                        pasteBtn.innerHTML='<i class="fa fa-paste" data-original-title="" title="Restore attributes" style="color:#555;"></i>';
                        pasteBtn.style.margin='0 3px';
                        pasteBtn.onclick=PasteAttrib;
                        $(copyattribDiv).css({'background-color':'#ffc107'});
                        copyattribDiv.appendChild(pasteBtn);
                    }
                }
            }
        }
        setTimeout(checkPOI, 2000);
    }
    function CopyAttrib(){
        //JSON for POI info
        var PoiAttr={}, venue = W.selectionManager.getSelectedFeatures()[0].model.attributes, lStorage = JSON.parse(localStorage.WMECopyPastePOI);

        //Get geometry
        if (typeof(W.selectionManager.getSelectedFeatures()[0].model.geometry.components) != 'undefined') {
            var currentPOI =  W.selectionManager.getSelectedFeatures()[0].model.geometry.components[0].clone().components;
            var coord, Geo = ""
            for(var i=0; i<currentPOI.length;i++){
                coord = currentPOI[i];
                if(i < currentPOI.length-1){
                    coord = coord.transform(W.map.projection, W.map.displayProjection);
                    Geo += `${coord.x},${coord.y} `;
                }
                PoiAttr.geometry = Geo;
                PoiAttr.geoX = venue.geometry.bounds.right.toString();
                PoiAttr.geoY = venue.geometry.bounds.top.toString();
                PoiAttr.type="zone";
            }
        } else {
            var currentPOI =  W.selectionManager.getSelectedFeatures()[0].model.attributes;
            PoiAttr.geometry = "";
            PoiAttr.geoX = currentPOI.geometry.x.toString();
            PoiAttr.geoY = currentPOI.geometry.y.toString();
            PoiAttr.type="point";
        }
        PoiAttr.id=venue.id;
        PoiAttr.aliases=venue.aliases.toString();
        (venue.brand==null ? PoiAttr.brand = 'null' : PoiAttr.brand = venue.brand)
        PoiAttr.categories=venue.categories.toString();
        PoiAttr.categoryAttributes=JSON.stringify(venue.categoryAttributes);
        PoiAttr.description=venue.description;
        //PoiAttr.entryExitPoints=venue.entryExitPoints.toString();
        PoiAttr.externalProviderIDs=JSON.stringify(venue.externalProviderIDs).replace(/"/g,"");
        (typeof(venue.houseNumber)=="undefined" ? PoiAttr.houseNumber = 'null' : PoiAttr.houseNumber = venue.houseNumber)
        PoiAttr.name=venue.name;
        PoiAttr.openingHours="";
        //for (var i=0; venue.openingHours[i]; i++) { PoiAttr.openingHours = PoiAttr.openingHours + JSON.stringify(venue.openingHours[i]).replace(/"/g,"") + ";"; }
        PoiAttr.openingHours=venue.openingHours.toString();
        (venue.phone==null ? PoiAttr.phone = 'null' : PoiAttr.phone = venue.phone)
        PoiAttr.services=venue.services.toString();
        (venue.url==null ? PoiAttr.url = 'null' : PoiAttr.url = venue.url)

        //Add in localStorage
        lStorage.push(PoiAttr);
        localStorage.setItem('WMECopyPastePOI', JSON.stringify(lStorage));

        if (getId('chkSynchro').checked === true) {
            if (debug) { console.log('WME Bookmarks: ADD Copy Cloud', PoiAttr); }
            BKMupdateCopy('ADD', BKMusername, PoiAttr);
        }
        W.selectionManager.unselectAll();
        getId('tabBKM').click();
        getId('iconCopy').click();
    }
    function PasteAttrib(){
        var a = JSON.parse(localStorage.WMECopyPastePOI);
        var toSave=[];
        for (var i = 0; a[i]; i++) {
            if (JSON.stringify(a[i].id) == JSON.stringify(W.selectionManager.getSelectedFeatures()[0].model.attributes.id)) {
                try {
                    var geom=a[i].geometry; delete(a[i].geometry);
                    delete(a[i].geoX);
                    delete(a[i].geoY);

                    if (a[i].aliases.length == 0) { delete(a[i].aliases); }
                    else { var m=[], n=a[i].aliases.split(","); for (var j = 0; n[j]; j++) { m.push(n[j]); } a[i].aliases = m; }

                    var m=[], n=a[i].categories.split(","); for (var j = 0; n[j]; j++) { m.push(n[j]); }
                    if(m == W.selectionManager.getSelectedFeatures()[0].model.attributes.categories) { delete(a[i].categories); }
                    else { a[i].categories = m; }

                    if (a[i].categoryAttributes == '{}' || a[i].categoryAttributes == 'null') { delete(a[i].categoryAttributes); }
                    if (a[i].brand == 'null') { delete(a[i].brand); }
                    if (a[i].houseNumber == 'null') { delete(a[i].houseNumber); }
                    delete(a[i].externalProviderIDs);
                    delete(a[i].openingHours);
                    if (a[i].phone == 'null') { delete(a[i].phone); }

                    if (a[i].services.length == 0) { delete(a[i].services); }
                    else { var m=[], n=a[i].services.split(","); for (var j = 0; n[j]; j++) { m.push(n[j]); } a[i].services = m; }

                    if (a[i].url == 'null') { delete(a[i].url); }

                    if (a[i].type == "zone") { //restore geometry if zone
                        var lines = geom.split(' ');
                        for(var k=0; k < lines.length; k++){
                            if (lines[k] !== "") {
                                var t=lines[k].split(',');
                                var pt = WazeWrap.Geometry.ConvertTo900913(t[0], t[1]);
                                lines[k] = new OpenLayers.Geometry.Point(pt.lon, pt.lat);
                            }
                        }
                        saveNewPlaceGeometry(lines);
                    }
                    delete(a[i].type);

                    if (debug) { console.log('WME Bookmarks: Paste Attrib', a[i]); }
                    W.model.actionManager.add(new (require("Waze/Action/UpdateObject"))(W.selectionManager.getSelectedFeatures()[0].model, a[i]));
                    BKMupdateCopy('DELETE', BKMusername, a[i].id);
                    delete(a[i].id);

                    getId('tabBKM').click();
                    getId('iconCopy').click();
                }
                catch (err) {
                    console.log("Copy Venue Attributes : Problem", err);
                }
            }
            else {
                toSave.push(a[i]);
            }
        }
        W.selectionManager.unselectAll();
        localStorage.setItem('WMECopyPastePOI', JSON.stringify(toSave));
        loadBookmarks('WMECopyPastePOI', 'divCopyContent');

        function saveNewPlaceGeometry(newGeom){ // PIE Function by JustinS83
            let selected = W.selectionManager.getSelectedFeatures()[0].model;
            let originalGeometry = selected.geometry.clone();
            let ls = new OpenLayers.Geometry.LineString(newGeom);
            let newGeometry = new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(ls.components));
            let UFG = require("Waze/Action/UpdateFeatureGeometry");
            W.model.actionManager.add(new UFG(selected, W.model.venues, originalGeometry, newGeometry));
        }
    }
    function getCopyPaste() {
        var listFav = localStorage.WMECopyPastePOI;
        var params = {
            url: 'http://limageenboite.fr/bkm.php?getcopypaste=' + BKMusername,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: null,
            method: 'GET'
        };
        BKMDownloadHelper.add(params, function (data) {
            if (data.status == 'success') {
                if (isJsonString(data.data)) {
                    var s1 =  JSON.stringify(JSON.parse(data.data), Object.keys(JSON.parse(data.data)).sort());
                    var s2 =  JSON.stringify(JSON.parse(listFav), Object.keys(JSON.parse(listFav)).sort());
                    if ((s1 == s2) !== true && data.data && getId('chkSynchro').checked === true) {
                        if (debug) { console.log('WME Bookmarks: From Copy Server: ', data.data.replace(/\\/g, "")); }
                        if (debug) { console.log('WME Bookmarks: From Copy local : ', listFav); }
                        clearTimeout(timer);
                        $('addNodeButton').hide();
                        getId('addNodeButton').style.height='0';
                        getId('divCopyHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span>' + lang[5] + '</div><div class="divIcons"><span id="SyncCancel" class="fabkm fa fa-window-close" title="' + lang[9] + '" style="color:red;"></span></div>';
                        if (data.data != '[]') {
                            var servToPC = '<div id="serv2Loc" class="BKMbuttonSync" style="float:left;"><span class="fabkm fa fa-cloud"></span> <span class="fabkm fa fa-chevron-circle-right" style="font-size:20px;color:#36c;"></span> <span class="fabkm fa fa-laptop"></span></div>';
                        }  else { var servToPC = ''; }
                        if (listFav != '[]') {
                            var PCToServ = '<div id="loc2Serv" class="BKMbuttonSync" style="float:right;"><span class="fabkm fa fa-laptop"></span> <span class="fabkm fa fa-chevron-circle-right" style="font-size:20px;color:#36c;"></span> <span class="fabkm fa fa-cloud"></span></div>';
                        } else { var PCToServ = ''; }
                        getId('divCopyContent').innerHTML = '<div class="BKMsync" style="clear:both;height:60px;"><div class="BKMsync">'+ servToPC + PCToServ +'</div>';
                        if (getId('serv2Loc')) getId('serv2Loc').onclick = (function(){serv2LocCP(data.data);});
                        if (getId('loc2Serv')) getId('loc2Serv').onclick = (function(){loc2ServCP();});
                    }
                    else {
                        reloadHtmlCopy();
                        if (debug) { console.log('WME Bookmarks: Copy Paste POI Sync !'); }
                    }
                } else {
                    if (debug) { console.log('WME Bookmarks: Server not responding or data corrupted'); }
                    clearTimeout(timer);
                    $('addNodeButton').hide();
                    getId('addNodeButton').style.height='0';
                    getId('divCopyHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span>' + lang[5] + '</div><div class="divIcons"><a href="#"><span id="SyncCancel" class="fabkm fa fa-window-close" title="' + lang[9] + '" style="color:red;"></span></a></div>';
                    getId('divCopyContent').innerHTML = '<div class="BKMsync" style="padding-bottom:20px;"><div id="servhs" class="BKMbuttonSync" style="background-color:#F77;"><span style="color:red;">Error</span> <span style="font-size:10px;">Server not responding or data corrupted<br/>Click me for desync</span></div></div>';
                    getId('servhs').onclick = (function () {
                        var a=JSON.parse(localStorage.WMEBookmarksSettings);
                        a.synchro=false;
                        $('#iconCopy').css('display', 'none');
                        $('#copypButton').animate({ width: '0' }, 250);
                        localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
                        reloadHtmlCopy();
                        getId('chkSynchro').checked=false;
                    });
                }
            }
        }, null);
        function serv2LocCP(data) {
            localStorage.setItem('WMECopyPastePOI', data);
            BKMaddButtonIfLoad();
            reloadHtmlCopy();
        }
        function loc2ServCP() {
            getId('divCopyContent').innerHTML = '';
            BKMaddButtonIfLoad();
            BKMpostCopy();
        }
    }
    function reloadHtmlCopy() {
        var content = '<div class="divHeadName"><span class="fabkm fa fa-star" style="font-size:16px;padding:6px;"></span>' + lang[6] + 's</div>';
        getId('divCopyHead').innerHTML = content;
        getId('divCopyContent').innerHTML = '';
        loadBookmarks('WMECopyPastePOI', 'divCopyContent');
    }
    function BKMpostCopy() {
        var listFav = localStorage.WMECopyPastePOI;
        if (debug) { console.log('WME Copy POI: Send Data: ', JSON.parse(listFav)); }
        var params={
            url: "http://limageenboite.fr/bkm.php",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: "nickname="+BKMusername+"&postcopypaste=" + listFav,
            method: 'POST'
        };
        BKMDownloadHelper.add(params, function (data) {
            if (debug) { console.log('WME Bookmarks: Server Response: ', data); }
            if (data.status == 'success') {

                if (data.data != 'Check') {
                    getId('divCopyHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span><span style="color:red;">' + lang[19] + '</span></div>';
                    setTimeout(getCopyPaste, 1000);
                } else {
                    getId('divCopyHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span><span style="color:darkgreen;">' + lang[20] + '</span></div>';
                    BKMaddButtonIfLoad();
                    setTimeout(reloadHtmlCopy, 1000);
                }
            }
        });
    }
    function BKMupdateCopy(action, owner, data) {
        var bNew = {};
        bNew.action=action;
        bNew.owner=owner;
        bNew.data=data;
        if (debug) { console.log('WME Copy POI: Send Update: ', bNew); }
        var params={
            url: "http://limageenboite.fr/bkm.php",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: "addcopypaste=" + JSON.stringify(bNew),
            method: 'POST'
        };
        BKMDownloadHelper.add(params, function (data) {
            if (debug) { console.log('WME Bookmarks: Server Response: ', data); }
            if (data.status == 'success') {
                if (data.data != 'Check') {
                    getId('divCopyHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span><span style="color:red;">' + lang[19] + '</span></div>';
                    setTimeout(getCopyPaste, 1000);
                } else {
                    getId('divCopyHead').innerHTML = '<div class="divHeadName"><span class="fabkm fa fa-random"></span><span style="color:darkgreen;">' + lang[20] + '</span></div>';
                    BKMaddButtonIfLoad();
                    setTimeout(reloadHtmlCopy, 1000);
                }
            }
        });
    }
    function BKMcopyPasteHtml(data) { // copy paste table (HTML)
        if (data.name ==="") { data.name = '<b>Sans Nom</b> <font size=-2>(ID: '+data.id+')</font>'; }
        else { data.name = '<b>'+ data.name.substring(0, 37) +'</b>' }
        var div = document.createElement('div');

        //Icon
        var icon = document.createElement('div');
        (data.type=="point" ? icon.className = 'iconPoint' : icon.className = 'iconZone')
        div.appendChild(icon);

        //Text
        div.className = 'divBKM';
        var divName = document.createElement('div');
        divName.className = 'divName';
        var divNameA = document.createElement('a');
        divNameA.href = '#';
        divNameA.innerHTML = data.name;
        divNameA.onclick = (function(){
            W.map.setCenter(new OpenLayers.LonLat(parseFloat(data.geoX), parseFloat(data.geoY)));
            objectsIsLoaded('vn:'+ data.id);
        });
        divName.appendChild(divNameA);
        div.appendChild(divName);

        // Suppr
        var divSuppr = document.createElement('div');
        divSuppr.className = 'divIcons';
        var divSupprA = document.createElement('a');
        divSupprA.innerHTML = '<span class="fabkm fa fa-times" title="' + lang[11] + '" style="color:red;"></span>';
        divSupprA.href = '#';
        divSupprA.onclick = (function(){ BKMsuppr(data.name,data,'divCopyContent'); });
        divSuppr.appendChild(divSupprA);
        div.appendChild(divSuppr);

        getId('divCopyContent').appendChild(div);
    }

    // ***************************
    // ** ACTIONS WITH BOOKMARK **
    // ****************************

    function BKMhtmlEditName(container, data) { //Show Edit DIV
        clearTimeout(timer);
        $('#BKMedit').slideDown(200);
        if (container == 'divBookmarksContent') { getId('BKMedit').style.height = '133px'; }
        var content1 = '<div class="divEditTitre"><div class="divEdit">' + lang[6] + '</div><input type="text" id="divEditName" value="' + data.name + '" /><input type="hidden" id="permalink" value="' + data.perma.lon +'|'+ data.perma.lat + '" />';
        content1 += '<div class="divIcons"><a href="#"><span id="EditValid" class="fabkm fa fa-check" title="' + lang[8] + '" style="font-size:16px;padding:6px;color:#0b0;"></a></div>';
        content1 += '</div><div id="divComm">' + lang[14] + '</div></div><textarea id="divCommEdit">';
        if (data.comm === '') { content1 += ''; } else { content1 += data.comm; }
        content1 += '</textarea>';
        getId('BKMedit').innerHTML = content1;
        getId('divEditName').focus();
        getId('divEditName').select();
        getId('EditValid').onclick = (function(){ BKMeditName(container,"name"); });
    }
    function BKMhtmlReminder(container, data,i) { //Show Edit DIV
        clearTimeout(timer);
        $('#BKMedit').slideDown(200);
        var content1 = '<div class="divEditTitre"><div class="divEdit">' + lang[6] + '</div><div>' + data.name + '</div><input type="hidden" id="permalink" value="' + data.perma.lon +'|'+ data.perma.lat + '" />'
        + '<div class="divIcons"><a href="#"><span id="RemCancel" class="fabkm fa fa-close" title="' + lang[9] + '" style="font-size:16px;color:#f00;"></a>'
        + '<a href="#"><span id="RemValid" class="fabkm fa fa-check" title="' + lang[8] + '" style="font-size:16px;color:#0b0;"></a></div><input style="width:135px;" id="remDate" type="date" /><input id="remTime" type="time" /></div></div>';
        getId('BKMedit').innerHTML = content1;
        if (typeof(data.reminder) != "undefined" && data.reminder != null && data.reminder != "") { var d=new Date(parseInt(data.reminder)).toString(); }
        else { var d=new Date().toString(); }
        var t=d.split(" ");
        getId('remDate').value = t[3] + "-" + pad(new Date(t[1]+'01, 01').getMonth()+1) + "-" + t[2];
        getId('remTime').value = t[4].slice(0,5);
        getId('RemValid').onclick = (function(){
            if (getId('remDate').value == "") {
                getId('remDate').value = t[3] + "-" + pad(new Date(t[1]+'01, 01').getMonth()+1) + "-" + t[2];
            }
            if (getId('remDate').value != "") {
                if (getId('remTime').value == "") { getId('remTime').value = "00:00"; }
                BKMeditName(container,"date");
            } else { $('#BKMedit').slideUp(200); }
        });
        getId('RemCancel').onclick = (function(){
            $('#BKMedit').slideUp(200);
            getId('iconReminder_'+i).style.color='#bbb';
        });
    }
    function BKMeditName(container,type) { //Action after editing name or comment (DB)
        $('#BKMedit').slideUp(200);
        var toSave=[];

        //Bookmarks list update
        if (container === 'divBookmarksContent') {
            var a = JSON.parse(localStorage.WMEBookmarks);
            for (var p in a) {
                if(!a.hasOwnProperty(p)) continue;

                //Redo Bookmark
                var bNew={};
                bNew.country=a[p].country;
                bNew.name=a[p].name;
                bNew.perma=a[p].perma;
                bNew.comm=a[p].comm;
                bNew.share=a[p].share;
                bNew.reminder=a[p].reminder;
                if (getId('permalink').value == a[p].perma.lon+'|'+a[p].perma.lat) {
                    if (type == "name") {
                        bNew.name=getId('divEditName').value;
                        bNew.comm=getId('divCommEdit').value;
                    } else { // type = date
                        bNew.reminder=toTimestamp(getId('remDate').value, getId('remTime').value);
                    }
                    if (getId('chkSynchro').checked === true) {
                        if (debug) { console.log('WME Bookmarks: UPDATE', BKMusername, bNew); }
                        BKMupdateBookmarks('UPDATE',BKMusername, bNew, '');
                    }
                }
                //Store Bookmark
                toSave.push(bNew);
            }
            localStorage.setItem('WMEBookmarks', JSON.stringify(toSave));
        }

        //Sharing list update
        else {
            var a = JSON.parse(localStorage.WMEBookmarksShared);
            for (var p in a) {
                if(!a.hasOwnProperty(p)) continue;

                //Redo Bookmark
                var bNew={};
                bNew.owner=a[p].owner;
                bNew.country=a[p].country;
                bNew.name=a[p].name;
                bNew.perma=a[p].perma;
                bNew.comm=a[p].comm;
                bNew.share=a[p].share;
                bNew.reminder=a[p].reminder;
                if (getId('permalink').value == a[p].perma.lon+'|'+a[p].perma.lat) {
                    bNew.name=getId('divEditName').value;
                    bNew.comm=getId('divCommEdit').value;
                    if (getId('chkSynchro').checked === true) {
                        if (debug) { console.log('WME Bookmarks: UPDATE', a[p].owner, bNew); }
                        BKMupdateBookmarks('UPDATE',a[p].owner, bNew, '');
                    }
                }
                //Store Bookmark
                toSave.push(bNew);
            }
            localStorage.setItem('WMEBookmarksShared', JSON.stringify(toSave));
        }
        //Reload HTML

        BKMcheckActiveCountry();
        if (container == 'divBookmarksContent') {
            getId('divBookmarksContent').innerHTML = '';
            loadBookmarks('WMEBookmarks', 'divBookmarksContent');
        } else {
            getId('divShareContent').innerHTML = '';
            loadBookmarks('WMEBookmarksShared', 'divShareContent');
        }
    }
    function BKMsuppr(name, id, container) { //Action after delete a bookmark (DB)
        clearTimeout(timer);
        if (debug) { console.info('WME Bookmarks Suppr: ', id); }
        var answer = window.confirm(lang[11] + ' ' + name.replace(/<\/?[^>]+(>|$)/g, "") + ' ?');
        if (answer) {
            var toSave=[];
            if (container === 'divHistoContent') {
                var a = JSON.parse(localStorage.WMEHistoric);
                for (var i = 0; a[i]; i++) {
                    var bNew={};
                    bNew.date=a[i].date;
                    bNew.perma=a[i].perma;
                    bNew.name=a[i].name;
                    if (JSON.stringify(bNew.perma) !== JSON.stringify(id)) { toSave.push(bNew); }
                }
                localStorage.setItem('WMEHistoric', JSON.stringify(toSave));
                getId('divHistoContent').innerHTML = '';
                loadBookmarks('WMEHistoric', 'divHistoContent');
            }
            else if (container === 'divCopyContent') {
                var a = JSON.parse(localStorage.WMECopyPastePOI);
                for (var i = 0; a[i]; i++) {
                    if (a[i].id != id.id) { toSave.push(a[i]); }
                    else {
                        if (getId('chkSynchro').checked === true) {
                            if (debug) { console.log('WME Copy POI: DELETE', BKMusername, bNew); }
                            BKMupdateCopy('DELETE', BKMusername, id.id);
                        }
                    }
                }
                localStorage.setItem('WMECopyPastePOI', JSON.stringify(toSave));
                getId('divCopyContent').innerHTML = '';
                loadBookmarks('WMECopyPastePOI', 'divCopyContent');
            }
            else if (container === 'divBookmarksContent') { // Suppr own bookmark
                var a = JSON.parse(localStorage.WMEBookmarks);
                for (var i = 0; a[i]; i++) {
                    var bNew={};
                    bNew.country=a[i].country;
                    bNew.name=a[i].name;
                    bNew.perma=a[i].perma;
                    bNew.comm=a[i].comm;
                    bNew.share=a[i].share;
                    bNew.reminder=a[i].reminder;
                    if (JSON.stringify(bNew.perma) !== JSON.stringify(id)) { toSave.push(bNew); }
                    else {
                        if (getId('chkSynchro').checked === true) {
                            if (debug) { console.log('WME Bookmarks: DELETE', BKMusername, bNew); }
                            BKMupdateBookmarks('DELETE', BKMusername, bNew, '');
                        }
                    }
                }
                localStorage.setItem('WMEBookmarks', JSON.stringify(toSave));
                getId('divBookmarksContent').innerHTML = '';
                loadBookmarks('WMEBookmarks', 'divBookmarksContent');
            }
            else { // Unshare a bookmark
                var a = JSON.parse(localStorage.WMEBookmarksShared);
                for (var i = 0; a[i]; i++) {
                    var bNew={};
                    bNew.owner = a[i].owner;
                    bNew.country = a[i].country;
                    bNew.name = a[i].name;
                    bNew.perma = a[i].perma;
                    bNew.comm = a[i].comm;
                    bNew.share = a[i].share;
                    bNew.reminder=a[i].reminder;
                    if (JSON.stringify(bNew.perma) !== JSON.stringify(id)) { toSave.push(bNew); }
                    else {
                        if (getId('chkSynchro').checked === true) {
                            if (debug) { console.log('WME Bookmarks: UNSHARE', a[i].owner, bNew); }
                            BKMupdateBookmarks('UNSHARE', BKMusername, bNew, '');
                        }
                    }
                }
                localStorage.setItem('WMEBookmarksShared', JSON.stringify(toSave));
                getId('divShareContent').innerHTML = '';
                loadBookmarks('WMEBookmarksShared', 'divShareContent');
            }
            getId('BKMedit').style.display = 'none';
        }
        BKMcheckActiveCountry();
    }
    function BKMrelocate(oldPerma, name, iconId) { // Action after relocate a bookmark (DB)
        clearTimeout(timer);
        var answer = window.confirm(lang[13] + ' Lon/Lat/Zoom ? (' + name + ')');
        if (answer) {
            var toSave=[];
            link={}; getLink(document.getElementsByClassName('WazeControlPermalink')[0].getElementsByClassName('permalink')[0].href);
            //Bookmarks list update
            if (getId('divBookmarks').style.visibility == 'visible') {
                var a = JSON.parse(localStorage.WMEBookmarks);
                for (var i = 0; a[i]; i++) {
                    var bNew={};
                    bNew.country = a[i].country;
                    bNew.name = a[i].name;
                    bNew.perma = a[i].perma;
                    bNew.comm = a[i].comm;
                    bNew.share = a[i].share;
                    bNew.reminder=a[i].reminder;
                    if (JSON.stringify(bNew.perma) === JSON.stringify(oldPerma)) {
                        bNew.perma = link;
                        if (getId('chkSynchro').checked === true) {
                            if (debug) { console.log('WME Bookmarks: RELOCATE New', BKMusername, bNew.perma, oldPerma); }
                            BKMupdateBookmarks('RELOCATE', BKMusername, bNew, oldPerma);
                        }
                    }
                    toSave.push(bNew);
                }
                localStorage.setItem('WMEBookmarks', JSON.stringify(toSave));
                getId('divBookmarksContent').innerHTML = '';
                loadBookmarks('WMEBookmarks', 'divBookmarksContent');
            }
            //Sharing list update
            if (getId('divShare').style.visibility == 'visible') {
                var a = JSON.parse(localStorage.WMEBookmarksShared);
                for (var i = 0; a[i]; i++) {
                    var bNew={};
                    bNew.owner = a[i].owner;
                    bNew.country = a[i].country;
                    bNew.name = a[i].name;
                    bNew.perma = a[i].perma;
                    bNew.comm = a[i].comm;
                    bNew.share = a[i].share;
                    bNew.reminder=a[i].reminder;
                    if (JSON.stringify(bNew.perma) === JSON.stringify(oldPerma)) {
                        bNew.perma = link;
                        if (getId('chkSynchro').checked === true) {
                            if (debug) { console.log('WME Bookmarks: RELOCATE',a[i].owner, bNew,  oldPerma); }
                            BKMupdateBookmarks('RELOCATE', a[i].owner, bNew, oldPerma);
                        }
                    }
                    toSave.push(bNew);
                }
                localStorage.setItem('WMEBookmarksShared', JSON.stringify(toSave));
                getId('divBookmarksContent').innerHTML = '';
                loadBookmarks('WMEBookmarksShared', 'divBookmarksContent');
            }
        }
        getId('iconRelocate_'+iconId).style.color="#bbb";
        BKMcheckActiveCountry();
    }
    function BKMinsertPermalink() { // Action when you add a new permalink (DB)
        BKMcountryActive = W.model.getTopCountry().name;
        link={}; getLink(document.getElementsByClassName('WazeControlPermalink')[0].getElementsByClassName('permalink')[0].href);

        //JSON for new permalink
        var bNew={};
        bNew.country=BKMcountryActive;
        bNew.name=getName();
        bNew.perma=link;
        bNew.comm='';
        bNew.share='';

        //Add in localStorage
        var lStorage = JSON.parse(localStorage.WMEBookmarks);
        lStorage.push(bNew);
        localStorage.setItem('WMEBookmarks', JSON.stringify(lStorage));
        if (getId('chkSynchro').checked === true) {
            if (debug) { console.log('WME Bookmarks: ADD', BKMusername, bNew); }
            BKMupdateBookmarks('ADD', BKMusername, bNew, '');
        }

        //Add in HTML table
        BKMtableHtml   ('divBookmarksContent', bNew, 9999);
        BKMhtmlEditName('divBookmarksContent', bNew);

        //Reload Select list if new country
        if (countries.indexOf(BKMcountryActive) == - 1) {
            BKMtableCountries();
            select(countries, 'selectCountry');
        }
        W.selectionManager.unselectAll();
        getId('tabBKM').click();
    }
    function BKMPastePerma() { // Action when you paste a permalink
        setTimeout(function () {
            var exp = new RegExp('/(https?://(?:www.|beta.|(?!www))[^s.]+.[^s]{2,}|www.[^s]+.[^s]{2,})', 'g');
            var a = BKMmapSearch.value;
            var b = BKMmapSearch.innerHTML;
            link={};
            //console.log("a",a, a.match(exp));
            //console.log("b",b, b.match(exp));

            //Paste a permalink
            if (a.match(/waze/g) && a.match(/editor/g) && a.match(/lon/g) && a.match(/lat/g)) { // WME
                getLink(a);
                if (debug) { console.log('WME Bookmarks WME link: ', link); }
                BKMjump(BKMcountryActive,link,'paste');
                setTimeout((function(){BKMaddHisto(link);}), 2500);
            }
            else if (a.match(/waze/g) && a.match(/livemap/g) && a.match(/latlng/g)) { // Livemap before 2021
                var b=a.split('?'), c=b[1].split('&'), d=c[0].split('='), e=d[1].split('%2C'), f=c[2].split('=');
                link.lat = e[0]; link.lon = e[1]; link.zoom = (f[1]-12);
                if (debug) { console.log('WME Bookmarks Livemap link: ', link); }
                BKMjump(BKMcountryActive,link,'paste');
                setTimeout((function(){BKMaddHisto(link);}), 2500);
            }
            else if (a.match(/waze/g) && (a.match(/live-map/g) && a.match(/to/g) || a.match(/ul/g))) { // Livemap 2021
                var b=a.split('='), c=b[1].split('%2C');
                link.lat = c[0]; link.lon = c[1];
                if (debug) { console.log('WME Bookmarks Livemap link 2021: ', link); }
                BKMjump(BKMcountryActive,link,'paste');
                setTimeout((function(){BKMaddHisto(link);}), 2500);
            }
            else if (a.match(exp) && a.match(/google/g) && a.match(/map/g) && a.match(/@/g)) { // Google Map URL
                var b=a.split('@'), c=b[1].split('/'), d=c[0].split(',');
                link.lat = d[0]; link.lon = d[1]; link.zoom = (d[2].substring(0, d[2].length-1)-12);
                if (debug) { console.log('WME Bookmarks Google link: ', link); }
                BKMjump(BKMcountryActive,link,'paste');
                setTimeout((function(){BKMaddHisto(link);}), 2500);
            }
            //Paste an ID
            else if (a.match(/\./g) && isNaN(a.replace(".",""))===false && a.length > 20) { //venue
                if (debug) { console.log('WME Bookmarks paste a venue: ', a); }
                objectsIsLoaded('vn:'+ a);
            }
            else if (isNaN(a)===false && a.length > 7) { //Segment or node
                if (debug) { console.log('WME Bookmarks paste a segment or node: ', a); }
                objectsIsLoaded('sg:'+ a);
            }
            //Reinit search-query
        }, 100);
    }
    function BKMjump(country,data,action) { // Action when you click a link
        //lastclic
        if (/link/.test(action) && getId('chkLastClic')) {
            for (var i=1; getId("link"+i); i++) {
                getId("link"+i).style.color='#59899e';
                if ("link"+i===action) {
                    getId("link"+i).style.color='#26bae8';
                    var a=JSON.parse(localStorage.WMEBookmarksSettings);
                    a.lastclic=action;
                    localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
                }
            }
        }
        //Move to
        W.map.setCenter(OpenLayers.Layer.SphericalMercator.forwardMercator(parseFloat(data.lon), parseFloat(data.lat)));
        if (debug) { console.log('BKMjump',country,data,action); }
        //Options
        if (getId('chkZoom').checked && data.zoom) { W.map.olMap.zoomTo(data.zoom); }
        if (getId('chkServer').checked) { W.model.events.register("mergeend", null, mapLoaded); }
        if (action != 'paste' && getId('chkLayers').checked && data.layers) { layersLoaded(data.layers); } // layers when bookmarks
        if (action === 'paste' && getId('chkLayersPaste').checked && data.layers) { layersLoaded(data.layers); } // layers when paste form searchbar
        if (typeof (data.segments)   != 'undefined') { objectsIsLoaded('sg:'+ data.segments); }
        else if (typeof (data.nodes) != 'undefined') { objectsIsLoaded('nd:'+ data.nodes); }
        else if (typeof (data.venues)!= 'undefined') { objectsIsLoaded('vn:'+ data.venues); }
        else if (typeof (data.MC) != 'undefined' && data.MC != 0) { objectsIsLoaded('mc:'+ data.MC); }
        else if (typeof (data.UR) != 'undefined' && data.UR != 0) { objectsIsLoaded('ur:'+ data.UR); }
        else if (typeof (data.MP) != 'undefined' && data.MP != 0) { objectsIsLoaded('mp:'+ data.MP); }
        else { colorSearch(); }
        //Reload list if country is changed
        if (country != W.model.getTopCountry().name) {
            getId('divBookmarksContent').innerHTML = '';
            loadBookmarks('WMEBookmarks', 'divBookmarksContent');
        }

        BKMaddButtonIfLoad();
    }

    // ************
    // **  MISC  **
    // ************

    function loadBookmarks(storage, dContainer) { //Fill HTML with localstorage
        var lStorage = localStorage.getItem(storage), bookmarkList=[];
        if (lStorage) {
            getId(dContainer).innerHTML = '';
            var a = JSON.parse(lStorage);
            if (getId('chkSort').checked) { a.reverse(); }
            var i=1;
            for (var p in a) {
                if(!a.hasOwnProperty(p)) continue;
                if (dContainer == 'divCopyContent') { BKMcopyPasteHtml(a[p]); }
                else if (dContainer == 'divHistoContent') { BKMhistoHtml(a[p]); }
                if (a[p].country == BKMcountryActive) {
                    BKMtableHtml(dContainer, a[p], i);
                    bookmarkList.push({name:a[p].name, lon:a[p].perma.lon, lat:a[p].perma.lat});
                    i++;
                }
            }
            update_bookmarks_layer(bookmarkList);
        }
    }
    function BKMaddButtonIfLoad() { //Show Pin if WME (permalink) is ready
        var a = getElementsByClassName('WazeControlPermalink') [0].innerHTML;
        if (!a.match(/lon/g)) {
            getId('addNodeButton').style.height='0';
            $('addNodeButton').hide();
            setTimeout(BKMaddButtonIfLoad, 500);
            return;
        } else {
            $('addNodeButton').show();
        }
    }
    function BMKcheckStorage() {
        var settings = JSON.parse(localStorage.WMEBookmarksSettings);
        if (!settings.version) {
            //Convert
            if (debug) { console.info('WME Bookmarks : Convert old data to new JSON'); }

            var a = JSON.parse(localStorage.getItem('WMEBookmarks')), lStorage=[];
            localStorage.setItem('WMEBookmarksShared', '[]');
            localStorage.setItem('WMEBookmarks', '[]');
            localStorage.setItem('WMEHistoric', '[]');
            for (var p in a) {
                if(!a.hasOwnProperty(p)) continue;

                //Redo Bookmark
                var bNew={};
                bNew.country=a[p].country;
                bNew.name=a[p].name;
                bNew.perma=BKMconvertPermalink(a[p].coord);
                bNew.comm=a[p].comm;
                bNew.share=a[p].share;
                bNew.reminder=a[p].reminder;

                //Store Bookmark
                lStorage.push(bNew);
            }
            localStorage.setItem('WMEBookmarks', JSON.stringify(lStorage));
            if (debug) { console.info('WME Bookmarks : New JSON > localStorage Ok !'); }

            // Memorize version
            settings['version']=BKMversion;
            localStorage.WMEBookmarksSettings=JSON.stringify(settings);
        }

    }
    function BKMcheckActiveCountry() { // Check Country and update select
        var BKMcountryActiveWME = W.model.getTopCountry().name;
        if (BKMcountryActive != BKMcountryActiveWME) {
            if (debug) { console.log('WME Bookmarks Country changed : ' + BKMcountryActive + ' > ' + BKMcountryActiveWME); }
            BKMcountryActive = BKMcountryActiveWME;
            select(countries, 'selectCountry');
            select(countriesS, 'selectCountryS');
            loadBookmarks('WMEBookmarks', 'divBookmarksContent');
            loadBookmarks('WMEBookmarksShared', 'divShareContent');
            getId('selectCountry').addEventListener("change",(function () {
                clearTimeout(timer);
                BKMcheckActiveCountry();
                BKMcountryActive = getId('selectCountry').value;
                getId('divBookmarksContent').innerHTML = '';
                loadBookmarks('WMEBookmarks', 'divBookmarksContent');
            }));
            getId('selectCountryS').addEventListener("change",(function () {
                clearTimeout(timer);
                BKMcheckActiveCountry();
                BKMcountryActive = getId('selectCountryS').value;
                getId('divShareContent').innerHTML = '';
                loadBookmarks('WMEBookmarksShared', 'divShareContent');
            }));
        }
        clearTimeout(timer);
        setTimeout(timer = setTimeout(BKMcheckActiveCountry, 5000),100);
    }
    function BMKcheckAutoSave() { //Show shared if sync with server
        if (getId('chkSynchro').checked === true) {
            $('#iconShare').animate({ width: '24px' }, 200);
        }
        else { $('#iconShare').animate({ width: '0' }, 200);
             }
    }
    function select(cArray, selectlist) { // Fill select
        //Add countries in select
        BKMcountryActive = W.model.getTopCountry().name;
        var CSelect = getId(selectlist);
        if (CSelect !== null) {
            CSelect.innerHTML = '';
            for (var k = 0; cArray[k]; k++) {
                var cList = document.createElement('option');
                cList.value =cArray[k];
                cList.text = cArray[k];
                if (cArray[k] == BKMcountryActive) cList.selected = true;
                CSelect.appendChild(cList);
            }
            //If country not listed
            if (cArray.indexOf(BKMcountryActive) == - 1) {
                cList = document.createElement('option');
                cList.value = BKMcountryActive;
                cList.text = BKMcountryActive;
                cList.selected = true;
                CSelect.appendChild(cList);
            }
        }
    }
    function mapLoaded() { // Test map server and change it if necessary
        if(typeof(W.model.getTopCountry()) === 'undefined' || W.model.getTopCountry() === null) { setTimeout(mapLoaded, 500); return; }
        var loc=W.model.getTopCountry().env.replace('NA','usa').toLowerCase();
        if (getId('chkServer').checked && loc !== W.app.getAppRegionCode()) {
            var a = JSON.parse(localStorage.mapLocation);
            a[loc]=a[W.app.getAppRegionCode()];
            localStorage.setItem('mapLocation', JSON.stringify(a));
            W.map.mapState.updateMapLocation(loc);
        }
    }
    function layersLoaded(layers) { // Load layers when jump
        var num = Number(layers).toString(2);
        num = num.split('').reverse().join('');
        // First : groups
        layerCheck("group_issues", num.charAt(0));
        layerCheck("group_map_issues", num.charAt(1));
        layerCheck("group_parking_issues", num.charAt(7));
        layerCheck("group_places", num.charAt(11));
        layerCheck("group_road", num.charAt(15));
        layerCheck("group_display", num.charAt(20));
        layerCheck("group_cities", num.charAt(27));
        // Second : items
        layerCheck("item_map_problems", num.charAt(2));
        layerCheck("item_closed_map_problems", num.charAt(3));
        layerCheck("item_update_requests", num.charAt(4));
        layerCheck("item_closed_update_requests", num.charAt(5));
        layerCheck("item_place_update_requests", num.charAt(6));
        layerCheck("item_residential_place_update_requests", num.charAt(30));
        layerCheck("item_parking_map_problems", num.charAt(8));
        layerCheck("item_parking_closed_map_problems", num.charAt(9));
        layerCheck("item_parking_place_update_requests", num.charAt(10));
        layerCheck("item_venues", num.charAt(12));
        layerCheck("item_residential_places", num.charAt(13));
        layerCheck("item_parking_places", num.charAt(14));
        layerCheck("item_road", num.charAt(16));
        layerCheck("item_junction_boxes", num.charAt(17));
        layerCheck("item_closures", num.charAt(18));
        layerCheck("item_speed_cameras", num.charAt(19));
        layerCheck("item_railroad_crossings", num.charAt(34));
        layerCheck("item_house_numbers", num.charAt(31));
        layerCheck("item_satellite_imagery", num.charAt(21));
        layerCheck("item_area_managers", num.charAt(22));
        layerCheck("item_gps_points", num.charAt(23));
        layerCheck("item_editable_areas", num.charAt(25));
        layerCheck("item_live_users", num.charAt(24));
        layerCheck("item_disallowed_turns", num.charAt(29));
        layerCheck("item_map_comments", num.charAt(26));
        layerCheck("item_city_names", num.charAt(28));

        function layerCheck(layerName, state) {
            try {
                if (getId("layer-switcher-"+layerName).checked && state==0 || getId("layer-switcher-"+layerName).checked===false && state==1) { getId("layer-switcher-"+layerName).click(); }
            } catch (e) { console.log("error while check layers: ", e); }
        }
    }
    function objectsIsLoaded(selObjects) {
        if (debug) { console.log('objectsIsLoaded',selObjects); }
        if (selObjects) {
            var objectsList = [], idObj=selObjects.substring(3).split(',');
            try {
                for (var i=0; idObj[i]; i++) {
                    // Identify type
                    switch (selObjects.substring(0, 2)) {
                        case 'sg':
                            var objType = W.selectionManager.model.segments.objects[idObj[i]];
                            var type = I18n.translations[I18n.locale].layers.name.segments;
                            break;
                        case 'nd':
                            var objType = W.selectionManager.model.nodes.objects[idObj[i]];
                            var type = I18n.translations[I18n.locale].layers.name.nodes;
                            break;
                        case 'vn':
                            var objType = W.selectionManager.model.venues.objects[idObj[i]];
                            var type = I18n.translations[I18n.locale].layers.name.landmarks;
                            break;
                        case 'ur':
                            var objType = "ur";
                            var type = I18n.translations[I18n.locale].layers.name.update_requests;
                            break;
                        case 'mp':
                            var objType = "mp";
                            var type = I18n.translations[I18n.locale].layers.name.problems;
                            break;
                        case 'mc':
                            var objType = W.selectionManager.model.mapComments.objects[idObj[i]];
                            var type = I18n.translations[I18n.locale].layers.name.comments;
                            break;
                        default : break;
                    }
                    // Try to select
                    if ((typeof objType === 'undefined' || typeof objType === 'string') &&
                        typeof W.map.updateRequestLayer.featureMarkers[idObj[i]] === 'undefined' &&
                        typeof W.map.problemLayer.featureMarkers[String(idObj[i].replace('%2F','/'))] === 'undefined'
                       ) {
                        count++;
                        if (debug) { console.info('LOOP (' + count + '): try to select '+type+' :' + idObj[i]); }
                        if (count >= 10) {
                            alert(type +'\n'+ I18n.translations[I18n.locale].problems.panel.more_info.not_available);
                            count=0;
                            setTimeout(function () {
                                BKMmapSearch.style.backgroundColor = '';
                                BKMmapSearch.style.color='';
                                BKMmapSearch.value='';
                                BKMmapSearch.placeholder=lang[17];
                            }, 2000);
                            return;
                        }
                        setTimeout((function(){ objectsIsLoaded(selObjects); }), 750);
                        return;
                    }
                    else {
                        if (debug) { console.info('LOOP : found '+type+' :' + idObj[i]); }
                        if (selObjects.substring(0, 2) === 'ur') { W.map.updateRequestLayer.featureMarkers[idObj[i]].marker.icon.$div[0].click(); }
                        else if (selObjects.substring(0, 2) === 'mp') { W.map.problemLayer.featureMarkers[String(idObj[i].replace('%2F','/'))].marker.icon.$div[0].click(); }
                        else if (selObjects.substring(0, 2) === 'vn') { objectsList.push(W.model.venues.objects[idObj[i]]); }
                        else if (selObjects.substring(0, 2) === 'nd') { objectsList.push(W.model.nodes.objects[idObj[i]]); }
                        else if (selObjects.substring(0, 2) === 'mc') { objectsList.push(W.model.mapComments.objects[idObj[i]]); }
                        else { objectsList.push(W.model.segments.objects[idObj[i]]); }
                        count=0;
                        setTimeout(function () {
                            BKMmapSearch.style.backgroundColor = '';
                            BKMmapSearch.style.color='';
                            BKMmapSearch.value='';
                            BKMmapSearch.placeholder=lang[17];
                        }, 2000);
                    }
                }
            } catch (e) {
                console.log("error while getting selected item: ", e);
            }
            selObjects = '';
            if (objType !== "none") {
                W.selectionManager.unselectAll();
                W.selectionManager.setSelectedModels(objectsList);
            }
            colorSearch(type);
        }
    }
    function BKMconvertPermalink(data) { //Redo permalink
        if (data) {
            var l=data.split("|"), link = {};
            link.env=l[5];
            link.lat=l[1];
            link.lon=l[0];
            link.zoom=l[2];
            link.layers=l[3];
            link.MP=l[6];
            link.UR=l[7];
            link.MC=l[8];
            if (l[4]) {
                switch (l[4].substring(0, 1)) {
                    case 's': link.segments = l[4].substring(2); break;
                    case 'n': link.nodes = l[4].substring(2); break;
                    case 'v': link.venues = l[4].substring(2); break;
                }
            }
            Object.keys(link).sort();
            return link;
        }
    }
    function colorSearch(msg) {
        setTimeout(function () {
            BKMmapSearch.style.backgroundColor='#4d4d4d';
            BKMmapSearch.style.color='white';
            (msg ? msg=msg+': ' : msg='')
            BKMmapSearch.value=msg+lang[18];
        }, 500);
        setTimeout(function () {
            BKMmapSearch.style.backgroundColor = '';
            BKMmapSearch.style.color='';
            BKMmapSearch.value='';
            BKMmapSearch.placeholder=lang[17];
        }, 2000);
    }

    // ***********************
    // ** ANIMATE FUNCTIONS **
    // ***********************

    function bookmarksToggle() {
        $('#divBookmarks').css('visibility', 'visible');
        $('#divContent').css('display', 'block');
        $('#divBookmarks').slideDown();  $('#iconBookmarks').css('color', '#36c');
        $('#divShare').slideUp(); $('#iconShare').css('color', '#bbb');
        $('#divHisto').slideUp(); $('#iconHisto').css('color', '#bbb');
        $('#divCopy').slideUp(); $('#iconCopy').css('color', '#bbb');
        $('#divBackup').slideUp(); $('#iconBackup').css('color', '#bbb');
        $('#divSettings').slideUp(); $('#iconSettings').css('color', '#bbb');
        $('#BKMedit').slideUp(200);
        BKMcheckActiveCountry();
        reloadHtmlBookmarks();
        if (getId('chkSynchro').checked === true) { getBookmarks(); }
    }
    function shareToggle() {
        $('#divShare').css('visibility', 'visible');
        $('#divContent').css('display', 'block');
        $('#divBookmarks').slideUp();  $('#iconBookmarks').css('color', '#bbb');
        $('#divShare').slideDown(); $('#iconShare').css('color', '#36c');
        $('#divHisto').slideUp(); $('#iconHisto').css('color', '#bbb');
        $('#divCopy').slideUp(); $('#iconCopy').css('color', '#bbb');
        $('#divBackup').slideUp(); $('#iconBackup').css('color', '#bbb');
        $('#divSettings').slideUp(); $('#iconSettings').css('color', '#bbb');
        $('#BKMedit').slideUp(200);
        BKMcheckActiveCountry();
        getShared();
    }
    function histoToggle() {
        $('#divHisto').css('visibility', 'visible');
        $('#divContent').css('display', 'block');
        $('#divBookmarks').slideUp();  $('#iconBookmarks').css('color', '#bbb');
        $('#divShare').slideUp(); $('#iconShare').css('color', '#bbb');
        $('#divHisto').slideDown(); $('#iconHisto').css('color', '#36c');
        $('#divCopy').slideUp(); $('#iconCopy').css('color', '#bbb');
        $('#divBackup').slideUp(); $('#iconBackup').css('color', '#bbb');
        $('#divSettings').slideUp(); $('#iconSettings').css('color', '#bbb');
        $('#BKMedit').slideUp(200);
        loadBookmarks('WMEHistoric', 'divHistoContent');
    }
    function copyToggle() {
        $('#divCopy').css('visibility', 'visible');
        $('#divContent').css('display', 'block');
        $('#divBookmarks').slideUp();  $('#iconBookmarks').css('color', '#bbb');
        $('#divShare').slideUp(); $('#iconShare').css('color', '#bbb');
        $('#divHisto').slideUp(); $('#iconHisto').css('color', '#bbb');
        $('#divCopy').slideDown(); $('#iconCopy').css('color', '#36c');
        $('#divBackup').slideUp(); $('#iconBackup').css('color', '#bbb');
        $('#divSettings').slideUp(); $('#iconSettings').css('color', '#bbb');
        $('#BKMedit').slideUp(200);
        reloadHtmlCopy();
        if (getId('chkSynchro').checked === true) { getCopyPaste(); }
    }
    function backupToggle() {
        $('#divBackup').css('visibility', 'visible');
        $('#divContent').css('display', 'block');
        $('#divBookmarks').slideUp();  $('#iconBookmarks').css('color', '#bbb');
        $('#divShare').slideUp(); $('#iconShare').css('color', '#bbb');
        $('#divHisto').slideUp(); $('#iconHisto').css('color', '#bbb');
        $('#divCopy').slideUp(); $('#iconCopy').css('color', '#bbb');
        $('#divBackup').slideDown(); $('#iconBackup').css('color', '#36c');
        $('#divSettings').slideUp(); $('#iconSettings').css('color', '#bbb');
        $('#BKMedit').slideUp(200);
        BKMbackup();
    }
    function settingsToggle() {
        $('#divSettings').css('visibility', 'visible');
        $('#divContent').css('display', 'block');
        $('#divBookmarks').slideUp();  $('#iconBookmarks').css('color', '#bbb');
        $('#divShare').slideUp(); $('#iconShare').css('color', '#bbb');
        $('#divHisto').slideUp(); $('#iconHisto').css('color', '#bbb');
        $('#divCopy').slideUp(); $('#iconCopy').css('color', '#bbb');
        $('#divBackup').slideUp(); $('#iconBackup').css('color', '#bbb');
        $('#divSettings').slideDown(); $('#iconSettings').css('color', '#36c');
        $('#BKMedit').slideUp(200);
    }

    // ********************
    // ** BOOKMARK LAYER **
    // ********************

    function checklayer(layer) {
        if(W.map.getLayersBy("uniqueName",layer).length === 0) {
            var LU_style=new OpenLayers.Style({
                pointRadius: 2,
                fontWeight: "normal",
                label : "${labelText}",
                fontFamily: "Tahoma, Courier New",
                labelOutlineColor: "#FFFFFF",
                labelOutlineWidth: 2,
                fontColor: '#000000',
                fontSize: "10px"
            });
            if (layer=="__WME_Bookmarks") {
                bookmarks_Layer=new OpenLayers.Layer.Vector("Bookmarks", {
                    displayInLayerSwitcher: true,
                    uniqueName: layer,
                    shortcutKey: "S+b"
                    //styleMap: new OpenLayers.StyleMap(LU_style)
                });
                bookmarks_Layer.setVisibility(false);
                W.map.addLayer(bookmarks_Layer);
                I18n.translations[I18n.locale].layers.name[layer]="Bookmarks";
            }
        }
    }
    function createToggler(){
        // Layers switcher
        // test with script toggler----------------
        var oldTogglers=document.querySelectorAll('.togglers');
        oldTogglers.forEach(function(elt,indx){
            if(elt.id != "toolboxUl"){
                if (oldTogglers[indx].querySelector('.layer-switcher-group_scripts') === null) {
                    var newScriptsToggler=document.createElement('li');
                    newScriptsToggler.className='group';
                    newScriptsToggler.innerHTML='<div class="controls-container main toggler">\<input class="layer-switcher-group_scripts toggle" id="layer-switcher-group_scripts" type="checkbox">\<label for="layer-switcher-group_scripts">\<span class="label-text">Scripts</span>\</label>\</div>\<ul class="children">\</ul>';
                    oldTogglers[indx].appendChild(newScriptsToggler);
                }

                var groupScripts=document.querySelector('.layer-switcher-group_scripts').parentNode.parentNode;
                var newScriptsChildren=getElementsByClassName("children", groupScripts)[0];

                var WMECS_toggleUser=document.createElement('li');
                WMECS_toggleUser.innerHTML='<div class="controls-container toggler">\<input class="layer-switcher-item_WME_bookmarks toggle" id="layer-switcher-item_WME_bookmarks" type="checkbox">\<label for="layer-switcher-item_WME_bookmarks">\<span class="label-text">Bookmarks</span>\</label>\</div>';
                newScriptsChildren.appendChild(WMECS_toggleUser);
                var toggleUser=getId('layer-switcher-item_WME_bookmarks');

                newScriptsChildren.appendChild(WMECS_toggleUser);

                var groupToggler=getId('layer-switcher-group_scripts');
                groupToggler.checked=(typeof(localStorage.groupScriptsToggler) !=="undefined" ?
                                      JSON.parse(localStorage.groupScriptsToggler) : true);

                toggleUser.disabled=!groupToggler.checked;
                toggleUser.addEventListener('click', function(e) {
                    bookmarks_Layer.setVisibility(e.target.checked);
                    var a=JSON.parse(localStorage.WMEBookmarksSettings);
                    a.showBookmark=e.target.checked;
                    localStorage.setItem('WMEBookmarksSettings', JSON.stringify(a));
                });

                groupToggler.addEventListener('click', function(e) {
                    toggleUser.disabled=!e.target.checked;
                    bookmarks_Layer.setVisibility(toggleUser.checked ? e.target.checked : toggleUser.checked);
                    localStorage.setItem('groupScriptsToggler', e.target.checked);
                });
            }
        });

    }
    function update_bookmarks_layer(bookmarkList) {
        if (bookmarks_Layer.visibility == true && bookmarkList.length != 0) {
            bookmarks_Layer.destroyFeatures();
            for (var k=0; k < bookmarkList.length; k++) {
                var marker=new OpenLayers.Feature.Vector(Geometrize(bookmarkList[k].lon, bookmarkList[k].lat), null, {
                    fillOpacity: 1,
                    fontSize: 15,
                    fontColor: "#ffff00",
                    label: bookmarkList[k].name,
                    labelYOffset: 22,
                    labelOutlineColor: "#ff0000",
                    labelOutlineWidth: 5,
                    stroke: true,
                    strokeColor: "#ff0000",
                    strokeWidth: 15,
                    strokeDashstyle: "solid"
                });
                var showBookmarks_Layer=W.map.layers.find(function (l) { return l.uniqueName == "__WME_Bookmarks"; });
                showBookmarks_Layer.addFeatures(marker);
            }
        }
    }
    function Geometrize(lat, lon) {
        var polyPoints= new OpenLayers.Geometry.Point(lat,lon).transform( new OpenLayers.Projection("EPSG:4326") , W.map.getProjectionObject());
        var polygon=new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(polyPoints));
        return polygon;
    }

    // *************************
    // ** PREV/NEXT FUNCTIONS **
    // *************************

    function updatePos(){
        if(_stopUpdPos)return;
        var perma = getPermalink();
        var DPerma = DecodePermalink(perma);
        if(DPerma['zoom'] < 4) return;
        if(_cur == perma) return;

        if(_cur !== ''){
            var newDPerma = DecodePermalink(perma);
            var oldDPerma = DecodePermalink(_cur);
            if(oldDPerma['lat'] == newDPerma['lat'] && oldDPerma['lon'] == newDPerma['lon'] && oldDPerma['zoom'] == newDPerma['zoom']){
                function checkElm(type, patt){
                    _cur = _cur.replace(patt, '');
                    if(typeof(newDPerma[type]) !== 'undefined'){
                        _cur = _cur + perma.match(patt)[1];
                    }
                }
                checkElm('layers', /(&s=[\d]+)/);
                checkElm('segments', /(&segments=[\d,]+)/);
                checkElm('nodes', /(&nodes=[\d]+)/);
                checkElm('venues', /(&venues=[\d.-]+)/);
                checkElm('mapComments', /(&mapComments=[\d.-]+)/);
                return;
            }
            _prev.unshift(_cur);
        }
        _cur = perma;
        if(_prev.length > 0) { getId('prevIcon').className='toolbar-button toolbar-button-with-label'; }
        if(_next.length == 0) { getId('nextIcon').className='toolbar-button toolbar-button-with-label ItemDisabled'; }
        else { getId('nextIcon').className='toolbar-button toolbar-button-with-label'; }

        //	Limit historic to 20
        while(_prev.length > 19)_prev.pop();
        var a={}; a.prev=_prev; a.next=_next;
        localStorage.setItem('WMEPrevNext', JSON.stringify(a));
    }
    function NavNext(e){
        if(e.ctrlKey || e.altKey){
            clearHistoric(e,false);
            return;
        }
        if(_next.length > 0){
            _prev.unshift(_cur);
            _cur = _next.shift();
            getId('prevIcon').className='toolbar-button toolbar-button-with-label';
            if(_next.length === 0) { getId('nextIcon').className='toolbar-button toolbar-button-with-label ItemDisabled'; }
            var a={}; a.prev=_prev; a.next=_next;
            localStorage.setItem('WMEPrevNext', JSON.stringify(a));
            RelocateMap();
        }
        else getId('nextIcon').className='toolbar-button toolbar-button-with-label ItemDisabled';
    }
    function NavPrev(e){
        if(e.ctrlKey || e.altKey){
            clearHistoric(e, true);
            return;
        }
        if(_prev.length > 0){
            _next.unshift(_cur);
            _cur = _prev.shift();
            getId('nextIcon').className='toolbar-button toolbar-button-with-label';
            if(_prev.length === 0) { getId('prevIcon').className='toolbar-button toolbar-button-with-label ItemDisabled'; }
            var a={}; a.prev=_prev; a.next=_next;
            localStorage.setItem('WMEPrevNext', JSON.stringify(a));
            RelocateMap();
        }
        else getId('prevIcon').className='toolbar-button toolbar-button-with-label ItemDisabled';
    }
    function clearHistoric(e, isPrev){
        if(e.altKey){
            _prev.splice(0, _prev.length);
            getId('prevIcon').className='toolbar-button toolbar-button-with-label ItemDisabled';
            _next.splice(0, _next.length);
            getId('nextIcon').className='toolbar-button toolbar-button-with-label ItemDisabled';
        }
        else{
            if(isPrev){
                _prev.splice(0, _prev.length);
                getId('prevIcon').className='toolbar-button toolbar-button-with-label ItemDisabled';
            }
            else{
                _next.splice(0, _next.length);
                getId('nextIcon').innerHTML='<i class="fa fa-arrow-circle-right"></i>';
            }
        }
    }
    function getPermalink(){
        return document.getElementsByClassName('WazeControlPermalink')[0].getElementsByClassName('permalink')[0].href;
    }
    function checkPermaLink(){
        _newP = getPermalink();
        if(_newP != _oldP){
            _oldP = _newP;
            updatePos();
        }
    }
    function DecodePermalink(perma){
        var DecodedPerma = [];
        perma = perma.replace(/#$/, '');
        var patt = /[?&](\w+)=([\w\d-.,]+)/g;
        var res = perma.match(patt);
        for(var i=0; i < res.length; i++){
            patt = /[?&](\w+)=([\w\d-.,]+)/;
            nres = res[i].match(patt);
            DecodedPerma[nres[1]] = nres[2];
        }
        return DecodedPerma;
    }
    function RelocateMap(){
        _stopUpdPos = true;
        if (getId('chkHistoSelect').checked) { W.selectionManager.unselectAll(); }
        var DecodedPerma = DecodePermalink(_cur);
        W.map.setCenter(OpenLayers.Layer.SphericalMercator.forwardMercator(parseFloat(DecodedPerma.lon), parseFloat(DecodedPerma.lat)));
        W.map.olMap.zoomTo(DecodedPerma.zoom);
        updateSelectedItems();
    }
    function updateSelectedItems(){
        if(_cur == '')return;
        _stopUpdPos = true;
        var DecodedPerma = DecodePermalink(_cur);
        var tmp;
        if(typeof(DecodedPerma['segments']) !== 'undefined'){
            if(!selectSegments(DecodedPerma['segments'].split(",")))return;
        }
        else if(typeof(DecodedPerma['venues']) !== 'undefined'){
            tmp = W.model.venues.getObjectById(DecodedPerma['venues']);
            if(tmp === 'undefined')return;
            selectItem([tmp]);
        }
        else if(typeof(DecodedPerma['nodes']) !== 'undefined'){
            tmp = W.model.nodes.getObjectById(DecodedPerma['nodes']);
            if(tmp === 'undefined')return;
            selectItem([tmp]);
        }
        else if(typeof(DecodedPerma['mapComments']) !== 'undefined'){
            TMP + W.model.mapComments.getObjectById(DecodedPerma['mapComments']);
            if(tmp === 'undefined')return;
            selectItem([tmp]);
        }
        _stopUpdPos = false;

        function selectSegments(segList){
            var segObj = [];
            for(var i=0; i<segList.length; i++){
                var theSeg = W.model.segments.getObjectById(segList[i]);
                if(typeof(theSeg) !== 'undefined')segObj.push(theSeg);
            }
            if(segObj.length > 0){
                selectItem(segObj);
                return true;
            }
            return false;
        }

        function selectItem(obj){
            if(getId('chkHistoNav').checked && getId('chkHistoSelect').checked) {  W.selectionManager.setSelectedModels(obj); }
        }
    }

    console.log('WME Bookmarks : ' + BKMversion + ' starting');
    BKMinit();
}

var BKMscript = GM_addElement('script', {
    textContent: runBKM.toString() + ' \n' + 'runBKM();'
});
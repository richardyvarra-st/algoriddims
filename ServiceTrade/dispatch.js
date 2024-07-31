/* Rename ‘servicetrade_assets’ to ‘asset_list’ */
SF.payload.asset_list = SF.payload.servicetrade_assets;


/* Add the location’s state to each asset in the ‘servicetrade_assets’ array */
SF.payload.servicetrade_assets.forEach(function(a) {
	a.location_state = SF.payload.servicetrade_location_state;
});



/* Convert an asset property Unix timestamp to Device Magic friendly date format */
SF.payload.servicetrade_assets.forEach(function(a) {
	a.properties_manufacture_date = Moment(a.properties_manufacture_date, 'X').format('YYYY-MM-DD');
});

/* Don’t dispatch this form for emergency service calls */
if (SF.job.type === 'emergency_service_call') {
	SF.payload.prevent_dispatch = true;
}

/* Remove the job description */
SF.payload.servicetrade_job_description = undefined;


/* Get a value that might or might not be defined, using ‘Get’ */
SF.payload.servicetrade_contact_email = Get(SF,'job.location.primaryContact.email');
// the old way was:
SF.payload.servicetrade_contact_email = SF.job && SF.job.location && SF.job.location.primaryContact ? SF.job.location.primaryContact.email : null;


/* Organize all child assets under their parents */
// separate parents from children
const parentAssets = SF.payload.servicetrade_assets.filter(a => !a.parent || a.parent.name === 'Location - Building');
const childAssets = SF.payload.servicetrade_assets.filter(a => a.parent && a.parent.name !== 'Location - Building');

// add child array container for each parent
parentAssets.forEach(p => p.children = []);

// assign children to their parents
childAssets.forEach(c => {
	const foundParent = parentAssets.find(p => p.id === c.parentId);
	if (foundParent) {
        foundParent.children.push(c);
	}
});

// servicetrade_assets is now only the parents (with their nested children underneath)
SF.payload.servicetrade_assets = parentAssets;

/*Organize all child assets under their parents within separated but nested repeat groups. Also in this example is dispatching asset properties into a subfolder group within a repeat group.*/

const servicetrade_assets_sprinkler_system_group = SF.payload.servicetrade_assets_sprinkler_system_group || [];
const servicetrade_assets_sprinkler = SF.payload.servicetrade_assets_sprinkler || [];
servicetrade_assets_sprinkler_system_group.forEach(p => p.servicetrade_assets_sprinkler = []);
// assign children to their parents
servicetrade_assets_sprinkler.forEach(c => {
	const foundParent = servicetrade_assets_sprinkler_system_group.find(p => p.id === c.parentId);
	if (foundParent) {
		foundParent.servicetrade_assets_sprinkler.push({
            // this everything that's outside the subform group
            asset_id: c.asset_id, 
            // this is everything inside the subform group
            Sprinkler_Information: c
        });
	}
});
// servicetrade_assets is now only the parents (with their nested children underneath)
SF.payload.servicetrade_assets_sprinkler_system_group = servicetrade_assets_sprinkler_system_group;


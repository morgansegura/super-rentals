import Component from '@ember/component';

export default Component.extend({
	isWide: false,
	actions: {
		toggleImageSizes() {
			this.toggleProperty('isWide');
		}
	}
});

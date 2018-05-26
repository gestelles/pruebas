import button from 'app/components/button/button';
import list from 'app/components/list/list';
import template from './hello.html';

export default {
    name: 'vg-hello',
    template,
    components: {
        [button.name]: button,
        [list.name]: list
    },
    data: () => ({
        items: ['item-1', 'item-2', 'item-3']
    })
};
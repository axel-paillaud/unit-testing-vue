import LoginForm from '@/components/LoginForm.vue';
import { mount } from '@vue/test-utils';

describe('LoginForm', () => {
    test('emits an event with a user data payload', () => {
        const wrapper = mount(LoginForm);

        const input = wrapper.find('[data-testid="name-input"]');

        input.setValue('Axel Paillaud');
        wrapper.trigger('submit');

        const formSubmittedCalls = wrapper.emitted('formSubmitted');
        expect(formSubmittedCalls).toHaveLength(1);

        const expectedPayload = {'name': 'Axel Paillaud'};
        expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload);
    });
});

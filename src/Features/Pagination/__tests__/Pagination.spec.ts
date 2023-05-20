import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import PaginationFeature from '..';

const mockProps = {
  maxVisibleButtons: 3,
  totalPages: 3,
  perPage: 9,
  currentPage: 2,
};

describe('Pagination', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PaginationFeature, {
      props: mockProps,
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('displays actual page which is equal to current page prop', () => {
    expect(wrapper.vm.actualPage).toBe(mockProps.currentPage);
  });

  it('next button increments actual page by 1', () => {
    wrapper.vm.onClickNextPage();
    expect(wrapper.vm.actualPage).toBe(mockProps.currentPage + 1);
  });

  it('previous button decrements actual page by 1', () => {
    wrapper.vm.onClickPreviousPage();
    expect(wrapper.vm.actualPage).toBe(mockProps.currentPage - 1);
  });

  it('first button sets actual page to 1', () => {
    wrapper.vm.onClickFirstPage();
    expect(wrapper.vm.actualPage).toBe(1);
  });

  it(`last button sets actual page to ${mockProps.totalPages}`, () => {
    wrapper.vm.onClickLastPage();
    expect(wrapper.vm.actualPage).toBe(mockProps.totalPages);
  });

  it(`onClickPage sets actual page to the required page`, () => {
    wrapper.vm.onClickPage(4);
    expect(wrapper.vm.actualPage).toBe(4);
  });
});

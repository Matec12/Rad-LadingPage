import { Icon } from '@iconify/react';
import { usePagination, DOTS } from '@/hooks/usePagination';
import clsxm from '@/utils/clsxm';

interface IPaginationProps {
  onPageChange: (p: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}: IPaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange![paginationRange!.length - 1];

  return (
    <ul className={clsxm('pagination-container', className)}>
      <li
        className={clsxm('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <Icon icon='entypo:chevron-small-left' />
      </li>

      {paginationRange!.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className='pagination-item dots'>&#8230;</li>;
        }

        return (
          <li
            className={clsxm('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber as number)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={clsxm('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <Icon icon='entypo:chevron-small-right' />
      </li>
    </ul>
  );
};

export default Pagination;

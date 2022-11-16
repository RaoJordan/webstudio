import type { RenderCategoryProps } from "../../style-sections";
import { ShowMore } from "../../shared/show-more";
import { renderProperty } from "../../style-sections";

export const SizeSection = ({
  styleConfigsByCategory,
  moreStyleConfigsByCategory,
}: RenderCategoryProps) => {
  return (
    <>
      {styleConfigsByCategory.map((entry) => renderProperty(entry))}
      <ShowMore
        styleConfigs={moreStyleConfigsByCategory.map((entry) =>
          renderProperty(entry)
        )}
      />
    </>
  );
};
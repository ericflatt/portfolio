exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;
  
    // If the page is the protected page, set the context to prevent direct access
    if (page.path === '/protected-page/') {
      deletePage(page);
      createPage({
        ...page,
        context: {
          ...page.context,
          protected: true,
        },
      });
    }
  };
  
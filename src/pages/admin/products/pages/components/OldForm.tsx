const OldForm = () => {
  return (
    <Form
      id='createProductForm'
      onSubmit={methods.handleSubmit(handleCreateProduct)}
      className='grid grid-cols-[3fr,1fr] gap-8 flex-grow px-8 max-w-screen-2xl mx-auto'
      devtools={true}
      methods={methods}
    >
      <div className='col-span-1 flex flex-col gap-4'>
        <BasicInfoPanel />
        <ImagesPanel />
      </div>
      <div className='col-span-1 flex flex-col gap-4'>
        <StatusPanel />
        <ProductGroupPanel />
        <CategoryPanel />
        <TagsPanel />
      </div>
      <Panel className='col-span-2'>
        <div className='flex gap-4 ml-auto'>
          <Button
            color='danger'
            onClick={() => methods.reset(DEFAULT_NEW_PRODUCT)}
            form='createProductForm'
          >
            Reset
          </Button>
          <Button
            className='bg-sky-500 hover:bg-sky-600'
            onClick={handleSaveDraft}
          >
            Save Draft
          </Button>
          <Button type='submit'>Submit</Button>
        </div>
      </Panel>
    </Form>
  );
};

export default OldForm;

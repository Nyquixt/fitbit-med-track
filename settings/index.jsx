function settingsComponent(props) {
  return (
    <Page>
        <Section
            title = {
                <Text>Your Medicine Tracker</Text>
            }>
            <Text>
                We limit the number of entries to 6 items because we do not want you to take TOO much medicine or supplement in a day!!!
            </Text>
        </Section>
        <AdditiveList
            title="Monday"
            settingsKey="monday-list"
            maxItems="6"
            addAction={
                <TextInput
                label="Add a supplement/medicine"
                placeholder="i.e. Vitamin C"
                action="Add"
                />
            }
        />

        <AdditiveList
            title="Tuesday"
            settingsKey="tuesday-list"
            maxItems="6"
            addAction={
                <TextInput
                label="Add a supplement/medicine"
                placeholder="i.e. Vitamin C"
                action="Add"
                />
            }
        />

        <AdditiveList
            title="Wednesday"
            settingsKey="wednesday-list"
            maxItems="6"
            addAction={
                <TextInput
                label="Add a supplement/medicine"
                placeholder="i.e. Vitamin C"
                action="Add"
                />
            }
        />

        <AdditiveList
            title="Thursday"
            settingsKey="thursday-list"
            maxItems="6"
            addAction={
                <TextInput
                label="Add a supplement/medicine"
                placeholder="i.e. Vitamin C"
                action="Add"
                />
            }
        />

        <AdditiveList
            title="Friday"
            settingsKey="friday-list"
            maxItems="6"
            addAction={
                <TextInput
                label="Add a supplement/medicine"
                placeholder="i.e. Vitamin C"
                action="Add"
                />
            }
        />

        <AdditiveList
            title="Saturday"
            settingsKey="saturday-list"
            maxItems="6"
            addAction={
                <TextInput
                label="Add a supplement/medicine"
                placeholder="i.e. Vitamin C"
                action="Add"
                />
            }
        />

        <AdditiveList
            title="Sunday"
            settingsKey="sunday-list"
            maxItems="6"
            addAction={
                <TextInput
                label="Add a supplement/medicine"
                placeholder="i.e. Vitamin C"
                action="Add"
                />
            }
        />
    </Page>
  );
}

registerSettingsPage(settingsComponent);
